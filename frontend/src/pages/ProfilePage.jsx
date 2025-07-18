import React from 'react'
import { NavLink } from 'react-router'
import { data } from '../lib/data';
import Card from '../components/Card';

function ProfilePage() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/5'>
                <div className='w-full flex flex-col items-center gap-y-5 mt-12'>
                    <img
                        src='/profile.png'
                    />
                    <div className='w-full flex flex-col items-center'>
                        <h2 className='text-xl font-bold'>Sara Nambiar</h2>
                        <p className='text-[#4A709C]'>Activist | Environmentalist | Volunteer</p>
                        <p className='text-[#4A709C]'>Joined in 2025</p>
                    </div>
                    <div className='w-1/3'>
                        <button className='w-full font-semibold bg-[#E8EDF5] rounded-md py-2'>
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className='mt-15'>
                    <div>
                        
                    </div>
                    <div className='h-[1px] bg-gray-300'></div>
                    <div>
                        {
                            data.map((post, index) => (
                                <Card key={index} day={post.day} title={post.title} desc={post.desc} image={post.image} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;