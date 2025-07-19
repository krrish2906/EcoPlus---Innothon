import React from 'react'
import { NavLink } from 'react-router'
import { reports } from '../lib/data';
import Report from '../components/Report';

function CommunityPage() {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-4/5'>
                <div className='w-full flex flex-col items-start gap-y-5 mt-12'>
                    <img
                        src='/community.png'
                    />
                    <div className='w-full flex flex-col items-start'>
                        <h2 className='text-2xl font-bold'>Helping Hands Foundation</h2>
                        <p className='text-[#4A709C]'>Non-profit Organization</p>
                        <p className='text-[#4A709C]'>Founded in 2005 · 150K followers</p>
                    </div>
                    <div className='w-1/3'>
                        <button className='w-full font-semibold bg-[#E8EDF5] rounded-md py-2'>
                            Follow
                        </button>
                    </div>
                </div>

                <div className='mt-15'>
                    <div>
                        {/* todo- sections */}
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
                                    <p className='text-sm'>http://localhost:5173</p>
                                </div>
                                <div>
                                    <span className='text-sm text-[#4A709C]'>Email</span>
                                    <p className='text-sm'>ecoplus.innothon@gmail.com</p>
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
    );
}

export default CommunityPage;