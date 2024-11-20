'use client';
import image from '@/source/image';
import Link  from 'next/link'; // Ensure you're importing Link from next/link
import { ArrowRight, LayoutDashboard, BarChartHorizontalBigIcon, ActivitySquareIcon, Settings, LogOut, Tally3, Menu, CogIcon, User, ShieldCheckIcon, ChartBarIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            <div
                className={`bg-bgproduksekunder border-r-2 border-secondary rounded-3xl text-white fixed h-screen transition-all duration-300 z-10 ${
                    isOpen ? "w-64" : "w-0 overflow-hidden"
                }`}
            >
                <div className="flex flex-col gap-4 justify-center mt-20 items-center">
                    <Image src={image.gambar3} alt={""} width={120} />
                    {/* New Menu Items */}
                     {/* Admin Sidebar */}
                    <div className='mx-auto ml-4 mt-10'>
                        <Link href="/AdminDashboard">
                            <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <LayoutDashboard className="text-success hover:text-white" />
                                <span className="font-bold hover:text-white text-success text-[18px]">
                                    Admin Dashboard
                                </span>
                            </div>
                        </Link>

                        <Link href="/User Management">
                            <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <User  className="text-success hover:text-white" />
                                <span className="font-bold hover:text-white text-success text-[18px]">
                                    User Management
                                </span>
                            </div>
                        </Link>

                        <Link href="/ContentModeration">
                            <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <ShieldCheckIcon className="text-success hover:text-white" />
                                <span className="font-bold hover:text-white text-success text-[18px]">
                                    Content Mode
                                </span>
                            </div>
                        </Link>

                        <Link href="/Reports">
                            <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <ChartBarIcon className="text-success hover:text-white" />
                                <span className="font-bold hover:text-white text-success text-[18px]">
                                    Reports
                                </span>
                            </div>
                        </Link>

                        <Link href="/Settings">
                            <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <CogIcon className="text-success hover:text-white" />
                                <span className="font-bold hover:text-white text-success text-[18px]">
                                    Settings
                                </span>
                            </div>
                        </Link>

                        <Link href="/Logout">
                            <div className="flex items-center gap-4 mt-20 py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                                <LogOut className="text-primary hover:text-white" />
                                <span className="font-bold text-primary hover:text-white text-[18px] active:text-white">
                                    Logout
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`flex-1 p-4 ${isOpen ? "ml-64" : "ml-0"}`}>
                <div className="ml-auto">
                    <button
                        className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl border-2 border-b-[7px] border-secondary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <Tally3 /> : <Menu />}
                    </button>
                </div>
            </div>
        </div>
    );
}