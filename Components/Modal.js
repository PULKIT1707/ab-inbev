import React,{useEffect, useState} from 'react'
// import styled from 'styled-components'

const Modal = (props) => {
    const [showModal, setShowModal] = useState(props.showModal);
    useEffect(() => {
      
    debugger
      return () => {
        
      }
    }, [])
    
  return (
    <> { 
          showModal ? <div class="modal" id="modalId">
          <div class="modalDialog">
              <header class="modalHeader">
              Header
              <button class="closeModal" data-close>
                  ✕  
              </button>
              </header>
              <section class="modalContent">
              <p>Press ✕, ESC, or click outside of the modal to close it</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus reprehenderit accusamus totam ratione! Nesciunt, nemo dolorum recusandae ad ex nam similique dolorem ab perspiciatis qui. Facere, dignissimos. Nemo, ea.</p>
              </section>
              <footer class="modalFooter">
                  Footer
              </footer>
          </div>
      </div> : ''
      }
    </>
  )
}

export default Modal