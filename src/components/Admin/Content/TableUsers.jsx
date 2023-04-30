import React from "react";
import { deleteUser } from "../../../services/userServices";
import { useState } from "react";

const TableUsers = (props) => {
  const {
    listUsers,
    setListUsers,
    fetchAllUsers,
    isShowModalUpdate,
    setIsShowModalUpdate,
    dataUserUpdateModal,
    setDataUserUpdateModal,
    setIsShowModalDetail,
    isShowModalDetail,
    dataModalDetail,
    setDataModalDetail
  } = props;
  const handleDeleteUser = async (id) => {
    let res = await deleteUser(id);
    fetchAllUsers();
  };
  const handleDetailClick = (userDetail) => {
    setIsShowModalDetail(true);
    setDataModalDetail(userDetail);
    console.log(">>> check userDetail",userDetail);
  };
  const handleEditClick = (userUpdate) => {
    setDataUserUpdateModal(userUpdate);
    setIsShowModalUpdate(true);
  };
  return (
    <div>
      <table className="table">
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
          {listUsers.length === 0 ? (
            <>Not found data</>
          ) : (
            <>
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((item, index) => {
                  return (
                    <tr key={`user${index}`}>
                      <th scope="row">{item?.id}</th>
                      <td>{item?.username}</td>
                      <td>{item?.email}</td>
                      <td>{item?.role}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleDetailClick(item)}
                        >
                          Detail
                        </button>
                        <button
                          className="btn btn-warning mx-3"
                          onClick={() => handleEditClick(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteUser(item?.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
