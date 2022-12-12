"use client"
import React from 'react'
import { useState } from 'react';

type Props = {}

export default function Slider_01({ }: Props) {
    const [activeTab, setActiveTab] = useState('tabs-homeVertical');
    return (
        <div className='my-5 w-4/5'>
            <div className="flex items-start">
                <ul className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" id="tabs-tabVertical"
                    role="tablist">
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-homeVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
          active
        " id="tabs-home-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-homeVertical" role="tab"
                            aria-controls="tabs-homeVertical" aria-selected="true"
                            onClick={() => setActiveTab('tabs-homeVertical')}
                            >Home</a>
                    </li>
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-profileVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-profileVertical" role="tab"
                            aria-controls="tabs-profileVertical" aria-selected="false"
                            onClick={() => setActiveTab('tabs-profileVertical')}
                            >Profile</a>
                    </li>
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-messagesVertical" className="
          nav-link
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-transparent hover:bg-gray-100
          focus:border-transparent
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-messagesVertical" role="tab"
                            aria-controls="tabs-messagesVertical" aria-selected="true"
                            onClick={() => setActiveTab('tabs-messagesVertical')}
                            >Messages</a>
                    </li>
                </ul>
                <div className="tab-content" id="tabs-tabContentVertical">
                    <div className="tab-pane fade show active" id="tabs-homeVertical" role="tabpanel"
                        aria-labelledby="tabs-home-tabVertical" 
                        style={{ display: activeTab === 'tabs-homeVertical' ? 'block' : 'none' }}>
                        Individual content vertical
                    </div>
                    <div className="tab-pane fade" id="tabs-profileVertical" role="tabpanel" aria-labelledby="tabs-profile-tabVertical"
                    style={{ display: activeTab === 'tabs-profileVertical' ? 'block' : 'none' }}>
                        Business content vertical
                    </div>
                    <div className="tab-pane fade" id="tabs-messagesVertical" role="tabpanel"
                        aria-labelledby="tabs-profile-tabVertical"
                        style={{ display: activeTab === 'tabs-messagesVertical' ? 'block' : 'none' }}>
                        Group content vertical
                    </div>
                </div>
            </div>

        </div>

    )
}