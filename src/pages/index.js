import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";
import MainContent from "../components/MainContent/MainContent";

const IndexPage = () => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <Layout visible={visible} isMobile={isMobile} show={show} setShow={setShow}>
      <Seo title="Svistel" />
      <MainContent
        setVisible={setVisible}
        setIsMobile={setIsMobile}
        isMobile={isMobile}
        setShow={setShow}
      />
    </Layout>
  );
};

export default IndexPage;
