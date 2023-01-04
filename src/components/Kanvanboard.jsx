import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Kanvanitem from './Kanvanitem';
import { changeList } from '../store/store';

export default function Canvanboard({ issue, id }) {
  
  const originData = useSelector((state) => { return state.issue });
  const dispatch = useDispatch();

  const onDragOver = e => {
    e.preventDefault();
  }

  const beforeOrAfter = (element, y) => {
    const box = element.getBoundingClientRect();
    const offset = y - box.top - (box.height / 2);

    return offset < 0
      ? { where: 'before', id: element.id }
      : { where: 'after', id: element.id }
  }

  const onDragEnd = (e, id) => {
    const itemId = e.dataTransfer.getData('itemId');

    const from = e.dataTransfer.getData('listName');
    const to = e.target.tagName === 'LI' ? e.target.parentElement.id : e.target.id;

    let { where, id: hoverElementId } = beforeOrAfter(e.target, e.clientY);
    const updateList = { ...originData };
    
    const movingData = updateList[from].filter(el => el.id == itemId).map(el => {
      return { ...el, status: to }
    });
    console.log(movingData);

    let newFrom = updateList[from].filter(el => el.id != itemId);
    let newTo;
    
    if (from !== to) {
      newTo = updateList[to].reduce((acc, el) => {
        if (el.id == hoverElementId) {
          if (where === 'before') return [...acc, ...movingData, el];
          if (where === 'after') return [...acc, el, ...movingData];
        }
        return [...acc, el]
      }, []);
      
      updateList[to] = newTo;
      updateList[from] = newFrom;
    } else {
      newFrom = updateList[from].filter(el => el.id != itemId) 
      newTo = newFrom.reduce((acc, el) => {
        if (el.id == hoverElementId) {
          if (where === 'before') return [...acc, ...movingData, el];
          if (where === 'after') return [...acc, el, ...movingData];
        }
            
        return [...acc, el]
      }, []);
      updateList[to] = newTo;
    }
    dispatch(changeList(updateList));
  }

  return (<>
    
    <StBoard
      id={id}
      onDragOver={onDragOver}
      onDrop={(e)=>{onDragEnd(e, issue.id)}}
    >
      <StHeader>{id}</StHeader>
      {issue && issue.map((issue, idx) => 
        <Kanvanitem
          key={idx}
          issue={issue}
          draggable />
      )}
    </StBoard>
  </>  
  );
}

const StBoard = styled.ul`
    width: 30%;
    padding: 20px;
    margin: 10px;
    background-color: #F0F0F0;
    border-radius: 10px;
    list-style: none;
`;

const StHeader = styled.p`
  font-size: 1.2rem;
`