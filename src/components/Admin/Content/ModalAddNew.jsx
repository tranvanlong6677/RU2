import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import imgPreview from "../../../assets/images/c3.jpg";
import "./ModalAddNew.scss";
import { BsFolderPlus } from "react-icons/bs";

const ModalAddNew = (props) => {
  const { isShowModalAddNew, setIsShowModalAddNew } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("User");
  const [imgPreview, setImgPreview] = useState("");
  const [image, setImage] = useState("");
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImgPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      //   setImgPreview(null);
    }
  };

  return (
    <div>
      <Modal
        // {...props}
        show={isShowModalAddNew}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setIsShowModalAddNew(false)}
        backdrop="static"
        className="modal-add-new-container"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new user
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
              <div className="mb-3 col-sm-12 col-md-6 ">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
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
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
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
                {!imgPreview ? (
                  <span style={{ zIndex: 10 }}>Upload image</span>
                ) : (
                  <img src={imgPreview} alt="" className="img-preview" />
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsShowModalAddNew(false)}>Submit</Button>
          <Button onClick={() => setIsShowModalAddNew(false)} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddNew;
