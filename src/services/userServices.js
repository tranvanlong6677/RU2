import axios from "axios";
const getAllUsers = () => {
  return axios.get("http://localhost:8081/api/v1/participant/all");
};
const createUser = (email, password, username, role, userImage) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", userImage);
  
  return axios.post("http://localhost:8081/api/v1/participant", data);
};

const deleteUser = (id) => {
  return axios.delete("http://localhost:8081/api/v1/participant", {
    data: {
      id,
    },
  });
};
export { getAllUsers, createUser, deleteUser };
