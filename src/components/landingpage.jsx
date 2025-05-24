import React from "react";
import { motion } from "framer-motion";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const HeroSection = () => {
    return (
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col items-center justify-center text-white px-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600047502515-df7b2e0eaf9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl font-bold mb-6 text-center"
        >
          Automated Room Booking System
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg mb-8 max-w-2xl text-center"
        >
          Seamlessly book, manage, and cancel room reservations across campus. Made for students and staff.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button className="text-lg px-6 py-3 rounded-xl shadow-lg bg-white text-indigo-600 hover:bg-indigo-100">
            Get Started
          </Button>
        </motion.div>
      </motion.section>
    );
};
  
const Navbar = () => {
    return (
        <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-8 justify-between items-center z-50"
        >
          <div className="flex items-center gap-2">
              <img
              src="https://img.icons8.com/color/48/university.png"
              alt="CampusRooms Logo"
              className="w-8 h-8"
              />
              <span className="text-2xl font-extrabold text-indigo-700">CampusRooms</span>
          </div>
          <div className="space-x-6 text-gray-700 font-medium text-lg">
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
              Home
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
              Features
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
              About
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
              Contact
              </a>
        </div>
        </motion.nav>
    );
};

const features = [
    { title: "Real-time Availability", description: "Check live room availability across campus instantly.", icon: "📱" },
    { title: "Easy Booking", description: "Book a room with just a few clicks. No paperwork needed!", icon: "📝" },
    { title: "Automated Notifications", description: "Get notified before your booking starts or expires.", icon: "🔔" },
    { title: "Integration with Campus", description: "Sync with your school’s calendar and system seamlessly.", icon: "🏫" },
    { title: "Secure Login", description: "Protect your bookings with secure authentication.", icon: "🔐" },
    { title: "Mobile-Friendly", description: "Use the system on-the-go from any device.", icon: "📱" },
    { title: "Booking History", description: "Easily view past and upcoming reservations.", icon: "📘" },
    { title: "User Role Management", description: "Admin features for staff, standard access for students.", icon: "🧑‍💼" },
  ];
  
  const rooms = Array.from({ length: 40 }, (_, i) => ({
    name: `Room ${i + 1}`,
    capacity: Math.floor(Math.random() * 40 + 4),
    image: `https://source.unsplash.com/random/800x600?room,${i}`,
    available: i % 3 !== 0
  }));
  
  const FeatureCard = ({ feature }) => (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="bg-white rounded-2xl shadow-md p-6 text-center">
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-indigo-700">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
  
  const RoomCard = ({ room }) => (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-xs">
      <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-bold text-indigo-700 mb-1">{room.name}</h4>
        <p className="text-sm text-gray-600 mb-2">Capacity: {room.capacity}</p>
        <span className={`inline-block mb-4 px-3 py-1 text-xs rounded-full font-semibold ${room.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>{room.available ? "Available" : "Unavailable"}</span>
        <Button disabled={!room.available} className="w-full">{room.available ? "Book Now" : "Unavailable"}</Button>
      </div>
    </motion.div>
  );

const MainSection = () => {
    return (
        <div className="py-16 px-6 md:px-20 bg-gray-50">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-20">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">What is the Automated Room Booking System?</h1>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto">
            This platform simplifies the process of finding and reserving study, meeting, or lecture spaces for students and staff across the campus. With a sleek, responsive interface and real-time updates, it provides transparency, flexibility, and efficiency in managing shared spaces.
          </p>
        </motion.div>
  
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="mb-24 grid md:grid-cols-2 gap-10">
          <img src="https://images.pexels.com/photos/374756/pexels-photo-374756.jpeg" alt="Dashboard Overview" className="rounded-2xl shadow-xl" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Key Properties</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Multi-role authentication and access control.</li>
              <li>Dynamic booking updates and calendar sync.</li>
              <li>Instant cancellation and update options.</li>
              <li>Smart suggestions based on room usage patterns.</li>
              <li>Automated alerts via email or SMS.</li>
            </ul>
          </div>
        </motion.div>
  
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-24 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Why Choose This System?</h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-8">
            Unlike traditional booking tools, this system is built with user experience, automation, and scalability in mind. From its modern UI/UX to advanced features, it is optimized for both students and administrators.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <FeatureCard feature={features[0]} />
            <FeatureCard feature={features[1]} />
            <FeatureCard feature={features[2]} />
            <FeatureCard feature={features[3]} />
          </div>
        </motion.div>
  
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-24">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">How to Use the System</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="list-decimal ml-6 text-gray-700 space-y-3">
                <li>Sign up using your campus credentials or login as an existing user.</li>
                <li>Browse the list of available rooms filtered by date, time, and capacity.</li>
                <li>Select a room and choose your desired timeslot.</li>
                <li>Confirm your booking and receive a confirmation email.</li>
                <li>View, manage, or cancel bookings anytime from your dashboard.</li>
              </ol>
            </div>
            <img src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg" alt="Step-by-step guide" className="rounded-2xl shadow-lg" />
          </div>
        </motion.div>
  
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Explore Our Features
        </motion.h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => <FeatureCard key={i} feature={feature} />)}
        </div>
  
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-3xl font-bold text-center text-indigo-700 mb-12">
          Available Rooms
        </motion.h2>
  
        <div className="flex flex-wrap justify-center gap-8">
          {rooms.map((room, i) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
              <RoomCard key={i} room={room} />
            </div>
          ))}
        </div>
      </div>
    );
}
  

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} CampusRooms. All rights reserved.</p>
    </footer>
  );
};



export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  );
}
