import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { data } from '../lib/data';
import Card from '../components/Card';

function ProfilePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profilePic, setProfilePic] = useState('/profile.png');
  const [userName, setUserName] = useState('');
  const [joinedDate, setJoinedDate] = useState('');
  const [activeTab, setActiveTab] = useState('events');

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/auth/check', {
//           withCredentials: true,
//         });
//         setProfilePic(res.data.profilePic || '/profile.png');
//         setUserName(res.data.fullName || 'Anonymous');
//         setJoinedDate(new Date(res.data.createdAt).getFullYear());
//       } catch (err) {
//         console.error('Auth check failed:', err);
//         navigate('/login');
//       }
//     };
//     fetchUser();
//   }, [navigate]);

  const handlePicUpdate = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const response = await axios.put(
        'http://localhost:3000/api/auth/update',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      if (response.data.profilePic) {
        setProfilePic(response.data.profilePic);
      } else {
        alert('Upload failed: No profilePic returned from backend');
      }
    } catch (err) {
      console.error('Upload failed:', err.response?.data || err.message);
      alert('Upload failed. You may not be authenticated.');
    }
  };

  return (
    <div className='w-full flex justify-center bg-[#F7F9FC] min-h-screen'>
      <div className='w-4/5 max-w-3xl pt-16'>
        <div className='relative flex flex-col items-center gap-y-4'>
          {/* Profile Picture */}
          <div className='relative'>
            <img
              src={profilePic}
              alt='Profile'
              className='w-40 h-40 object-cover rounded-full border-4 border-white shadow-md'
            />
            <button
              className='absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100'
              onClick={handlePicUpdate}
              title='Edit Profile Picture'
            >
              <FiEdit2 className='text-gray-700' />
            </button>
            <input
              type='file'
              accept='image/*'
              ref={fileInputRef}
              className='hidden'
              onChange={handleFileChange}
            />
          </div>

          {/* User Info */}
          <div className='text-center'>
            <h2 className='text-xl font-bold'>{userName}</h2>
            <p className='text-[#4A709C]'>Activist | Environmentalist | Volunteer</p>
            <p className='text-[#4A709C]'>Joined in {joinedDate}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className='mt-10'>
          <div className='flex space-x-6 border-b border-gray-300 text-sm font-medium'>
            <button
              className={`pb-2 ${
                activeTab === 'posts' ? 'border-b-2 border-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button
              className={`pb-2 ${
                activeTab === 'events' ? 'border-b-2 border-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='mt-6 space-y-6'>
          {(activeTab === 'events' ? data : data).map((post, index) => (
            <div
              key={index}
              className='flex justify-between items-start bg-white p-4 rounded-lg shadow-sm'
            >
              {/* Text Content */}
              <div className='flex-1 pr-4'>
                <p className='text-sm text-gray-500'>{post.day}</p>
                <h3 className='font-semibold text-lg'>{post.title}</h3>
                <p className='text-gray-600 text-sm mt-1'>{post.desc}</p>
                <button className='mt-3 px-4 py-1 bg-gray-100 text-sm rounded hover:bg-gray-200'>
                  View
                </button>
              </div>

              {/* Image */}
              <div className='w-36 h-24 shrink-0'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-full object-cover rounded-md'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
