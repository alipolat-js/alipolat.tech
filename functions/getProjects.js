import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
  {
    projects(orderBy: date_DESC) {
      id
      title
      description
      githubSource
      liveSource
      tags
      image {
        url
      }
      date
    }
  }
  `;

  const { projects } = await graphcms.request(getAllProjectsQuery);
  
  return projects;
}

export const getLastProjects = async () => {
  const getLastProjectsQuery = gql`
  {
    projects(orderBy: date_DESC, first: 3) {
      id
      title
      description
      githubSource
      liveSource
      tags
      image {
        url
      }
      date
    }
  }
  `;

  const { projects } = await graphcms.request(getLastProjectsQuery);
  return projects;
}