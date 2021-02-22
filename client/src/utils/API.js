import axios from "axios";
export default {
  getUser: function (a) {
    return axios.get("/api/user/" + a);
  },
  login: function (a) {
    return axios.post("/api/user/login", a);
  },
  signup: function (a) {
    return axios.post("/api/user/sign-up", a);
  },
  editUser: function (a, b) {
    return axios.put("/api/user/" + a, b);
  },
  deleteUser: function (a) {
    return axios.delete("/api/user/" + a);
  },
};