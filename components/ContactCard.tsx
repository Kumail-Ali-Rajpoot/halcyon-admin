"use client";
import React from "react";

type Contact = {
  topic: string;
  message: string;
  email: string;
};

const dummyContact: Contact = {
  topic: "Game Support",
  message: "I’m facing an issue installing IGI 2 on Windows 11. It shows a missing file error.",
  email: "user@example.com",
};

export default function ContactCard() {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
        Contact Request
      </h2>

      <div className="space-y-6">
        {/* Topic */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-1">Topic</label>
          <p className="text-lg text-gray-800">{dummyContact.topic}</p>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-1">Message</label>
          <p className="text-base text-gray-700 leading-relaxed bg-white rounded-md p-4 border border-gray-200 shadow-sm">
            {dummyContact.message}
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-500 mb-1">Email</label>
          <p className="text-base text-blue-600 underline">{dummyContact.email}</p>
        </div>
      </div>
    </div>
  );
}
