export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container-padded py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">ZmungClient Real Estate & Construction</h3>
          <p className="text-sm text-white/80 mt-2">Building trust, designing dreams, delivering quality.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-white/80 mt-2">Islamabad / Rawalpindi</p>
          <p className="text-sm text-white/80">Phone: +92-300-0000000</p>
          <p className="text-sm text-white/80">Email: info@zmungclient.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-accent">Facebook</a>
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-padded py-4 text-sm text-white/70">© {new Date().getFullYear()} ZmungClient. All rights reserved.</div>
      </div>
    </footer>
  )
}