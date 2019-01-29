import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 76463f0fbfe0840ebc6b16a98f4f3f61830a38dc4667ac1d70ab2a3cf09deb83"
  }
});
