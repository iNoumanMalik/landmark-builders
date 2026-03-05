import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="container-padded py-32" id="contact">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">
        Get in touch for quotes, consultations, or property inquiries.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Office</h3>
          <p className="text-sm text-warmGray mt-2">
            Address: Steet 97 G-11/3, Islamabad
          </p>
          <p className="text-sm text-warmGray">Phone: +92 334 5012077</p>
          <p className="text-sm text-warmGray">Email: info@zamungclient.com</p>
          <div className="mt-4">
            <iframe
              title="Office Location"
              className="w-full h-64 rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13281.301217323735!2d72.98054362651251!3d33.67463997877348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe03d1fe946b%3A0xbb79acd8ef9f1ed9!2sG-11%2F3%20G%2011%2F3%20G-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1772713845754!5m2!1sen!2s"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
