import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  /* background: linear-gradient(-90deg, #7159c1, #ab59c1); */
  background: #ee4d64;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;

  padding: 25px;
  width: 360px;
  height: 448px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 0px10px rgba(0, 0, 0, 0.2);

  img {
    margin: 30px 0 10px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-align: left;
      margin-bottom: 8px;
      font-weight: bold;
    }

    input {
      border: solid 1px #dddddd;
      background: #ffffff;

      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      /*  background: #3b9eff; */
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
    }
  }
`;
