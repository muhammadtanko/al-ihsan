import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/services", label: "Services" },
        { path: "/media", label: "Media" },
        { path: "/staff", label: "Staff" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-[#2E324D]/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <motion.div
                    className="flex items-center space-x-2 cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/">
                        {/* <img
                            src="/images/logo.png"
                            alt="Al-Ihsan Logo"
                            className="h-10 w-auto md:h-12 object-contain"
                        /> */}
                        <span className="text-[#A8D235]">Al-Ihsan</span> Health Services
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <motion.div
                    className="hidden md:flex space-x-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`transition-colors ${isActive(link.path)
                                ? "text-[#A8D235]"
                                : "hover:text-[#A8D235]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-[#2E324D] px-4 pb-4 space-y-3"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block transition-colors ${isActive(link.path)
                                ? "text-[#A8D235]"
                                : "hover:text-[#A8D235]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};
