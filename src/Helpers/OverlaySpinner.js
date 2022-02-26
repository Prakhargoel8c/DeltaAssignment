import React from 'react';
import { Modal } from 'react-bootstrap';
import { LoadingOutlined } from '@ant-design/icons';
import './Spinner.css';
const OverlaySpinner = () => {
  return (
    <Modal centered show={true} onHide={() => {}} size="md" className="overlaySpinner">
      <LoadingOutlined className="spinner" spin />
    </Modal>
  );
};

export default OverlaySpinner;
