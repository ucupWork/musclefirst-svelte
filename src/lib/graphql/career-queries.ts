import { gql } from 'graphql-request';

const CAREER_FRAGMENT = gql`
  fragment CareerDetails on Career {
    id
    name
    roleCareer
    description {
      html
    }
    hashtag
    linkDocument
    stat
  }
`

export const careersQuery = gql`
  ${CAREER_FRAGMENT}
  query GetCareers {
    careers {
      ...CareerDetails
    }
  }
`

export const careerQuery = gql`
  ${CAREER_FRAGMENT}
  query GetCareer($slug: String!) {
    career(where: { slug: $slug }) {
      ...CareerDetails
    }
  }
`