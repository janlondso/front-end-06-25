import { ArrowUp } from "lucide-react";
import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jan's Portfolio. All rights reserved.</p>
      <a href="#hero" aria-label="Back to top">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}

export default Footer;
