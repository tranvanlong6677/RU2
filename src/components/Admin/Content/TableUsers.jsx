import React from "react";
import { deleteUser } from "../../../services/userServices";

const TableUsers = (props) => {
  const { listUsers, setListUsers,fetchAllUsers } = props;
  const handleDeleteUser = async (id) => {
    let res = await deleteUser(id);
    console.log(">> check res delete",res)
    fetchAllUsers();
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item?.id}</th>
                  <td>{item?.username}</td>
                  <td>{item?.email}</td>
                  <td>{item?.role}</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                    <button
                      className="btn btn-danger mx-3"
                      onClick={() => handleDeleteUser(item?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
