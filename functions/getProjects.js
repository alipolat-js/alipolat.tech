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