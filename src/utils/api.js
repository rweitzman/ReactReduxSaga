import axios from "axios";

axios.defaults.headers.common = { "Content-Type": "application/json" };

axios.defaults.baseURL =
  "http://fakeapi.jsonparseronline.com/posts";
