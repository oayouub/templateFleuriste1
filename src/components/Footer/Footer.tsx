// Footer.jsx
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>My</span>Website</h1>
          <p>
            LoremIpsum, les fleurs avec passions.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Liens Rapides</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; LoremIpsum.com | Designer par MyWebsite
      </div>
    </footer>
  );
}

export default Footer;
