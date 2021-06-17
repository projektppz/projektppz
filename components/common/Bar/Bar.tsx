import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { setFlex } from '../../../styles/functions';
import { colors } from '../../../styles/colors';

interface Props {
  title: string;
  content: string;
  date: string;
}

const Wrapper = styled.div`
  height: 100px;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
  margin: 20px 10px;
  background-color: ${colors.pink};
  ${setFlex()};
  align-items: center;
  .img{
    margin-left: 20px;
  }
  .body{
    margin-left: 20px;
    p{
      margin: 7px;
    }
  }
`;

const picture = { src: '/default.jpg', alt: 'picture', width: 80, height: 80 };

export const Bar = ({ title, content, date }: Props) => {
  return (
    <Wrapper>
      <div className="img"><Image {...picture} /></div>
      <div className="body">
        <p>{title}</p>
        <p>{content.slice(0, 100)}...</p>
        <p>{date}</p>
      </div>
    </Wrapper>
  );
};
