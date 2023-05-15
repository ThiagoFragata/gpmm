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
  h2 {
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
`;
