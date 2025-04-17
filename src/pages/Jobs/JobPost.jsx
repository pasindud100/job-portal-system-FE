import React, { useState, useEffect } from "react";
import axios from "axios";

function JobPost() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/jobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div>
      <div className="py-10">
        <div data-aos="zoom-in" className="container">
          <div className="text-center mb-20 max-w-[500px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary">
              Latest Jobs
            </p>
            <h1 className="text-3xl font-bold">Find Your Dream Job</h1>
            <p className="text-sm text-gray-400">
              Explore top job opportunities and take your career to the next
              level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white shadow-xl duration-300 group p-5 w-[320px] h-[320px] flex flex-col justify-between"
              >
                <div>
                  <h1 className="text-xl font-bold">{job.title}</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {job.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {job.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {job.description.slice(0, 200)}...
                  </p>
                </div>
                <button
                  className="bg-primary text-white py-2 px-4 rounded-lg mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Details Popup */}
      {selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {selectedJob.company} - {selectedJob.location}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {selectedJob.description}
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPost;
