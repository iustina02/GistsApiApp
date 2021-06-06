import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import styles from "./FileModal.module.scss";
import getGistFileContentService from "../services/getGistFileContentService";

/**
 * Modal component that display the content of a file
 */

const FileModal = ({imgData, fileName, contentUrl}) => {
  /**
   * @param {isModalVisible} boolean -> save the visibility of the modal
   */
  const [isModalVisible, setIsModalVisible] = useState(false);
  /**
   * @param {content} string -> save the content of the file from request
   */
  const [content, setContent] = useState("");

  /**
   * @param {getFileContent} function -> use services to request content of a file from API
   */
  const getFileContent = () => {
    getGistFileContentService(contentUrl).then((response) => {
      setContent(response.data);
    }).catch((err) => console.log("Error getting file content! ", err));
  }

  /**
   * @param {showModal} function -> display the modal and call the function getFileContent
   */
  const showModal = () => {
    getFileContent();
    setIsModalVisible(true);
  };

  /**
   * @param {handleOk} function -> handle "Ok" action of the modal
   */
  const handleOk = () => {
    setIsModalVisible(false);
  };

  /**
   * @param {handleOk} function -> handle "Cancel" action of the modal
   */
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <img className={styles.fileBagde} alt="icon" src={imgData} onClick={showModal}/>
      <div  data-label="fileName" onClick={showModal}>{fileName}</div>
      
      <Modal title={fileName} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <pre>{content}</pre>
      </Modal>
    </>
  );
};

FileModal.propTypes = {
  imgData: PropTypes.string,
  fileName: PropTypes.string,
  contentUrl: PropTypes.string
};

export default FileModal;