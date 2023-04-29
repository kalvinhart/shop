import {
  faCcAmex,
  faCcDiscover,
  faCcJcb,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterPaymentsWrapper } from "./FooterPaymentMethods.styles";

const FooterPaymentMethods = () => {
  return (
    <FooterPaymentsWrapper>
      <FontAwesomeIcon icon={faCcVisa} size="2x" />
      <FontAwesomeIcon icon={faCcMastercard} size="2x" />
      <FontAwesomeIcon icon={faCcAmex} size="2x" />
      <FontAwesomeIcon icon={faCcDiscover} size="2x" />
      <FontAwesomeIcon icon={faCcJcb} size="2x" />
    </FooterPaymentsWrapper>
  );
};

export default FooterPaymentMethods;
