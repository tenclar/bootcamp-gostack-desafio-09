import React from 'react';
import logo from '~/assets/logogym.svg';
// import { Container } from './styles';

export default function Signin() {
  return (
    <>
      <img src={logo} alt="GYMPOINT" />
      <form>
        <label htmlFor="email">SEU E-MAIL</label>
        <input
          id="email"
          name="email"
          type="mail"
          placeholder="Exemplo@email.com"
        />
        <label htmlFor="senha">SUA SENHA</label>
        <input id="senha" name="senha" type="password" placeholder=" ******" />
        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
