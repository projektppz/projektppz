import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { getCurrentUser } from '../../services/auth.service';
import { colors } from '../../styles/colors';
import { centerText, setFlex } from '../../styles/functions';
import { NextLink } from '../common/NextLink';

const Wrapper = styled.header`
  .baner {
    height: 80px;
    //background-color: ${colors.red};
  }
  .menu {
    ${setFlex('column')}
    height: 80px;
    border-bottom: 1px solid ${colors.orange};
    .menuItem {
      flex: 1;
      height: 100%;
      ${centerText(80)};
      background-color: ${colors.white};
      color: ${colors.orange};
      cursor: pointer;
      transition: 0.5s all;
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

const data = [
  { title: 'Strona Główna', href: '/' },
  { title: 'Ogłoszenia', href: '/ogloszenia' },
  { title: 'Wiadomości', href: '/wiadomosci' },
];

export const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  console.log(currentUser)
  return (
    <Wrapper>
      <div className="baner">
        <Image src="/baner.png" alt="baner" height={80} width={180} />
      </div>
      <div className="menu">
        {data.map(({ title, href }) => (
          <NextLink href={href} key={title}>
            <div className="menuItem">{title}</div>
          </NextLink>
        ))}
        {currentUser ? (
          <div className="menuItem">Wyloguj</div>
        ) : (
          <NextLink href="/login">
            <div className="menuItem">Login</div>
          </NextLink>
        )}
      </div>
    </Wrapper>
  );
};
