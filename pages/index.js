import React, { useState } from "react";
import Layout from "../components/Layout";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import ProjectsWidget from "../components/ProjectsWidget";
import BlogsWidget from "../components/BlogsWidget";
import GalleryWidget from "../components/GalleryWidget";
import FlowWidget from "../components/FlowWidget";

const Home = () => {
  const [listModeOn, setlistModeOn] = useState(true);
  return (
    <Layout
      title="Ali POLAT"
      descripotion="I'm a Full Stack Developer with experience in developing front-end and back-end systems."
    >
      <HomeSection />

      {/* <div className="w-full h-full max-w-4xl mx-auto pt-32">
        <button
          className={`rounded-full duration-200 tracking-wider py-1 px-4
          ${listModeOn ? "bg-sky-500 hover:bg-sky-600" : "bg-teal-500 hover:bg-teal-600"}`}
          onClick={() => setlistModeOn(!listModeOn)}
        >
          {listModeOn ? "List mode" : "Flow mode"}
          &nbsp;
          <i className={`fas ${listModeOn ? "fa-stream" : "fa-angle-double-down"}`}></i>
        </button>
      </div> */}

      {
        listModeOn
          ? <section>
            <ProjectsWidget />
            {/* <BlogsWidget /> */}
            {/* <GalleryWidget /> */}
          </section>
          : <FlowWidget />
      }

      <div className="w-full h-full max-w-4xl mx-auto">
        <Footer followLinksActive={false} />
      </div>
    </Layout>
  )
}

export default Home;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   