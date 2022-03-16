import styled from "@emotion/styled";
import React, { FunctionComponent, ReactNode } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />
        <meta
          name="google-site-verification"
          content="pZvRWd9pZ1KRtwlUmh8Fl1GmkuKIa6i6jm56FYjB900"
        />
        <meta
          name="naver-site-verification"
          content="749467356c730c696f6577d7bd2194ff897f0707"
        />
        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
