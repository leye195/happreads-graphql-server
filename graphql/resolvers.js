import { paginateResults } from "./utills";

const resolvers = {
  Query: {
    books: async (_, { page }, { dataSources }) => {
      const allBooks = await dataSources.bookAPI.getAllBooks();
      const books = paginateResults(page, 15, allBooks);
      return {
        page,
        hasMore: books.length === allBooks.length ? false : true,
        books,
      };
    },
    book: async (_, { id }, { dataSources }) => {
      const book = await dataSources.bookAPI.getBookById(id);
      return book;
    },
    popularBooks: async (_, __, { dataSources }) => {
      const popularBooks = await dataSources.bookAPI.getPopularBooks();
      return popularBooks;
    },
    recentBooks: async (_, __, { dataSources }) => {
      const recentBooks = await dataSources.bookAPI.getRecentBooks();
      return recentBooks;
    },
    sliderBooks: async (_, __, { dataSources }) => {
      const sliderBooks = await dataSources.bookAPI.getSliderBooks();
      return sliderBooks;
    },
    bookReviews: async (_, { id }, { dataSources }) => {
      const reviews = await dataSources.bookAPI.getReviewsByBookId(id);
      return reviews;
    },
    profile: async (_, { id }, { dataSources }) => {
      const profile = await dataSources.userAPI.getUser(id);
      return profile;
    },
  },
};
export default resolvers;
