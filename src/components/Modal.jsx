import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Modal({issue, issue: {id, title, content, people, status, date}, setIsmodal}) {
  return (
    <StBack>
      <StModalContent>
        <AiFillCloseCircle
          onClick={() => setIsmodal(true)}
          style={{ float: 'right', cursor: 'pointer', fontSize: '1.3rem' }} />
        <div style={{ clear: 'both' }}></div>
        <h2>제목: {title}</h2>
        <hr />
        <p>담당자: {people}</p>
        <p>진행 상태: {status}</p>
        <p>마감 일자: {date.substring(0, 10)} {date.substring(11,13)}시 {date.substring(14)}분</p>
        <hr />
        <p>{content}</p>
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
`
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
`
