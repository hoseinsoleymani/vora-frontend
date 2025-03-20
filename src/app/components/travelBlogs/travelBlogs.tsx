"use client";
import React from "react";
import HeaderSection from "./headerSection";
import BlogCard from "./blogCard";
function TravelBlogs() {
  return (
    <div>
      <HeaderSection />
      <div className="flex items-center justify-between gap-4 mt-8">
        <BlogCard backgroundImage="/img/8e87ae7005caed333f6e5a7367657e23-min.jpg" />
        <BlogCard backgroundImage="/img/a5719b147a8fe9cf4a90f9d842083703-min.jpg" />
        <BlogCard backgroundImage="/img/a6c85e2c447b9c94fff460a49bd589f5-min.jpg" />
      </div>
    </div>
  );
}

export default TravelBlogs;
