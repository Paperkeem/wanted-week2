import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCalendarPlus } from 'react-icons/bs';
import KanvanWrite from './KanvanWrite';

export default function CanvanForm() {
  const [isform, setIsform] = useState(false);
  const handelClick = () => setIsform((prev)=>!prev);
  
  return (
    <StFormwrapper>
      <BsCalendarPlus
        onClick={handelClick}
        style={{ fontSize: "2rem", padding: "10px", cursor: "pointer" }} />
      {isform && <KanvanWrite setIsform={()=>setIsform()} />}
    </StFormwrapper>
  );
}

const StFormwrapper = styled.div` 
  padding: 30px;
`

