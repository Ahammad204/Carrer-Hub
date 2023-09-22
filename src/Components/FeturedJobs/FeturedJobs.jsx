import { useEffect, useState } from "react";
import Job from "../job/Job";


const FeturedJobs = () => {

    const [jobs,setJobs] = useState([])

    useEffect(()=>{

        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl">Featured Jobs: {jobs.length}</h1>
                <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {

                    jobs.map(job => <Job key={job.id} job={job}></Job>)

                }
            </div>
        </div>
    );
};

export default FeturedJobs;