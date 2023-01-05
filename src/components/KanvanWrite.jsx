import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addList } from '../store/store';
import { v4 as uuid } from 'uuid';

export default function CanvanWrite({setIsform}) {
  const originData = useSelector((state) => { return state.issue });
  const user = useSelector((state) => { return state.user });
  const dispatch = useDispatch();
  
  const [list, setList] = useState({});
  const [userlist, setUserlist] = useState(false);
  const [serchuser, setSerchuser] = useState([...user]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((list) => ({...list, [name]: value}));
  }

  const handleFocus = (e) => {
    if (e.target.name === 'people') {
      setUserlist(true);
    } else {
      setUserlist(false);
    }
  }

  const handleKeyDown = (e) => {
    setUserlist(true);
    const isUser = user.filter(el => el.includes(e.target.value));
    setSerchuser(isUser);
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
        onChange={handleChange} onFocus={handleFocus} />
      <input type='text' name='people' placeholder='담당자' required
        value={list.people || ''}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown} />
        {userlist && serchuser.map((el, index) => (
          <StSearchPtag key={index}>{el}</StSearchPtag>
        ))}
      <input type='datetime-local' name='date' required
        value={list.date || ''}
        onChange={handleChange} onFocus={handleFocus}/>
      <select name="status" id="status"
        value={list.status || ''}
        onChange={handleChange} onFocus={handleFocus}>
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
const StSearchTag = styled.div`
  position: absolute;
  width: 94%;
  left: 3%;
  top: 32vh;
  background-color: white;
  text-align: left;
  padding: 0px; 
  z-index: 5;
`;

const StSearchPtag = styled.p`
  border-bottom: 1px solid gray;,
  text-align: left;
`;