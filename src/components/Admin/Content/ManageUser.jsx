import React, { useState } from "react";
import ModalAddNew from "./ModalAddNew";
import "./ManageUser.scss";

const ManageUser = () => {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  return (
    <>
      <div className="manage-user-container">
        <h1 className="title"></h1>
        <div className="user-content">
          <button onClick={() => setIsShowModalAddNew(true)}>
            Add new user
          </button>
        </div>
        <div className="table-user"></div>
      </div>
      <ModalAddNew
        isShowModalAddNew={isShowModalAddNew}
        setIsShowModalAddNew={setIsShowModalAddNew}
      />
    </>
  );
};

export default ManageUser;
