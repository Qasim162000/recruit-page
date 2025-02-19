import React from 'react'
import ActiveJobs from '../components/AppliedJob/ActiveJobs'

import RecommendedJobs from '../components/AppliedJob/RecommendedJobs'

const AppliedJobs = () => {
    const status = [
        { name: "Pending", color: "yellow" },
        { name: "Accepted", color: "green" },
        { name: "Rejected", color: "red" },
        { name: "On the way", color: "gray" },]
    return (
        <div className='bscontainer-fluid h-full py-5 px-5'>
            <ActiveJobs status={status} />
            <RecommendedJobs status={status} />
        </div>
    )
}

export default AppliedJobs