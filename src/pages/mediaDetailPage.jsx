// MediaDetailPage.jsx
import React from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MediaDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();

    const post = location.state?.post;

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#2E324D] mb-4">Article not found</h2>
                    <button
                        onClick={() => navigate("/media")}
                        className="bg-[#A8D235] hover:bg-[#8fb92d] text-[#2E324D] font-semibold px-6 py-2 rounded-lg"
                    >
                        Back to Articles
                    </button>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const calculateReadTime = (content) => {
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / wordsPerMinute);
        return readTime;
    };

    const dummyImages = [
        "https://images.unsplash.com/photo-1580281657527-47b7b0c1381d",
        "https://images.unsplash.com/photo-1580281780460-82f3a9d2e8a6",
        "https://images.unsplash.com/photo-1580281658471-e1e26f2e2cfd",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#2E324D] text-white py-6 px-4">
                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => navigate("/media")}
                        className="flex items-center gap-2 text-[#A8D235] hover:text-[#8fb92d] transition-colors mb-4"
                    >
                        <ArrowLeft size={20} />
                        Back to Articles
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-[#A8D235]" />
                            <span>{formatDate(post.createdAt)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-[#A8D235]" />
                            <span>{calculateReadTime(post.content)} min read</span>
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop
                            className="w-full h-72 md:h-96"
                        >
                            {[post.imageUrl, ...dummyImages].map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Article */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                        <div className="prose prose-lg max-w-none leading-relaxed text-gray-700">

                            <p className="mb-6 text-lg">
                                {post.content}
                            </p>

                            {/* Expanded content */}
                            <p className="mb-6 text-lg">
                                At Al-Ihsan Health Services, we believe that access to quality 
                                healthcare should not be a privilege reserved for a few but a 
                                fundamental right for everyone. Our mission is centered around 
                                creating a community where families, businesses, and individuals 
                                can access affordable medical solutions without compromising 
                                quality or comfort.
                            </p>

                            <p className="mb-6 text-lg">
                                We have continued to expand our services, forming strong 
                                partnerships with trusted hospitals and clinics nationwide. Our 
                                health plans are carefully crafted to meet the unique needs of 
                                Nigerians—whether you're a student, parent, business owner, or 
                                organization seeking comprehensive health coverage for your staff.
                            </p>

                            {/* Highlights */}
                            <div className="mt-8 p-6 bg-[#A8D235] bg-opacity-10 rounded-lg border-l-4 border-[#A8D235]">
                                <h3 className="text-xl font-bold text-[#2E324D] mb-3">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Comprehensive healthcare solutions for families and businesses</li>
                                    <li>• Nationwide hospital access</li>
                                    <li>• 24/7 emergency support</li>
                                    <li>• Flexible and affordable health plans</li>
                                </ul>
                            </div>

                            {/* Call to Action */}
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl font-bold text-[#2E324D] mb-4">
                                    Interested in Learning More?
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Reach out today and discover how Al-Ihsan Health Services can 
                                    support your health and wellbeing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/contact"
                                        className="bg-[#A8D235] hover:bg-[#8fb92d] text-[#2E324D] font-semibold px-6 py-3 rounded-lg transition-colors"
                                    >
                                        Get in Touch
                                    </Link>
                                    <button className="bg-[#2E324D] hover:bg-[#3a3f5f] text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                                        View Our Plans
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-[#2E324D] mb-6">
                            Related Articles
                        </h3>
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <p className="text-gray-600 text-center">More articles coming soon...</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MediaDetailPage;
