import React, { useState } from "react";
import JobFormModal from "./JobFormModal";
import JobsManage from "./JobsManage";

function EmpDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-500 text-white rounded shadow"
      >
        + Add Job
      </button>
      <JobFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <JobsManage/>
    </div>
  );
}

export default EmpDashboard;
