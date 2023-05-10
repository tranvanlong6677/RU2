import axios from "../utils/AxiosCustomize";
const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};
const createUser = (email, password, username, role, userImage) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", userImage);

  return axios.post("api/v1/participant", data);
};

const deleteUser = (id) => {
  return axios.delete("api/v1/participant", {
    data: {
      id,
    },
  });
};
const updateUser = (id, username, role, image) => {
  const data = new FormData();

  data.append("id", id);
  data.append("role", role);
  data.append("username", username);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post("/api/v1/login", { email, password });
};

export { getAllUsers, createUser, deleteUser, updateUser, getUserWithPaginate,postLogin };
