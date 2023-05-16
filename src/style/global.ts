import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  div,
  p,
  section,
  ul,
  li,
  a,
  aside,
  body,
  main,
  h1,
  h2,
  h3 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    width: fit-content;
  }

  html {
    scroll-behavior: smooth;
  }

  input{
    outline: 1px solid transparent;
  }

  .size__action {
    width: 5%;
    display: flex;
    justify-content: center;
  }
  .container__form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .childrens__form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    flex: 1;
  }
  .form__buttons {
    display: flex;
    align-items: center;    
    justify-content: flex-end;
    column-gap: 16px;
    margin-top: auto;
  }
`;
