import React, {useState} from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import MainContent from "../components/MainContent/MainContent"

const IndexPage = () => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Layout visible={visible} isMobile={isMobile}>
      <Seo title="Svistel" />
      <MainContent setVisible={setVisible} setIsMobile={setIsMobile} />
    </Layout>
  )
}

export default IndexPage
