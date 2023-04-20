import React, { useState } from "react";
import ModalAddNew from "./ModalAddNew";
import "./ManageUser.scss";
import TableUsers from "./TableUsers";
import { useEffect } from "react";
import { getAllUsers } from "../../../services/userServices";

const ManageUser = () => {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    console.log(">>> check res", res);
    if (res && res.data && res.data.DT) {
      setListUsers(res.data.DT);
    }
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <div className="manage-user-container mx-5">
        <h1 className="title">Manager Users</h1>
        <div className="user-content">
          <button
            onClick={() => setIsShowModalAddNew(true)}
            className="btn btn-primary"
          >
            Add new user
          </button>
        </div>
        <div className="table-user mt-3">
          <TableUsers
            listUsers={listUsers}
            setListUsers={setListUsers}
            fetchAllUsers={fetchAllUsers}
          />
        </div>
      </div>
      <ModalAddNew
        isShowModalAddNew={isShowModalAddNew}
        setIsShowModalAddNew={setIsShowModalAddNew}
        fetchAllUsers={fetchAllUsers}
      />
    </>
  );
};

export default ManageUser;
