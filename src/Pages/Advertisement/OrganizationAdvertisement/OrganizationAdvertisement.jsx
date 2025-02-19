import React, { useState, useEffect } from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { callApi, HOSTNAME } from '../../../utils/CallApi';

const OrganizationAdvertisement = () => {
    const [allbrands, setallbrands] = useState([])
    useEffect(() => {

        (async () => {
            try {
                const payload = {

                    "sortproperty": "created_at",
                    "sortorder": -1,
                    "offset": 0,
                    "limit": 50,
                    "query": {
                        "critarion": { "active": true }
                    }

                }
                // const response = await callApi("/feedbacks/getFeedbacksWithFullDetails", "post", payload)
                // console.log("res", response)
                // setallbrands(response.data.feedbacks)
            } catch (error) {
                console.log(error);
            }
        })();


    }, [])
    return (
        <div className='bscontainer-fluid'>
            <div className='py-5 row'>
                <div className='mb-5 col-12'>
                    <div className='mb-3'>
                        <ul className="inline-flex flex-wrap text-sm font-medium">
                            <li className="flex items-center">
                                <Link to="/dashboard" className="text-slate-500 hover:text-indigo-500" >dashboard </Link>
                                <svg className="w-4 h-4 mx-3 fill-current text-slate-400" viewBox="0 0 16 16">
                                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                </svg>
                            </li>
                            <li className="flex items-center">
                                <Link to="/brand-advertisement" className="text-slate-500 hover:text-indigo-500" href="#0">organization</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="create-brand-advertisement" className="p-2 flex w-[20%] items-center rounded-sm bg-red-500 hover:bg-green-600 text-white" >
                        <svg className="w-4 h-4 opacity-50 fill-current shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Create Organization</span>
                    </Link>
                </div>
                <div className='border col-12'>
                    <div className="relative bg-white border rounded-sm shadow-lg border-slate-200">
                        <header className="px-5 py-4">
                            <h2 className="font-semibold text-slate-800">All Organization <span className="font-medium text-slate-400">{allbrands.length}</span></h2>
                        </header>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead className="text-xs font-semibold uppercase border-t border-b text-slate-500 bg-slate-50 border-slate-200">
                                        <tr>

                                            <th className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                <div className="font-semibold text-left">ID</div>
                                            </th>
                                            <th className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                <div className="font-semibold text-left">Brand NAME</div>
                                            </th>
                                            <th className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                <div className="font-semibold text-left">IMAGE</div>
                                            </th>
                                            <th className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                <div className="font-semibold text-left">Actions</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-slate-200">
                                        {allbrands.map((feed) => {
                                            return (
                                                <tr key={feed._id}>
                                                    <td className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                        <div className="text-left">{feed._id}</div>
                                                    </td>
                                                    <td className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                        <div className="text-left">{feed.userName}</div>
                                                    </td>

                                                    <td className="px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">

                                                        <img src={`${HOSTNAME}/${feed?.imageUrl} `} className="w-[80px] h-[50px]" alt="image_logo" />
                                                    </td>
                                                    <td className="w-px px-2 py-3 first:pl-5 last:pr-5 whitespace-nowrap">
                                                        <div className="space-x-1">
                                                            <button className="rounded-full text-slate-400 hover:text-slate-500" onClick={{}}>
                                                                <span className="sr-only">Edit</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
                                                                </svg>
                                                            </button>
                                                            <button className="rounded-full text-slate-400 hover:text-slate-500" onClick={{}}>
                                                                <IoEyeOutline className='text-red-500 hover:text-green-600' size={23} />

                                                                {/* <img src={viewSvg} className="w-6 h-7" alt='delete' /> */}
                                                                {/* <span className="sr-only">Show</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
                                                                </svg> */}
                                                            </button>
                                                            <button className="rounded-full text-rose-500 hover:text-rose-600" onClick={{}}>
                                                                <span className="sr-only">Delete</span>
                                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                                                    <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
                                                                    <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationAdvertisement