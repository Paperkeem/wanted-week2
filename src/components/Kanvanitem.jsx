import React, { useState } from 'react';
import styled from 'styled-components';
import { TbClick } from 'react-icons/tb';
import { AiFillDelete } from 'react-icons/ai';

import Modal from './Modal';

export default function Canvanitem({ issue, issue: { id, content }, idx }) {
  const [ismodal, setIsmodal] = useState(false);

  const onDragStart = (e, id) => {
    e.dataTransfer.effectAllowed = 'move';
    
    e.dataTransfer.setData('itemId', id);
    e.dataTransfer.setData('listName', e.target.parentElement.id);

    e.target.classList.add('grabbing');
  };

  const handelClick = () => setIsmodal(true);
  const handelDelete = () => {
    
  }


  return (
    <StIssue
      id={id}
      draggable
      onDragStart={(e) => onDragStart(e, id)}
    >
      {content}
      <div>
        <TbClick
          onClick={handelClick}
          style={{ cursor: 'pointer', marginRight:'5px' }} />
        <AiFillDelete
          onClick={handelDelete}
          style={{ cursor: 'pointer' }} />
      </div>  
      {ismodal &&
        <Modal
          setIsmodal={()=>setIsmodal()}
          issue={issue} />}
    </StIssue>
  );
}

const StIssue = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-top: 20px;
    margint-top: 20px;
    margin-bottom: 10px;
    border-radious: 9px;
    background-color: white;
    box-shadow: 5px 5px 10px lightgray;
    &.grabbing {
      cursor: prointer;
    }
`