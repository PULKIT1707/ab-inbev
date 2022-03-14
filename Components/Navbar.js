import { Button } from '@mui/material';
import React from 'react';
import '../css/style.css';
import logo from '../images/myreward_logo.png';
import SearchField from "react-search-field";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    borderRadius: "0px",
    '&:hover': {
      borderColor: purple[700],
    },
  }));

  const ColorButtonBorder = styled(Button)(({ theme }) => ({
    color: 'black',
    borderColor: purple[500],
    borderRadius: "0px",
    '&:hover': {
      backgroundColor: purple[700],
      color: 'white'
    },
  }));

  const open = document.getElementById('signInButtonId');
  const close = document.getElementById('closeButtonId');



const Navbar = () => {

  const signInButtonClick = () => {
    document.getElementById('modalId').style.opacity = 1;
  }

  const closeButtonClick = () => {
    document.getElementById('modalId').style.opacity = 0;
  }

  return (
    <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
            <div class="nav-title">
            <img src={logo} alt="My Rewards" style={{"height": "50px"}} />
            </div>
        </div>
        <div class="nav-btn">
            <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div class="nav-links">
            <SearchField
                placeholder="Type your Search here..."
                searchText=""
                className="searchBar"
            />
            <div className="navButtons">
                <ColorButton className="navButton" variant="contained" >SIGN UP FOR FREE</ColorButton>
                <ColorButtonBorder id='signInButtonId' className="navButton" variant="outlined" onClick={signInButtonClick}>SIGN IN</ColorButtonBorder>
            </div>
        </div>
        <div class="modal" id="modalId">
          <div class="modalDialog">
              <header class="modalHeader">
              Header
              <button class="closeModal" id='closeButtonId' onClick={closeButtonClick} data-close>
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
      </div>
    </div>
  )
}

export default Navbar