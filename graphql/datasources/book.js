//DataSource handle, fetching data from a REST API
//connect REST API, through apollo-datasource-rest
import { RESTDataSource } from "apollo-datasource-rest";

class BookAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://happread.herokuapp.com/";
  }
  async getAllBooks() {
    const response = await this.get(`books`);
    return response || [];
  }
  async getBookById(id) {
    const response = await this.get(`book/${id}`);
    return response.book;
  }
  async getPopularBooks() {
    const response = await this.get(`books/popular`);
    return response || [];
  }
  async getRecentBooks() {
    const response = await this.get(`books/recent`);
    return response || [];
  }
  async getSliderBooks() {
    const response = await this.get(`book/sliders`);
    return response.books || [];
  }
  async getReviewsByBookId(id) {
    const response = await this.get(`book/${id}/review`);
    return response.reviews || [];
  }
}
export default BookAPI;
