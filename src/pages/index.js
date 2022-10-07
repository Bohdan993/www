import React, {useState} from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import MainContent from "../components/MainContent/MainContent"

const IndexPage = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Layout visible={visible}>
      <Seo title="Svistel" />
      <MainContent setVisible={setVisible} />
    </Layout>
  )
}

export default IndexPage
