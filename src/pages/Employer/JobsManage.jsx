import React, { useState, useEffect } from "react";
import axios from "axios";

function JobsManage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["IT", "Marketing", "Finance", "HR", "Engineering"];
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

  const handleEdit = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/jobs/${id}`);
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:8080/api/jobs/${selectedJob.id}`,
        selectedJob
      );
      setIsModalOpen(false);
      fetchJobs();
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Jobs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Company</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="text-center">
                <td className="border px-4 py-2">{job.id}</td>
                <td className="border px-4 py-2">{job.title}</td>
                <td className="border px-4 py-2 relative">
                  <span className="cursor-pointer" title={job.description}>
                    {job.description.split(" ").slice(0, 2).join(" ")}...
                  </span>
                </td>
                <td className="border px-4 py-2">{job.category}</td>
                <td className="border px-4 py-2">{job.company}</td>
                <td className="border px-4 py-2">{job.location}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEdit(job)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(job.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Edit Job</h3>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={selectedJob.title}
              onChange={(e) =>
                setSelectedJob({ ...selectedJob, title: e.target.value })
              }
              placeholder="Job Title"
            />
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={selectedJob.description}
              onChange={(e) =>
                setSelectedJob({ ...selectedJob, description: e.target.value })
              }
              placeholder="Description"
            />
            <select
              className="border p-2 w-full mb-2"
              value={selectedJob.category}
              onChange={(e) =>
                setSelectedJob({ ...selectedJob, category: e.target.value })
              }
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={selectedJob.company}
              onChange={(e) =>
                setSelectedJob({ ...selectedJob, company: e.target.value })
              }
              placeholder="Company"
            />
            <input
              type="text"
              className="border p-2 w-full mb-2"
              value={selectedJob.location}
              onChange={(e) =>
                setSelectedJob({ ...selectedJob, location: e.target.value })
              }
              placeholder="Location"
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsManage;
