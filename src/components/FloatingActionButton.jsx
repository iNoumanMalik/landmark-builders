import React from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923345012077"; 
  const location = useLocation();

  const getPageMessage = () => {
    switch (location.pathname) {
      case "/":
        return "Hi! I’m interested in your services. Can you tell me more?";
      case "/about":
        return "Hello! I was reading about your company. Can you share more details?";
      case "/construction":
        return "Hi! I’m interested in your construction services.";
      case "/realestate":
        return "Hello! I’d like to know more about your real estate projects.";
      case "/contact":
        return "Hi! I’m trying to get in touch with your team.";
      default:
        return "Hello! I’d like to know more about your services.";
    }
  };

  const message = getPageMessage();

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
