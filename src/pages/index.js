import React from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import MainContent from "../components/MainContent/MainContent"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Svistel" />
      <MainContent />
    </Layout>
  )
}

export default IndexPage
