import { Button, ButtonBase } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react';

const ProductCard = (props) => {
  const [src, setSrc] = useState(props.src);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [content, setContent] = useState(props.content);

  const Desc = () => {
    if(description !== ""){
      return (<p className="productText">{description}</p>)
    }else if(description === ""){
      return ;
    }
  }
  const openButtonClick = () => {
    document.getElementById('modalId').style.opacity = 1;
  }

  const closeButtonClick = () => {
    document.getElementById('modalId').style.opacity = 0;
  }
  return (
    <ButtonBase onClick={openButtonClick}>
    <div id = "displyPanel" className="productCard">
      <img src={src} alt="" />
      <div className="productInfo">
          <div className="productName">
              <p>{title}</p>
              {
                props.description ? <span><i class="fa-regular fa-heart"></i></span>: ''
              }
              
          </div>
          <Desc/>
      </div>
      <div class="modal" id="modalId">
          <div class="modalDialog">
              <header class="modalHeader">
              {title}
              <button class="closeModal" id='closeButtonId' onClick={closeButtonClick} data-close>
                  ✕  
              </button>
              </header>
              <section class="modalContent">
              <p>{content}</p>
              </section>
              <footer class="modalFooter">
              </footer>
          </div>
      </div>
  </div>
  </ButtonBase>
  )
}

export default ProductCard