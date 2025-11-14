// MediaPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MediaForm from "../components/mediaForm";
import MediaCard from "../components/mediaCard";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/footer";

const MediaPage = () => {
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleNewPost = (newPost) => {
        setPosts((prev) => [newPost, ...prev]);
        setShowModal(false);
    };

    const handleCardClick = (post) => {
        // Navigate to detail page with post data
        navigate(`/media/${post._id}`, { state: { post } });
    };

    useEffect(() => {
        // Dummy data for demo purposes
        const dummyPosts = [
            {
                _id: "1",
                title: "Improving Healthcare Access in Rural Communities",
                content:
                    "Our latest outreach program focuses on providing affordable and accessible healthcare to rural communities through mobile clinics and digital consultations.",
                imageUrl:
                    "https://images.unsplash.com/photo-1583912268184-9f99e7b21c41?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-10-05T10:00:00Z",
            },
            {
                _id: "2",
                title: "Telemedicine: The Future of Nigerian Healthcare",
                content:
                    "We are pioneering telemedicine solutions to connect patients to qualified doctors, no matter where they are. Learn how our digital health services are breaking barriers.",
                imageUrl:
                    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-09-28T14:30:00Z",
            },
            {
                _id: "3",
                title: "Staff Training and Capacity Building 2025",
                content:
                    "Our annual training program equips healthcare professionals with modern medical skills, technology usage, and patient management strategies.",
                imageUrl:
                    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-09-12T09:00:00Z",
            },
            {
                _id: "4",
                title: "Health Insurance Awareness Campaign",
                content:
                    "Al-Ihsan Health Services recently launched an awareness campaign to educate families about the benefits of health insurance and preventive care.",
                imageUrl:
                    "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-08-20T08:00:00Z",
            },
            {
                _id: "5",
                title: "New Partnerships with Local Clinics",
                content:
                    "We're expanding our network by partnering with local healthcare providers to deliver better services and coverage across Nigeria.",
                imageUrl:
                    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-08-10T12:45:00Z",
            },
            {
                _id: "6",
                title: "Digital Health Innovation Hub Launch",
                content:
                    "Our new innovation hub is now open! A collaborative space where healthcare experts, developers, and innovators create life-changing digital health solutions.",
                imageUrl:
                    "https://images.unsplash.com/photo-1614019553730-bb87e7f9a21b?auto=format&fit=crop&w=800&q=60",
                createdAt: "2025-07-25T11:15:00Z",
            },
        ];

        // Simulate fetch
        setTimeout(() => setPosts(dummyPosts), 800);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-[#2E324D]">Latest Articles</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#A8D235] hover:bg-[#8fb92d] text-[#2E324D] font-semibold px-4 py-2 rounded-lg shadow-md transition-colors"
                    >
                        + Create Post
                    </button>
                </div>

                {/* Articles */}
                {posts.length === 0 ? (
                    <p className="text-gray-500 text-center">Loading articles...</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <div 
                                key={post._id}
                                onClick={() => handleCardClick(post)}
                                className="cursor-pointer"
                            >
                                <MediaCard
                                    title={post.title}
                                    content={post.content}
                                    imageUrl={post.imageUrl}
                                    date={new Date(post.createdAt).toLocaleDateString()}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal Section */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal Box */}
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
                                <button
                                    className="absolute top-3 right-4 text-gray-500 hover:text-[#EC3338] text-2xl"
                                    onClick={() => setShowModal(false)}
                                >
                                    &times;
                                </button>

                                <h3 className="text-xl font-semibold text-[#2E324D] mb-4">
                                    Create New Article
                                </h3>

                                <MediaForm onPost={handleNewPost} />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default MediaPage;


