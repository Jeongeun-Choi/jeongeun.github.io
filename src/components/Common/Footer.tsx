import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day. 😆
      <br />© 2021 Developer Eun, Powered By Gatsby.
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: grid;
  place-items; center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media(max-width: 768px){
    font-size: 13px;
  }
`;

export default Footer;
