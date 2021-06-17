import React, { useState } from 'react';
import styled from 'styled-components';
import { register } from '../../services/auth.service';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { setFlex } from '../../styles/functions';

const Wrapper = styled.div`
  form {
    ${setFlex('column')};
    align-items: center;
  }

  input {
    width: 250px;
    margin: 20px 0;
  }
`;

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState({ name: '', surname: '' });
  const [phone, setPhone] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeUsername = (e: { target: { value: string; }; }) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e: { target: { value: string; }; }) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e: { target: { value: string; }; }) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeName = (e: { target: { value: any; }; }) => {
    const name = e.target.value;
    setName({ ...name, name });
  };

  const onChangeSurname = (e: { target: { value: any; }; }) => {
    const surname = e.target.value;
    setName({ ...name, surname });
  };

  const onChangePhone = (e: { target: { value: any; }; }) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handleRegister = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    register(username, password, name.name, name.surname, email, phone).then(
      response => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      error => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      },
    );
  };

  return (
    <Wrapper>
      <form onSubmit={handleRegister}>
        {!successful ? (
          <>
            <Input placeholder="Username" value={username} onChange={onChangeUsername} />
            <Input placeholder="Imie" value={name.name} onChange={onChangeName} />
            <Input placeholder="Nazwisko" value={name.surname} onChange={onChangeSurname} />
            <Input placeholder="email" value={email} onChange={onChangeEmail} />
            <Input placeholder="telefon" type="tel" value={phone} onChange={onChangePhone} />
            <Input placeholder="hasło" type="password" value={password} onChange={onChangePassword} />
            <Button type="submit">
              <span>Załóż konto</span>
            </Button>
          </>
        ):<div>Zarejestrowano pomyślnie</div>}
      </form>
      {message}
    </Wrapper>
  );
};
