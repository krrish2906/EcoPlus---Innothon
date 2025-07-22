import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { reports } from '../lib/data';
import Report from '../components/Report';
import axios from '../api/api'

function CommunityPage() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('events');
    const [status, setStatus] = useState({
        isFollowed: false,
        followers: 0
    });
    const [organisation, setOrganisation] = useState({});

    const handleFollow = async () => {
        try {
            const response = await axios.post('/auth/organisations/follow', {
                organisationId: organisation._id
            });
            if (response.data && response.data.success) {
                const action = response.data.action === "followed"
                // Refetch organisation data to update followers
                const refreshed = await axios.get(`/auth/organisations/${id}`);
                if (refreshed.status === 200) {
                    setOrganisation(refreshed.data);
                    console.log(refreshed.data)
                    setStatus({
                        isFollowed: action,
                        followers: refreshed.data.followers.length
                    });
                    
                }
            }
        } catch (error) {
            console.error("Error following/unfollowing organisation:", error);
        }
    };

    useEffect(() => {
        async function fetchOrganisation(id) {
            if(!id) return;
            try {
                const response = await axios.get(`/auth/organisations/${id}`);
                if(response.status === 200) {
                    setOrganisation(response.data)
                }   
            } catch (error) {
                console.log(error)
            }
        }
        fetchOrganisation(id);
    }, [id]);

    useEffect(() => {console.log(status)}, [organisation]);

    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/5'>
                <div className='w-full flex flex-col items-start gap-y-5 mt-12'>
                    <img
                        src={organisation.profilePic || '/community.png'}
                        className='size-36 rounded-full object-contain border border-gray-200'
                    />
                    <div className='w-full flex flex-col items-start'>
                        <h2 className='text-2xl font-bold'>{ organisation.fullName }</h2>
                        <p className='text-[#4A709C]'>Non-profit Organization</p>
                        <p className='text-[#4A709C]'>Founded in 2005 · { status.followers } followers</p>
                    </div>
                    <div className='w-1/3'>
                    <button
                        onClick={handleFollow}
                        className={`w-full font-semibold rounded-md py-2 cursor-pointer transition-colors duration-300
                            ${
                                status.isFollowed
                                ? "bg-gray-100 text-gray-700 border border-gray-400 hover:bg-gray-200"
                                : "bg-[#0D78F2] text-white hover:bg-blue-700"
                            }
                        `}
                    >
                        {status.isFollowed ? "Following" : "Follow"}
                    </button>

                    </div>
                </div>

                <div className='mt-15'>
                    <div>
                        {/* Tabs */}
                        <div className='mt-10'>
                            <div className='flex space-x-6 border-b border-gray-300 text-sm font-medium'>
                                <button
                                    className={`pb-2 ${
                                        activeTab === 'about' ? 'border-b-2 border-black' : 'text-gray-500'
                                    }`}
                                    onClick={() => setActiveTab('about')}
                                >
                                    About
                                </button>
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
                                <button
                                    className={`pb-2 ${
                                        activeTab === 'impact' ? 'border-b-2 border-black' : 'text-gray-500'
                                    }`}
                                    onClick={() => setActiveTab('impact')}
                                >
                                    Impact
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='h-[1px] bg-gray-300'></div>
                    <div className='flex flex-col gap-y-12 mt-12'>
                        <div>
                            <h1 className='text-xl font-bold'>About</h1>
                            <p>
                                Helping Hands Foundation is dedicated to providing support and resources to underserved communities. Our mission is to empower individuals and families through education, healthcare, and sustainable development programs.
                            </p>
                        </div>

                        <div>
                            <h1 className='text-xl font-bold'>Contact Information</h1>
                            <div className='h-[1px] bg-gray-300 mt-8'></div>
                            <div className='flex gap-8 py-4'>
                                <div>
                                    <span className='text-sm text-[#4A709C]'>Website</span>
                                    <p className='text-sm'>
                                        <NavLink to={organisation.website}>
                                            { organisation.website }
                                        </NavLink>
                                    </p>
                                </div>
                                <div>
                                    <span className='text-sm text-[#4A709C]'>Email</span>
                                    <p className='text-sm'>{ organisation.email }</p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h1 className='text-xl font-bold'>Ways to Support</h1>
                            <div className='flex gap-x-3 mt-4'>
                                <button className='bg-[#0D78F2] px-3 py-2 rounded-md cursor-pointer text-white font-semibold'>
                                    Donate
                                </button>
                                <button className='bg-[#E8EDF5] px-3 py-2 rounded-md cursor-pointer text-black font-semibold'>
                                    Volunteer
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <h1 className='text-xl font-bold'>Impact Reports</h1>
                            <div className='flex flex-col gap-y-5 my-5'>
                            {
                                reports.map((report, index) => (
                                    <Report
                                    key={index}
                                    report={report.report}
                                    title={report.title}
                                    desc={report.desc}
                                    image={report.image}
                                    />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityPage;