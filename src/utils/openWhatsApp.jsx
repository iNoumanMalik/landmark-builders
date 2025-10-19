export const openWhatsApp = (type, pageName) => {
  const phoneNumber = "923345012077";
  let message = "";

  switch (type) {
    case "quote":
      message = `Hi! I'd like to get a quote for your services.`;
      break;
    case "contact":
      message = `Hello! I want to get in touch with you.`;
      break;
    case "consultation":
      message = `Hi! I’d like to request a consultation about your ${pageName}  services.`;
      break;
    case "know-more":
      message = `Hello! I’d like to know more about your ${pageName} services.`;
      break;
    default:
      message = `Hello! I'm interested in your ${pageName} services.`;
  }

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
