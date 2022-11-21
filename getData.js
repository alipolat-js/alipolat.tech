import { gql } from "graphql-request";
import { graphcms } from "./client";

export const getCustomerComments = async () => {
  const getCustomerCommentsQuery = gql`
  {
    customerComments {
      customerComment
      customerName
      customerPositionAndCompany
    }
  }
  `;

  const { customerComments } = await graphcms.request(getCustomerCommentsQuery);
  
  return customerComments;
}


export const getReferences = async () => {
  const getReferencesQuery = gql`
  {
    references {
      companyName
      logo {
        url
      }
      website
      services
    }
  }
  `;

  const { references } = await graphcms.request(getReferencesQuery);
  
  return references;
}