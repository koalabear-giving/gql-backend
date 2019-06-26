import { gql } from 'graphql-tools'

export default gql`
  type OnboardingUserData {
    organizationIds: [ID!]
    tagIds: [ID!]
    zipcode: String
  }

  type Query {
    topOrganizations(pagination: PaginationInput): TopOrgsResult

    topTags(pagination: PaginationInput): TopTagsResult
  }

  type TopOrgsResult implements Pagination {
    organizations: [Organization!]
    totalCount: Integer!
    pageInfo: PageInfo!
  }

  type TopTagsResult implements Pagination {
    tags: [Tag!]
    totalCount: Integer!
    pageInfo: PageInfo!
  }
`
