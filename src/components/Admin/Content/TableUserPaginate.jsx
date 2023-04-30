import React from "react";
import { deleteUser } from "../../../services/userServices";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const TableUsersPaginate = (props) => {
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
    setDataModalDetail,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchUserWithPaginate,
  } = props;

  const handlePageClick = (event) => {
    setPage(+event.selected + 1);
  };
  const handleDeleteUser = async (id) => {
    let res = await deleteUser(id);
    fetchUserWithPaginate(1);
    // fetchAllUsers();
  };
  const handleDetailClick = (userDetail) => {
    setIsShowModalDetail(true);
    setDataModalDetail(userDetail);
    console.log(">>> check userDetail", userDetail);
  };
  const handleEditClick = (userUpdate) => {
    setDataUserUpdateModal(userUpdate);
    setIsShowModalUpdate(true);
  };
  return (
    <div className="table-user-container">
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
      <div className="paginate-container">
        <ReactPaginate
          forcePage={page - 1}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPage}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default TableUsersPaginate;
