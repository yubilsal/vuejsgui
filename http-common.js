import axios from "axios";

export default axios.create({
  baseURL:
    "http://devfile-sample-java-springboot-basic-git-yubilsal-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com",
  headers: {
    "Content-Type": "application/json",
  },
});
