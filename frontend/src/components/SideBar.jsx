import React, { useState } from 'react';
import axios from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function SideBar() {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const fetchOrganizations = async (search) => {
    if (!search.trim()) {
      setSearchData([]);
      setShowDropdown(false);
      return;
    }

    try {
      const res = await axios.get('/posts/search', {
        params: { search },
      });
      setSearchData(res.data.slice(0, 3)); // Show top 3 only
      setShowDropdown(true);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchOrganizations(value);
  };

  const handleResultClick = (id) => {
    navigate(`/post/${id}`);
    setSearch('');
    setSearchData([]);
    setShowDropdown(false);
  };

  return (
    <div className='h-screen overflow-hidden'>
      {/* Sidebar */}
      <aside className="w-64 h-full bg-gray-50 p-6 border-r relative">
        {/* Search Input with Icon */}
        <div className="relative mb-4">
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => fetchOrganizations(search)}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-100"
            value={search}
            onChange={handleInputChange}
            onFocus={() => searchData.length > 0 && setShowDropdown(true)}
          />

          {/* Search Results Dropdown */}
          {showDropdown && searchData.length > 0 && (
            <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 rounded-md shadow z-10 max-h-60 overflow-y-auto">
              {searchData.map((org) => (
                <div
                  key={org._id}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(org._id)}
                >
                  <img
                    src={org.report.imageUrl}
                    alt={org.report.title}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium truncate">
                      {org.report.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {org.report.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Filters</h2>
          <div className="flex flex-wrap gap-2">
            {['Category', 'Organization', 'Date', 'Location'].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 bg-gray-200 text-sm rounded-full"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* All (fetched) Results Section (Optional) */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Results</h2>
          <div className="space-y-4">
            {searchData.map((org) => (
              <div key={org._id} className="flex items-center gap-3">
                <img
                  src={org.report.imageUrl}
                  alt={org.report.title}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{org.report.title}</p>
                  <p className="text-xs text-gray-500">
                    {org.report.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
