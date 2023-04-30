import React,{useState,useEffect} from "react";
import ModalAddNew from "./ModalAddNew";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BsFolderPlus } from "react-icons/bs";

const ModalDetailUser = (props) => {
  const {dataModalDetail,setDataModalDetail,isShowModalDetail,setIsShowModalDetail} = props;
  const [imgPreview,setImgPreview] = useState();
  const handleClose = () => {
    setIsShowModalDetail(false);
    setDataModalDetail({});
  };
  const handleDetailImg = () => {
      setImgPreview(`data:image/jpeg;base64,${dataModalDetail.image}`);
  };
  useEffect(()=>{
    handleDetailImg()
  },[])
  return (
    <>
      <Modal
        show={isShowModalDetail}
        onHide={() => handleClose()}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className="modal-add-new-container"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User Detail
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
                  value={dataModalDetail?.email}
                  disabled={true}
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
                  disabled={true}
                 
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
                  value={dataModalDetail?.username}
                  disabled={true}
                  
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
                  value={dataModalDetail?.role}
                  disabled={true}
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
            // onClick={() =>
            //   handleSubmit({
            //     email,
            //     password,
            //     username,
            //     role,
            //     userImage: image,
            //   })
            // }
          >
            Submit
          </Button>
          <Button onClick={() => handleClose()} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDetailUser;
