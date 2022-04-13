import React from 'react';
import Link from 'next/link'
import { getAllProjects } from '../../functions/getProjects';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout
      title={"Projects"}
      descripotion={"You can reach all my projects here, you can reach the sources and live links of the projects."}
    >
      <Link href="/">
        <a className="absolute left-6 top-12 px-3 py-2 rounded-full font-bold text-xl text-sky-400 hover:text-sky-600 transition-colors duration-200">
          <i className="fa-solid fa-arrow-left-long pr-2" /> Back to home
        </a>
      </Link>

      <h1 className='pb-3 text-3xl font-bold font-notoSerif'>My Projects</h1>
      <p className='text-xl font-notoSerif'>All my projects are here. You can follow me and contribute to my projects to be informed about new projects.</p>
      <p className='text-md font-notoSerif text-yellow-300'>You can click on the project name for source code and on the project image for live application.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-32'>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} motionDelay={i} />
        ))}
      </div>

      <Footer followLinksActive={true} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: {
      projects
    },
  };
}

export default ProjectsPage;