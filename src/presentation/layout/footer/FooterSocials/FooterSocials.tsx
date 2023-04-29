import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SpanRegular } from "../../../common/styles";
import { FooterSocialsWrapper } from "./FooterSocials.styles";

const FooterSocials = () => {
  return (
    <FooterSocialsWrapper>
      <SpanRegular>Follow us</SpanRegular>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </Link>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </Link>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </Link>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faPinterest} size="lg" />
      </Link>
      <Link to={"/"}></Link>
    </FooterSocialsWrapper>
  );
};

export default FooterSocials;
