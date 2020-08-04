//DataSource handle, fetching data from a REST API
//connect REST API, through apollo-datasource-rest
import { RESTDataSource } from "apollo-datasource-rest";

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://happread.herokuapp.com/";
  }
  async getUser(id) {
    const response = await this.get(`profile/${id}`);
    return response.user;
  }
}
export default UserAPI;
