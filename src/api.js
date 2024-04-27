import http from "../http-common";

class hello {
  hello() {
    return http.get("/home");
  }
}

export default new hello();
