import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    avatarUrl: String
    githubId: String
    reviews: [Review]
    uploaded: [Book]
    votes: [Book]
    want_read: [Shelve]
    reading: [Shelve]
    read: [Shelve]
    likes: [Review]
  }
  type Review {
    _id: ID!
    book: Book
    content: String
    reviewer: User!
    likes: [User]
    createdAt: String
  }
  type Vote {
    vote: String!
    createdAt: String!
    voter: User!
  }
  type Book {
    _id: ID!
    title: String
    contents: String
    genres: String
    thumbnail: String
    authors: [String]
    review: [Review]!
    votes: [Vote]
    createdAt: String!
  }
  type Shelve {
    book: Book
    createdAt: String
  }
  type BookConnection {
    page: Int!
    hasMore: Boolean!
    books: [Book]!
  }
  type ReviewConnection {
    _id: ID!
    book: Book
    content: String
    reviewer: User!
    likes: [ID]
    createdAt: String
  }
  type PopularBook {
    _id: ID!
    title: String
    contents: String
    genres: String
    thumbnail: String
    authors: [String]
    review: [Review]!
    avg_vote: String
    createdAt: String!
  }
  type LoginResponse {
    success: Boolean!
    token: String!
    me: User!
  }
  type SignupResponse {
    success: Boolean!
  }
  type Query {
    books(page: Int): BookConnection!
    book(id: ID!): Book
    popularBooks: [PopularBook]
    recentBooks: [Book]
    sliderBooks: [Book]
    bookReviews(id: ID!): [ReviewConnection]!
    profile(id: ID!): User
  }
  type Mutation {
    signup(email: String, password: String): SignupResponse!
    login(email: String, password: String): LoginResponse!
  }
`;
export default typeDefs;
