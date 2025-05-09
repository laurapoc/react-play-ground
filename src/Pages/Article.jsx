import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Modal from "../components/Modal/Modal";

const Article = () => {
  const params = useParams();

  const [searchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);

  console.log(searchParams.get("page"), params);

  const handleButtonClick = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <h2>Article</h2>
      <button onClick={handleButtonClick}>Open article modal</button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="article-content">Article content</div>
      </Modal>
    </div>
  );
};

export default Article;
