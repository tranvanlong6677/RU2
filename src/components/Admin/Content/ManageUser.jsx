import React, { useState } from "react";
import ModalAddNew from "./ModalAddNew";

const ManageUser = () => {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  return (
    <div className="manage-user-container">
      <h1 className="title"></h1>
      <div className="user-content">
        <button onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
      </div>
      <div className="table-user"></div>
      <ModalAddNew
        isShowModalAddNew={isShowModalAddNew}
        setIsShowModalAddNew={setIsShowModalAddNew}
      />
    </div>
  );
};

export default ManageUser;
