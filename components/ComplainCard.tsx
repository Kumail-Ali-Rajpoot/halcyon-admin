"use client";
import React from "react";

type Complain = {
  name: string;
  email: string;
  problem: string;
  message: string;
};

export default function ComplainCard({complainDB}:Complain) {
  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Complain</h3>
      </div>

      {/* Subject */}
      <div className="mb-3">
        <p className="text-sm text-gray-500 font-semibold">Subject</p>
        <p className="text-base text-gray-800">{complainDB.problem}</p>
      </div>

      {/* Message */}
      <div className="mb-3">
        <p className="text-sm text-gray-500 font-semibold">Message</p>
        <p className="text-base text-gray-700 bg-gray-50 rounded-md p-3 leading-relaxed border border-gray-100">
          {complainDB.message}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500 font-semibold">Name</p>
          <p className="text-base text-gray-800">{complainDB.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Recieve</p>
          <p className="text-base text-gray-900">{new Date(complainDB.createdAt).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Email</p>
          <p className="text-base text-blue-600 underline">{complainDB.email}</p>
        </div>
      </div>
    </div>
  );
}
