import axios from "axios";

export default class ProductService {

  add(product) {
    return axios.post("http://localhost:8080/api/products/add", product)
  }

  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }

  getById(id) {
    return axios.get(`http://localhost:8080/api/products/getById?id=${id}`);
  }
}
