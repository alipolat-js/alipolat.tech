import React from 'react';
import { getAllProjects } from '../../functions/getProjects';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import BackToHome from '../../components/BackToHome';

const ProjectsPage = ({ projects }) => {
  return (
    <Layout
      title={"Projects"}
      descripotion={"You can reach all my projects here, you can reach the sources and live links of the projects."}
      menuColor={"bg-orange-500"}
    >
      <BackToHome />
      <h1 className='text-3xl font-bold pb-3 text-orange-400'>My Projects</h1>
      <p className='text-xl font-medium'>All my projects are here. You can follow me and contribute to my projects to be informed about new projects.</p>
      
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-16'>
        {projects.map(project => (
          
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <Footer followLinksActive={true}/>
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