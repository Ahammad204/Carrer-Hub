import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobFilter = filter => {

        if(filter === 'all'){

            setDisplayJobs(appliedJobs)

        }
        else if (filter === 'remote'){

            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote') ;
            setDisplayJobs(remoteJobs)

        }
        else if (filter === 'Onsite'){

            const OnsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(OnsiteJobs);

        }

    }

    useEffect(() => {

        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {

            // const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const JobsApplied = []
            for (const id of storedJobIds) {

                const job = jobs.find(job => job.id === id)
                if (job) {

                    JobsApplied.push(job)

                }


            }

            setAppliedJobs(JobsApplied)
            setDisplayJobs(JobsApplied)
        }

    }, [jobs])

    return (
        <div>
            <h2 className="text-2xl ">Jobs I applied in {appliedJobs.length}</h2>

            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobFilter('all')}><a>All</a></li>
                    <li onClick={()=> handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobFilter('Onsite')}><a>Onsite</a></li>
                </ul>
            </details>

            <ul>
                {

                   displayJobs.map(job => <li key={job.id}>

                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite} </span>

                    </li>)

                }
            </ul>

        </div>
    );
};

export default AppliedJobs;