import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Mapa */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
          <iframe
            title="Mapa Darmax"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.537503078147!2d-99.0543406!3d19.4687422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb77a5cc739b%3A0x67aef19c3c1e2d65!2sPurificadora%20De%20Agua%20Darmax%20Agua!5e0!3m2!1ses!2smx!4v1720137621960!5m2!1ses!2smx"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <p className="mb-2">Purificadora de Agua Darmax</p>
          <p className="mb-2">
            Blvd. de los Continentes 85, Bosques de Aragón,<br />
            57170 Cdad. Nezahualcóyotl, Méx.
          </p>
          <p className="mb-2">Tel: +52 55 1234 5678</p>
          <p className="mb-2">Email: contacto@darmax.com</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-sky-400 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.tiktok.com/@tunombredeusuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-pink-400 transition-colors"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Darmax. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
