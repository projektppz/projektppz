import React from 'react';
import styled from 'styled-components';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { setFlex } from '../../styles/functions';
import { colors } from '../../styles/colors';

const Wrapper = styled.div`
  ${setFlex()};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .container{
  width: 500px;
  height: 500px;
  //border: 1px solid ${colors.orange};
  border-radius: 5px;
  ${setFlex('column')};
  justify-content: space-between;
  align-items: center;
  textarea{
    width: 99%;
    height: 60%;
  }
  }
  input {
    width: 99%;
  }
`;

export const AddAdvertisementPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Input placeholder="Wpisz tytuł" />
        <textarea placeholder="Wpisz treść ogłoszenia"/>
        <Button><span>Dodaj</span></Button>
      </div>
    </Wrapper>
  );
};
