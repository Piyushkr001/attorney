/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"; // Shadcn Button Component
import { Card, CardHeader, CardTitle } from "@/components/ui/card"; // Shadcn Card Component
import Link from "next/link"; // Next.js Link Component
import { Icon } from "../ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-950 to-zinc-700 text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mt-20 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 p-4 rounded-lg">
              <img
                src="/images/HeroImage.webp" // Replace with your image
                alt="Lawyer interacting with a client"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Section: Text */}
          <div className="lg:w-1/2 text-center space-x-6 lg:text-left space-y-6">
            <p className="text-lg text-center font-medium">
              200+ Clients recommend Attorney-Chat
            </p>
            <h1 className="text-3xl sm:text-4xl text-center font-bold leading-tight">
              Chat with Lawyers Anytime, Anywhere
            </h1>
            <div className="flex justify-center mt-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-gray-500 font-semibold"
              >
                Chat Now
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Link href="/chat-with-lawyers">
            <Card className="text-center hover:cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon provider="phosphor" name= "ChatCircleDots" className="mx-auto w-12 h-12" />
                <CardTitle>Chat with Lawyers</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Card 2 */}
          <Link href="/talk-to-lawyers">
            <Card className="text-center hover:cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
              <Icon provider="phosphor" name= "Phone" className="mx-auto w-12 h-12" />
                <CardTitle>Talk to Lawyers</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Card 3 */}
          <Link href="/legal-resources">
            <Card className="text-center hover:cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
              <Icon provider="phosphor" name= "Books" className="mx-auto w-12 h-12" />
                <CardTitle>E-Law Library</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          {/* Card 4 */}
          <Link href="/book-appointment">
            <Card className="text-center hover:cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
              <Icon provider="phosphor" name= "CalendarCheck" className="mx-auto w-12 h-12" />
                <CardTitle>Book Appointment</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
