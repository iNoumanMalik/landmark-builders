import logo from "../../public/logo.png";
export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16 pt-16">
      <div className="container-padded py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            {/* <div className="h-9 w-9 rounded-lg bg-warmGray text-white grid place-items-center font-bold">
              ZC
            </div> */}
            <img src={logo} className="w-10"/>
            <h3 className="text-lg font-bold">Real Estate & Construction</h3>
          </div>

          <p className="text-sm text-white/80 mt-2">
            Building trust, designing dreams, delivering quality.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm text-white/80 mt-2">Islamabad / Rawalpindi</p>
          <p className="text-sm text-white/80">Phone: +92 334 5012077</p>
          <p className="text-sm text-white/80">Email: info@zamungclient.com</p>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-accent">
              Facebook
            </a>
            <a href="#" className="hover:text-accent">
              Instagram
            </a>
            <a href="#" className="hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-padded py-4 text-sm text-white/70">
          © {new Date().getFullYear()} ZamungClient. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
