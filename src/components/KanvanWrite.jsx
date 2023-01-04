import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addList } from '../store/store';
import { v4 as uuid } from 'uuid';

export default function CanvanWrite({setIsform}) {
  const [list, setList] = useState({});
  
  const originData = useSelector((state) => { return state.issue });
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((list) => ({...list, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let id = uuid();
    const { status } = list;
    const updateList = { ...originData, [status]: [...originData[status], { ...list, id }] };
    dispatch(addList(updateList));
    setIsform(false);
  }

  return (
    <StForm onSubmit={handleSubmit}>
      <p>🗓 새로운 이슈 작성!</p>
      <input type='text' name='title' placeholder='제목' required
        value={list.title || ''}
        onChange={handleChange} />
      <input type='text' name='people' placeholder='담당자' required
        value={list.people || ''}
        onChange={handleChange}/>
      <input type='datetime-local' name='date' required
        value={list.date || ''}
        onChange={handleChange}/>
      <select name="status" id="status"
        value={list.status || ''}
        onChange={handleChange}>
        <option value="issue">issue</option>
        <option value="inProgress">inProgress</option>
        <option value="completed">completed</option>
      </select>
      <textarea name='content' placeholder='이슈 작성' required 
        value={list.content || ''}
        onChange={handleChange}>  
      </textarea>
      <StButton>등록</StButton>
    </StForm>
  );
}

const StForm = styled.form` 
  padding: 10px;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
    input, select, textarea {
      padding: 5px;
      margin: 10px;
      font-size: 1.2rem;
    }
`;
const StButton = styled.button`
  background-color: lightblue;
  color: white;
  border: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
`;