import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <section className="container-padded py-32" id="contact">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">Get in touch for quotes, consultations, or property inquiries.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="card p-6">
          <h3 className="font-semibold text-primary">Office</h3>
          <p className="text-sm text-warmGray mt-2">Islamabad / Rawalpindi</p>
          <p className="text-sm text-warmGray">Phone: +92-300-0000000</p>
          <p className="text-sm text-warmGray">Email: info@zmungclient.com</p>
          <div className="mt-4">
            <iframe
              title="Office Location"
              className="w-full h-64 rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13273.764669058597!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc0a7136f13f9%3A0x9b34971a3a9d2b9b!2sIslamabad!5e0!3m2!1sen!2sPK!4v0000000000000"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}