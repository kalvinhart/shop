import { FooterNav } from "../FooterNav";
import { FooterPaymentMethods } from "../FooterPaymentMethods";
import { FooterSocials } from "../FooterSocials";

import { Container } from "../../layouts/Container";

import {
  FooterCenterWrapper,
  FooterContentWrapper,
  FooterWrapper,
} from "./Footer.styles";
import { SpanLogo } from "../../../common/styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContentWrapper>
          <SpanLogo section="footer">My eShop</SpanLogo>
          <FooterCenterWrapper>
            <FooterNav />
            <FooterPaymentMethods />
          </FooterCenterWrapper>
          <FooterSocials />
        </FooterContentWrapper>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
