"use client";
import React from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-700">
      <motion.div
        className="mb-4"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
      </motion.div>
      <p className="text-lg font-medium tracking-wide">Loading, please wait...</p>
    </div>
  );
}
