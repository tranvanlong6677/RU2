import React, { useState } from "react";
import ModalAddNew from "./ModalAddNew";
import "./ManageUser.scss";
import TableUsers from "./TableUsers";
import TableUserPaginate from "./TableUserPaginate";
import { useEffect } from "react";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/userServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDetailUser from "./ModalDetailUser";

const ManageUser = () => {
  const LIMIT_USER = 5;
  const [page,setPage] = useState(1);
  const [totalPage,setTotalPage] = useState();
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [isShowModalDetail, setIsShowModalDetail] = useState(false);
  const [dataUserUpdateModal, setDataUserUpdateModal] = useState({});
  const [dataModalDetail, setDataModalDetail] = useState({});
  const [listUsers, setListUsers] = useState([]);
  const fetchAllUsers = async () => {
    let res = await getAllUsers();
    if (res && res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchUserWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    console.log(">>> check res paginate", res);
    if (res && res.DT && res.DT.users && res.EC === 0) {
      setListUsers(res.DT.users);
      setTotalPage(res.DT.totalPages);
      setPage(page);
    }
  };
  useEffect(() => {
    // fetchAllUsers();
    fetchUserWithPaginate(page, LIMIT_USER);
  }, [page]);

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
          {/* <TableUsers
            listUsers={listUsers}
            setListUsers={setListUsers}
            fetchAllUsers={fetchAllUsers}
            isShowModalUpdate={isShowModalUpdate}
            setIsShowModalUpdate={setIsShowModalUpdate}
            dataUserUpdateModal={dataUserUpdateModal}
            setDataUserUpdateModal={setDataUserUpdateModal}
            dataModalDetail={dataModalDetail}
            setDataModalDetail={setDataModalDetail}
            isShowModalDetail={isShowModalDetail}
            setIsShowModalDetail={setIsShowModalDetail}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            setListUsers={setListUsers}
            fetchAllUsers={fetchAllUsers}
            isShowModalUpdate={isShowModalUpdate}
            setIsShowModalUpdate={setIsShowModalUpdate}
            dataUserUpdateModal={dataUserUpdateModal}
            setDataUserUpdateModal={setDataUserUpdateModal}
            dataModalDetail={dataModalDetail}
            setDataModalDetail={setDataModalDetail}
            isShowModalDetail={isShowModalDetail}
            setIsShowModalDetail={setIsShowModalDetail}
            page={page}
            setPage={setPage}
            totalPage={totalPage}
            setTotalPage={setTotalPage}
            fetchUserWithPaginate={fetchUserWithPaginate}
          />
        </div>
      </div>
      <ModalAddNew
        isShowModalAddNew={isShowModalAddNew}
        setIsShowModalAddNew={setIsShowModalAddNew}
        fetchAllUsers={fetchAllUsers}
        fetchUserWithPaginate={fetchUserWithPaginate}
        totalPage={totalPage}
      />
      <ModalUpdateUser
        isShowModalUpdate={isShowModalUpdate}
        setIsShowModalUpdate={setIsShowModalUpdate}
        dataUserUpdateModal={dataUserUpdateModal}
        setDataUserUpdateModal={setDataUserUpdateModal}
        fetchAllUsers={fetchAllUsers}
        fetchUserWithPaginate={fetchUserWithPaginate}
        page={page}
        setPage={setPage}
      />
      <ModalDetailUser
        dataModalDetail={dataModalDetail}
        setDataModalDetail={setDataModalDetail}
        isShowModalDetail={isShowModalDetail}
        setIsShowModalDetail={setIsShowModalDetail}
      />
    </>
  );
};

export default ManageUser;
