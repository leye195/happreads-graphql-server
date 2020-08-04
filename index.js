import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import BookAPI from "./graphql/datasources/book";
import UserAPI from "./graphql/datasources/user";
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    bookAPI: new BookAPI(),
    userAPI: new UserAPI(),
  }),
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
