"use client";

import Link from "next/link";
import { Menu, X, UserCog,ShoppingCartIcon,Settings, Phone, FileWarning,ShoppingBasketIcon } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Admin", icon: <UserCog size={20} />, href: "/" },
    { name: "Manage", icon: <Settings size={20} />, href: "/management" },
    { name: "Products", icon: <ShoppingBasketIcon size={20} />, href: "/products" },
    { name: "Contact", icon: <Phone size={20} />, href: "/contact" },
    { name: "Complain", icon: <FileWarning size={20} />, href: "/complain" },
    { name: "Orders", icon: <ShoppingCartIcon size={20} />, href: "/orders" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 focus:outline-none z-50 absolute top-0 left-[100%]"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 h-full fixed z-40 top-0 left-0 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close on mobile click
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
