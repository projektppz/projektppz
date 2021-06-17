import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { login } from '../../services/auth.service';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { NextLink } from '../common/NextLink';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
  ${setFlex('column')};
  .inputs {
    ${setFlex('column')};
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    input {
      width: 200px;
      margin: 15px 0;
    }
  }
  .btns {
    ${setFlex()};
    justify-content: center;
    button {
      width: 200px;
      margin-left: 15px;
    }
  }
`;

export const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e: { target: { value: any; }; }) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e: { target: { value: any; }; }) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    login(username, password).then(
      () => {
        router.push('/');
        // window.location.reload();
      },
      error => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        setMessage(resMessage);
      },
    );
  };
  return (
    <Wrapper>
      <div className="inputs">
        <Input placeholder="login" value={username} onChange={onChangeUsername} />
        <Input placeholder="hasło" type="password" value={password} onChange={onChangePassword} />
      </div>
      <div className="btns">
        <Button>
          <NextLink href="/rejestracja">
            <span>Nie masz konta?</span>
          </NextLink>
        </Button>
        <button onClick={handleLogin}>
          <span>Zaloguj</span>
        </button>
      </div>
      {message && <div>Błędny login lub hasło</div>}
    </Wrapper>
  );
};
