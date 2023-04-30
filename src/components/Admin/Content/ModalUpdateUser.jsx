import React from "react";
import ModalAddNew from "./ModalAddNew";

const ModalUpdateUser = ({
  isShowModalUpdate,
  setIsShowModalUpdate,
  dataUserUpdateModal,
  setDataUserUpdateModal,
  fetchAllUsers

}) => {
  const isUpdateModal = true;
  return (
    <>
      <ModalAddNew
        isUpdateModal={isUpdateModal}
        isShowModalUpdate={isShowModalUpdate}
        setIsShowModalUpdate={setIsShowModalUpdate}
        dataUserUpdateModal={dataUserUpdateModal}
        setDataUserUpdateModal={setDataUserUpdateModal}
        fetchAllUsers={fetchAllUsers}
      />
    </>
  );
};

export default ModalUpdateUser;
