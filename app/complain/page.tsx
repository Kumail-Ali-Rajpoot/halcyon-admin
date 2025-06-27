export const revalidate = 5;
export const dynamic = "force-dynamic";

import React from "react";
import ComplainCard from "@/components/ComplainCard";
import { prisma } from "@/lib/prisma"

export default async function Page() {
  const complainDB = await prisma.complain.findMany();
  return (
    <div className="p-6 md:p-12 lg:p-16 flex flex-col items-center bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Complains
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
            This section allows you to view and manage contact inquiries submitted by users. You can see the topic of the message, the sender's email, and their detailed message. Use this page to review user feedback, questions, or support requests in an organized way.        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full flex flex-col-reverse flex-wrap">
      {
        complainDB.map((data) => (
          <div key={data.id}>
            <ComplainCard complainDB={data} />
          </div>
        ))
      }
      </div>
    </div>
  );
}
