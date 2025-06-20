"use client";
import React from "react";

type Complain = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "Pending" | "Resolved";
};

const dummyComplain: Complain = {
  id: 1,
  name: "Ali Raza",
  email: "ali@example.com",
  subject: "Issue with Game Installation",
  message:
    "I downloaded the game but it’s not running on my Windows 11 PC. Please help me resolve this issue.",
  status: "Pending",
};

export default function ComplainCard() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Complain #{dummyComplain.id}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            dummyComplain.status === "Resolved"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {dummyComplain.status}
        </span>
      </div>

      {/* Subject */}
      <div className="mb-3">
        <p className="text-sm text-gray-500 font-semibold">Subject</p>
        <p className="text-base text-gray-800">{dummyComplain.subject}</p>
      </div>

      {/* Message */}
      <div className="mb-3">
        <p className="text-sm text-gray-500 font-semibold">Message</p>
        <p className="text-base text-gray-700 bg-gray-50 rounded-md p-3 leading-relaxed border border-gray-100">
          {dummyComplain.message}
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-sm text-gray-500 font-semibold">Name</p>
          <p className="text-base text-gray-800">{dummyComplain.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Email</p>
          <p className="text-base text-blue-600 underline">{dummyComplain.email}</p>
        </div>
      </div>
    </div>
  );
}
