/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link"; // Import Next.js Link component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const BlogSection = () => {
  const blogs = [
    {
      title: "4 Zodiac Signs That Will Have a Love Story to Remember in 2025",
      author: "Sunam Siddharth",
      views: 448,
      date: "January 12, 2025",
      image: "/images/love-story.png", // Replace with actual image paths
      link: "/blog/love-story-2025", // Link to the respective content page
    },
    {
      title: "3 Zodiac Signs That Will See a Rise in Wealth in 2025",
      author: "Sunam Siddharth",
      views: 330,
      date: "January 12, 2025",
      image: "/images/wealth.png",
      link: "/blog/rise-in-wealth-2025", // Link to the respective content page
    },
    {
      title: "4 Zodiac Signs Destined for a Passionate Love Life in 2025",
      author: "Jyoti",
      views: 274,
      date: "January 12, 2025",
      image: "/images/passionate-love.png",
      link: "/blog/passionate-love-life-2025", // Link to the respective content page
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        {/* Stats Section */}
        <div className="flex justify-between items-center bg-gradient-to-r from-cyan-400 to-sky-600 text-white py-6 px-4 rounded-lg mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold">8,864+</h3>
            <p>Total Lawyers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">50 Million Minutes</h3>
            <p>Total Chat/Call Minutes</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">130.2 Million</h3>
            <p>Total Customers</p>
          </div>
        </div>

        {/* Blog Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Latest From Blog</h2>
          <p className="text-gray-600">Top Astrologers. 24 * 7 customer support. Happy to help</p>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <Card className="shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.views} views</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-gray-500">
                  <span>{blog.date}</span>
                  {/* Read More Button */}
                  <Link href={blog.link} className="text-gray-700">
                    <Button variant="outline">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection;
