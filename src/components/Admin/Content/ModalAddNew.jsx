import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ModalAddNew = (props) => {
  const { isShowModalAddNew, setIsShowModalAddNew } = props;
  
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
                <input id="email" type="email" className="form-control" />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label for="password" className="form-label">
                  Password
                </label>
                <input id="password" type="password" className="form-control" />
              </div>

              <div className="mb-3 col-sm-12 col-md-6">
                <label for="username" className="form-label">
                  Username
                </label>
                <input id="username" type="text" className="form-control" />
              </div>
              <div className="mb-3 col-sm-12 col-md-6 ">
                <label for="address" className="form-label">
                  Address
                </label>
                <input id="address" type="text" className="form-control" />
              </div>

              <div className="mb-3 col-sm-12 col-md-6">
                <label for="roles" className="form-label">
                  Roles
                </label>
                <select
                  className="form-select"
                  id="roles"
                  aria-label="Example select with button addon"
                >
                  <option value="1">User</option>
                  <option value="2">Customer</option>
                  <option value="3">abc</option>
                </select>
              </div>
              <div className="mb-3 col-sm-12">
                <label for="image" className="form-label">
                  Images
                </label>
                <input type="file" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsShowModalAddNew(false)}>Submit</Button>
          <Button onClick={() => setIsShowModalAddNew(false)} variant="danger">Close</Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddNew;
