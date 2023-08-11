import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ElModal({onClose, showModal, children, title}) {
  const [show, setShow] = useState(false);


  const handleClose = (e) => {
    onClose()
    setShow(false)
};
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title className='display-6'>{title}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default ElModal;