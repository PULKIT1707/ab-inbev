import { Button  } from '@mui/material'
import '../css/style.css'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import MenuOptions from '../data/MenuOptions.json'
import Modal from './Modal';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  borderColor: 'none',
  borderRadius: "0px",
  '&:hover': {
    backgroundColor: purple[700],
    borderColor: 'none',
  },
}));

const MenuIconButton = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='menuButtonBar'>
      {
        MenuOptions.map((cur) => {
          return (
            <>
            {/* <Tooltip title={cur.name}> */}
              <ColorButton variant="outlined">
                <i class={cur.icon} style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "paddingTop" : "10px"}}>
                  <span className='iconButton'>{cur.name}</span>
                </i>
              </ColorButton>
            {/* </Tooltip> */}
            <Modal showModal={showModal} setShowModal={setShowModal}/>    
            </>      
          )
        })
      }
   </div>
  )
}

export default MenuIconButton