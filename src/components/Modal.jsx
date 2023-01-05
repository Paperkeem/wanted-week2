import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { changeList } from '../store/store';

export default function Modal({ issue, issue: { id, title, content, people, status, date }, setIsmodal }) {
  
  const [isupdate, setIsupdate] = useState(false);
  const [newlist, setNewlist] = useState({...issue});

  const originData = useSelector((state) => { return state.issue });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewlist((list) => ({...list, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const copy = { ...newlist };
    const { status, id } = newlist;

    const newForm = originData[status].filter((el) => el.id !== id);
    const updateList = { ...originData, [status]: [...newForm, copy] };
    dispatch(changeList(updateList));

    setIsupdate(false);
    setNewlist({...issue}); // 업데이트 폼 초기화
  }

  return (
    <StBack>
      <StModalContent>
        <div style={{ float: 'right', fontSize: '1.3rem' }}>
          <BsFillPencilFill
            onClick={() => setIsupdate(true)}
            style={{ marginRight: '10px', cursor: 'pointer' }}/>
          <AiFillCloseCircle
            onClick={() => setIsmodal(true)}
            style={{ cursor: 'pointer' }} />
        </div>  
        <div style={{ clear: 'both' }}></div>
        
        {!isupdate
          ? (<>
          <h2>제목: {title}</h2>
          <hr />
          <p>담당자: {people}</p>
          <p>진행 상태: {status}</p>
          <p>마감 일자: {date.substring(0, 10)} {date.substring(11,13)}시 {date.substring(14)}분</p>
          <hr />
          <p>{content}</p>
          </>)
          : (<StModalFormWrapper onSubmit={handleSubmit}>
            <input type="text" name='title' value={ newlist.title || title } onChange={handleChange}/>
            <input type="text" name='people' value={ newlist.people || people } onChange={handleChange}/>
            <input type="datetime-local" name='date' value={ newlist.date || date } onChange={handleChange}/>
            <select name="status" id="status"
              value={newlist.status||status}
              onChange={handleChange}>
              <option value="issue">issue</option>
              <option value="inProgress">inProgress</option>
              <option value="completed">completed</option>
            </select>
            <textarea name="content" value={ newlist.content || content } onChange={handleChange}/>
            <StButton>저장</StButton>
          </StModalFormWrapper>)}
      </StModalContent>
    </StBack>
  );
}

const StBack = styled.div`
  background-color: rgba(0, 0, 0, 0.451);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;
const StModalContent = styled.div`
  background-color: white;
  position: absolute;
  top: 0px;
  width: 50vw;
  height: 50vh;
  top: 25%;
  left: 25%;
  padding: 30px;
  z-index: 20;
`;
const StModalFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
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
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
`;