import { ArrowUp } from "lucide-react";
import "../css/footer.css";
import { useTranslation } from "react-i18next";


function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
      <a href="#hero" aria-label="Back to top">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}

export default Footer;
