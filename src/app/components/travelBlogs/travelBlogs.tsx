"use client";
import React from "react";
import HeaderSection from "./headerSection";
import BlogCard from "./blogCard";

const blogData = [
  {
    backgroundImage: "/img/8e87ae7005caed333f6e5a7367657e23-min.jpg",
    category: "International flight",
    title: "Exploring the Hidden Gems of Southeast Asia",
    authorName: "Sarah Johnson",
    date: "15/03/2024",
    avatar: "/img/Blog Avatar 1.png",
  },
  {
    backgroundImage: "/img/a5719b147a8fe9cf4a90f9d842083703-min.jpg",
    category: "Travel Tips",
    title: "Essential Packing Guide for Long-Haul Flights",
    authorName: "Mike Chen",
    date: "12/03/2024",
    avatar:"/img/Blog Avatar 1.png",
  },
  {
    backgroundImage: "/img/a6c85e2c447b9c94fff460a49bd589f5-min.jpg",
    category: "Adventure",
    title: "Thrilling Adventures in the Swiss Alps",
    authorName: "Emma Wilson",
    date: "10/03/2024",
    avatar: "/img/Blog Avatar 1.png",
  },
];

function TravelBlogs() {
  return (
    <div className="container mx-auto px-4">
      <HeaderSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            backgroundImage={blog.backgroundImage}
            category={blog.category}
            title={blog.title}
            authorName={blog.authorName}
            date={blog.date}
            avatar={blog.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default TravelBlogs;
