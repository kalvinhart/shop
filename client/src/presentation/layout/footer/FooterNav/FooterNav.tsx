import { Link } from "react-router-dom";
import { SpanBold } from "../../../common/styles";
import { FooterNavLI, FooterNavUL, FooterNavWrapper } from "./FooterNav.styles";

const FooterNav = () => {
  return (
    <FooterNavWrapper>
      <FooterNavUL>
        <FooterNavLI>
          <SpanBold>Help</SpanBold>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/profile/orders">Track Order</Link>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/delivery">Delivery {"&"} Returns</Link>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/sitemap">Sitemap</Link>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/about">About Us</Link>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/contact">Contact</Link>
        </FooterNavLI>
      </FooterNavUL>

      <FooterNavUL>
        <FooterNavLI>
          <SpanBold>Privacy {"&"} Legal</SpanBold>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/privacy">Cookies {"&"} Privacy Policy</Link>
        </FooterNavLI>
        <FooterNavLI>
          <Link to="/delivery">Terms {"&"} Conditions</Link>
        </FooterNavLI>
      </FooterNavUL>
    </FooterNavWrapper>
  );
};

export default FooterNav;
