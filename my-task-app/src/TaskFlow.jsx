import { Facebook, Twitter, Instagram } from "lucide-react";
import { FaTasks, FaCheckCircle, FaRocket } from "react-icons/fa";
import { useRef, forwardRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SectionWrapper = forwardRef(({ children, className }, ref) => (
  <div ref={ref} className={`w-full px-4 py-12 md:py-16 lg:py-20 ${className}`}>
    {children}
  </div>
));


export default function App() {

  const pricingRef = useRef(null);

  const scrollToPricing = () => {
  if (pricingRef.current) scrollToElementSmoothly(pricingRef.current);
};


const scrollToElementSmoothly = (element) => {
  const targetY = element.getBoundingClientRect().top + window.scrollY;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1000;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startY, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};


  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-slate-100 via-white to-indigo-100 min-h-screen">
      {/* Header */}
      <SectionWrapper className="bg-blue-700 text-white rounded-b-3xl shadow-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">TaskFlow</h1>
        <p className="text-lg mb-6">Stay on top of your tasks with style and speed.</p>
       <button
  onClick={scrollToPricing}
  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
>
  Get Started
</button>

      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-4" />,
              title: "Smart Tasking",
              desc: "Drag-and-drop ease with intelligent grouping for better focus."
            },
            {
              icon: <FaTasks className="text-green-600 text-5xl mx-auto mb-4" />,
              title: "Daily Reminders",
              desc: "Never forget a deadline with customizable reminders."
            },
            {
              icon: <FaRocket className="text-purple-600 text-5xl mx-auto mb-4" />,
              title: "Boost Productivity",
              desc: "Track and improve your work habits with insights."
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-center text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reviews */}
<SectionWrapper className="bg-white rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Users Say</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Ali",
        review: "TaskFlow changed how I plan my day. I feel more in control!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Sana",
        review: "Beautiful UI and super intuitive. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "John",
        review: "Helped my whole team sync up. A must-have productivity tool.",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg"
      },
    ].map((r, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-md text-center"
      >
        <img
          src={r.avatar}
          alt={r.name}
          className="w-16 h-16 mx-auto mb-4 rounded-full object-cover shadow"
        />
        <p className="italic text-gray-700 mb-4">"{r.review}"</p>
        <p className="font-bold text-gray-800">– {r.name}</p>
      </div>
    ))}
  </div>
</SectionWrapper>

      {/* Pricing */}
      <motion.div
  ref={pricingRef}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.3 }}
>
      <SectionWrapper className="bg-indigo-50 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Free",
              price: "$0",
              desc: "Basic tools to get you started.",
              highlight: false
            },
            {
              title: "Pro",
              price: "$9/mo",
              desc: "More power with advanced features.",
              highlight: true
            },
            {
              title: "Team",
              price: "$29/mo",
              desc: "Everything your team needs to collaborate.",
              highlight: false
            }
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 ring-1 ${
                plan.highlight ? "ring-blue-500" : "ring-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-4xl font-bold text-blue-700 mb-4">{plan.price}</p>
              <p className="mb-6 text-gray-600">{plan.desc}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                Select
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>
      </motion.div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-8 mt-12 rounded-t-3xl shadow-inner">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-blue-400 transition-all"><Facebook /></a>
          <a href="#" className="hover:text-sky-400 transition-all"><Twitter /></a>
          <a href="#" className="hover:text-pink-400 transition-all"><Instagram /></a>
        </div>
        <p className="text-sm">&copy; 2025 TaskFlow. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-sm hover:underline">Contact</a>
          <a href="#" className="text-sm hover:underline">Support</a>
          <a href="#" className="text-sm hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
