"use client";

import React, { useEffect, useState } from "react";

const AdminReports = () => {
  const [reports, setReports] = useState([]);

  // Retrieve data from localStorage
  useEffect(() => {
    const fetchReports = () => {
      const storedReports = localStorage.getItem("reportData");
      if (storedReports) {
        // Parse the JSON data
        const reportData = JSON.parse(storedReports);
        setReports([reportData]); // Storing it as an array for mapping purposes
      }
    };

    fetchReports();
  }, []);

  if (reports.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-500">No reports available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Admin Reports
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-4">User: {report.user}</h2>
            <h3 className="text-md sm:text-lg font-semibold mb-2">Reasons:</h3>
            <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
              {report.reasons.map((reason, idx) => (
                <li key={idx}>{reason}</li>
              ))}
            </ul>
            <h3 className="text-md sm:text-lg font-semibold mb-2">
              Additional Notes:
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {report.additionalNotes || "No additional notes provided."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
