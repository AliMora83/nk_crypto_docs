"use client"
import React from 'react'
import { useState } from 'react';
import Business from './comps/business';
import Group from './comps/group';
import Individual from './comps/individual';

type Props = {}

export default function Tabs({ }: Props) {
    const [activeTab, setActiveTab] = useState('tabs-indiVertical');
    return (
        <div className='my-5 bg-gray-100 py-10'>
            <div className="flex items-center">
                <ul className="nav nav-tabs flex flex-col flex-wrap list-none border-b-0 pl-0 mr-4" id="tabs-tabVertical"
                    role="tablist">
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-indiVertical" className="
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
        " id="tabs-indi-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-indiVertical" role="tab"
                            aria-controls="tabs-indiVertical" aria-selected="true"
                            onClick={(event) => {
                                event.preventDefault();
                                setActiveTab('tabs-indiVertical');
                              }}
                        >Individual</a>
                    </li>
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-bizVertical" className="
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
        " id="tabs-profile-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-bizVertical" role="tab"
                            aria-controls="tabs-bizVertical" aria-selected="false"
                            onClick={(event) => {
                                event.preventDefault();
                                setActiveTab('tabs-bizVertical');
                              }}
                        >Business</a>
                    </li>
                    <li className="nav-item flex-grow text-center" role="presentation">
                        <a href="#tabs-groupVertical" className="
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
        " id="tabs-messages-tabVertical" data-bs-toggle="pill" data-bs-target="#tabs-groupVertical" role="tab"
                            aria-controls="tabs-groupVertical" aria-selected="true"
                            onClick={(event) => {
                                event.preventDefault();
                                setActiveTab('tabs-groupVertical');
                              }}
                        >Groups</a>
                    </li>
                </ul>
                <div className="tab-content" id="tabs-tabContentVertical">
                    <div className="tab-pane fade show active" id="tabs-indiVertical" role="tabpanel"
                        aria-labelledby="tabs-indi-tabVertical"
                        style={{ display: activeTab === 'tabs-indiVertical' ? 'block' : 'none' }}>
                        <h4>Individual content vertical</h4>
                        <Individual />
                    </div>
                    <div className="tab-pane fade" id="tabs-bizVertical" role="tabpanel" aria-labelledby="tabs-biz-tabVertical"
                        style={{ display: activeTab === 'tabs-bizVertical' ? 'block' : 'none' }}>
                        <h4>Business content vertical</h4>
                        <Business />
                    </div>
                    <div className="tab-pane fade" id="tabs-groupVertical" role="tabpanel"
                        aria-labelledby="tabs-group-tabVertical"
                        style={{ display: activeTab === 'tabs-groupVertical' ? 'block' : 'none' }}>
                        <h4>Group content vertical</h4>
                        <Group />
                    </div>
                </div>
            </div>

        </div>

    )
}