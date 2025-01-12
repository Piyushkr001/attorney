/* eslint-disable @next/next/no-img-element */
'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"; // Shadcn Card Component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Link from 'next/link'; // Import the Link component
import { Button } from "../ui/button";

export default function ComplimentaryServices() {
  const services = [
    {
      icon: "/images/analysis.png",
      title: "Today's Legal Insights",
      description:
        "Start your day with clarity and confidence! Explore legal trends, expert predictions, and advice to help you navigate your matters effectively. Stay informed and ahead with daily insights tailored for lawyers and legal professionals.",
      link: "/legal-insights", // Add the respective link here
    },
    {
      icon: "/images/legal.png",
      title: "Free Legal Chart",
      description:
        "Gain clarity on your legal journey! Our Free Legal Chart provides customized insights, in-depth case analysis, and strategic forecasts to guide your decisions. Plan and prepare confidently with expert guidance designed to help you achieve success in law.",
      link: "/legal-chart", // Add the respective link here
    },
    {
      icon: "/images/solution.png",
      title: "Compatibility",
      description:
        "Discover the perfect alignment for your legal needs! Our Compatibility tool analyzes your case or requirements to match you with the ideal lawyer or legal expertise. Ensure seamless collaboration and successful outcomes.",
      link: "/compatibility", // Add the respective link here
    },
    {
      icon: "/images/lawyer-day.gif",
      title: "Lawyers' Events",
      description:
        "Lawyers' events offer networking, skills, and trend insights. Attend workshops, conferences, and seminars to stay updated, gain certifications, and build connections. These gatherings enhance expertise and drive growth in the legal community.",
      link: "/lawyers-events", // Add the respective link here
    },
    {
      icon: "/images/compatibility.png",
      title: "Legal Compatibility Check",
      description:
        "A legal compatibility check ensures compliance with laws and regulations. It identifies potential risks, prevents disputes, and aligns actions with legal standards. This process helps safeguard businesses and projects.",
      link: "/legal-compatibility", // Add the respective link here
    },
    {
      icon: "/images/Chinese.png",
      title: "Chinese Legal Insights",
      description:
        "Chinese Legal Insights offer analysis of China’s legal system, including regulations and business laws. They help navigate complexities in trade, intellectual property, and compliance. These insights are vital for successful operations in China.",
      link: "/chinese-legal-insights", // Add the respective link here
    },
    {
      icon: "/images/almanac.png",
      title: "Today's Legal Almanac",
      description:
        "Today's Legal Almanac provides a daily overview of significant legal updates, court rulings, and regulatory changes. It offers insights into evolving legal trends and their implications. A valuable resource for staying informed on current legal developments.",
      link: "/legal-almanac", // Add the respective link here
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Our Legal Services</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card className="max-w-sm p-4 shadow-md hover:shadow-lg transition-shadow mx-auto">
                <CardHeader className="flex flex-col items-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 mb-4"
                    loading="lazy" // Add lazy loading for better performance
                  />
                  <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center mt-4">
                  {/* More Button */}
                  <Link
                    href={service.link}
                    
                  >
                    <Button variant="outline">More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
