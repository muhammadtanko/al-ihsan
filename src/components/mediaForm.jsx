import React, { useState } from "react";

const MediaForm = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    e.preventDefault();
    if (!title || !content || !image) return alert("All fields required");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    setLoading(true);
    try {
      // Send to backend (adjust endpoint as needed)
      const res = await fetch("https://api.example.com/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      onPost(data);
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 mb-8 w-full md:w-2/3 mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#2E324D]">Post an Article</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A8D235]"
          placeholder="Enter article title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A8D235] h-32"
          placeholder="Write your article here..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#A8D235] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#8fc423] transition"
      >
        {loading ? "Posting..." : "Post Article"}
      </button>
    </form>
  );
};

export default MediaForm;
