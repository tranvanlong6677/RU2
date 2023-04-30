import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import imgPreview from "../../../assets/images/c3.jpg";
import "./ModalAddNew.scss";
import { BsFolderPlus } from "react-icons/bs";
import { createUser, updateUser } from "../../../services/userServices";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalAddNew = ({
  isShowModalAddNew,
  setIsShowModalAddNew,
  isShowModalUpdate,
  setIsShowModalUpdate,
  fetchAllUsers,
  isUpdateModal = false,
  isModalDetail=false,
  dataUserUpdateModal,
  setDataUserUpdateModal,
}) => {
  // console.log(">>> check dataUserUpdateModal", dataUserUpdateModal);
  const defaultDataModal = {
    id: "",
    username: "",
    password: "",
    role: "",
    userImage: "",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [imgPreview, setImgPreview] = useState("");
  const [image, setImage] = useState("");
  const [dataModal, setDataModal] = useState(defaultDataModal);
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImgPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
    }
  };
  const handleClose = () => {
    if (isUpdateModal) {
      setIsShowModalUpdate(false);
      setDataUserUpdateModal({});
    } else {
      setIsShowModalAddNew(false);
    }
    setEmail("");
    setUsername("");
    setRole("USER");
    setPassword("");
    setImgPreview("");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = async (userInfo) => {
    console.log(">> check userInfo", userInfo);
    // if()
    if (isUpdateModal) {
      let res = await updateUser(
        dataUserUpdateModal.id,
        userInfo.username,
        userInfo.role,
        userInfo.image
      );
      if (res && res.EC === 0) {
        toast.success(res.EM);
        handleClose();
        await fetchAllUsers();
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
      }
    } else {
      if (!validateEmail(userInfo.email)) {
        toast.error("Invalid email");
        return;
      }
      if (!password) {
        toast.error("Invalid password");
        return;
      }
      let res = await createUser(
        userInfo.email,
        userInfo.password,
        userInfo.username,
        userInfo.role,
        userInfo.userImage
      );
      if (res && res.EC === 0) {
        toast.success(res.EM);
        handleClose();
        fetchAllUsers();
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
      }
    }
  };
  useEffect(() => {
    if (isUpdateModal) {
      setEmail(dataUserUpdateModal.email);
      setUsername(dataUserUpdateModal.username);
      setRole(dataUserUpdateModal.role);
      setImage(dataUserUpdateModal.image);
      if (dataUserUpdateModal.image) {
        setImgPreview(`data:image/jpeg;base64,${dataUserUpdateModal.image}`);
      }
    }
  }, [dataUserUpdateModal]);
  return (
    <div>
      <Modal
        show={isUpdateModal ? isShowModalUpdate : isShowModalAddNew}
        onHide={() => handleClose()}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="modal-add-new-container"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {isUpdateModal ? "Update user" : "Add new user"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="mb-3 col-sm-12 col-md-6 ">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  disabled={isUpdateModal}
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  value={password}
                  disabled={isUpdateModal}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-6">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3 col-sm-12 col-md-6">
                <label for="roles" className="form-label">
                  Roles
                </label>
                <select
                  className="form-select"
                  id="roles"
                  aria-label="Example select with button addon"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <div className="mb-3 col-sm-12">
                <label className="form-label label-upload" htmlFor="upload-img">
                  <span>Upload images</span>
                  <BsFolderPlus />
                </label>
                <input
                  type="file"
                  hidden
                  id="upload-img"
                  onChange={(e) => {
                    handleUploadImage(e);
                  }}
                />
              </div>
              <div className="col-sm-12 img-container">
                {false ? (
                  <span>Upload image</span>
                ) : (
                  <img src={imgPreview} alt="" className="img-preview" />
                )}
                {/* `data:image/jpeg;base64,${dataUpdate.image}` */}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              handleSubmit({
                email,
                password,
                username,
                role,
                userImage: image,
              })
            }
          >
            Submit
          </Button>
          <Button onClick={() => handleClose()} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddNew;
