import { gql } from 'graphql-tools'

export default gql`
  ####################### Q U E R I E S ##########################################
  type Query {
    # get top rated organizations (by charity navigator ratings or our own)
    # topRatedOrganizations(pagination: PaginationInput!): OrgsConnection!

    # get most popular organizations within our platform
    # mostPopularOrganizations(pagination: PaginationInput!): OrgsConnection!

    # get organizations trending on our platform right now
    # trendingOrganizations(pagination: PaginationInput!): OrgsConnection!

    # get biggest organizations on our platform
    # biggestOrganizations(pagination: PaginationInput!): OrgsConnection!

    # top organizations for showing explore page, etc.
    topOrganizations(pagination: PaginationInput!): OrgsConnection!

    # get organizations personalized to requesting user
    recommendedOrganizations(pagination: PaginationInput!): OrgsConnection!

    # get organizations with a particular tag name
    organizationsByTagName(pagination: PaginationInput!, tagName: String!): OrgsConnection!
  }

  ###############################################################################

  ####################### T Y P E S ##########################################
  type Organization {
    id: ID!
    name: String!
    shortDescription: String
    description: String
    color: Color!
    type: String
    taxId: String
    photos: [Photo]
    primaryTag: Tag!
    tags: [Tag!]!
    verified: Boolean!
  }

  type OrgsConnection implements Pagination {
    organizations: [Organization!]!
    totalCount: Integer!
    pageInfo: PageInfo!
  }
  ###########################################################################

  ####################### M U T A T I O N S ##########################################

  ################################################################################
`
