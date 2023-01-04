import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Kanvanboard from '../components/Kanvanboard';
import KanvanForm from '../components/KanvanForm';

export default function CanvanMain() {
  const data = useSelector((state) => { return state.issue });

  return (<>
    <KanvanForm />
    <StContaier>
      <Kanvanboard id='issue' issue={ data.issue } />
      <Kanvanboard id='inProgress' issue={ data.inProgress }/>
      <Kanvanboard id='completed' issue={ data.completed }/>
    </StContaier>
  </>);
}

const StContaier = styled.main`
    padding: 30px;
    padding-top: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;