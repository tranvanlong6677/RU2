import React from "react";
import ModalAddNew from "./ModalAddNew";

const ModalUpdateUser = ({
  isShowModalUpdate,
  setIsShowModalUpdate,
  dataUserUpdateModal,
  setDataUserUpdateModal,
  fetchAllUsers,
  page,
  setPage,
  fetchUserWithPaginate,
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
        page={page}
        setPage={setPage}
        fetchUserWithPaginate={fetchUserWithPaginate}
      />
    </>
  );
};

export default ModalUpdateUser;
