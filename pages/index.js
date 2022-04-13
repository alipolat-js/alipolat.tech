import React from "react";
import Layout from "../components/Layout";
import HomeSection from "../components/HomeSection";
import ProjectsWidget from "../components/ProjectsWidget";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Layout
      title="Ali POLAT"
      descripotion="I'm a Full Stack Developer with experience in developing front-end and back-end systems."
    >
      <HomeSection />

      <ProjectsWidget />

      <div className="w-full h-full max-w-4xl mx-auto">
        <Footer followLinksActive={false} />
      </div>
    </Layout>
  )
}

export default Home;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   