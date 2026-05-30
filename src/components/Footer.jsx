import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaSnapchat } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h1 >Chez Sarah🌸</h1>
      
      <div className="footer-item">
        <FaPhone />
        <span>+961 71 999 000</span>
      </div>

      <div className="footer-item">
        <FaMapMarkerAlt />
        <span>Beirut, Lebanon</span>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>

        <a href="https://snapchat.com" target="_blank" rel="noreferrer"><FaSnapchat /></a>
      </div>
    </footer>
  );
}
export default Footer;