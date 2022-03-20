import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-burger-builder-42855-default-rtdb.asia-southeast1.firebasedatabase.app/",
});

export default instance;
