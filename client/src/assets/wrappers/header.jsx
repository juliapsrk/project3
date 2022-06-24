import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background: crimson;
  padding: 1rem 2rem;
  gap: 4rem;

  button {
    border: 1px #fff solid;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    background: crimson;
    color: #fff;
    cursor: pointer;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    letter-spacing: 2px;

    a {
      display: flex;
      gap: 2rem;
      align-items: center;
      line-height: normal;
    }
    span {
      font-size: 0.9rem;
      margin-inline: 1rem;
      text-transform: capitalize;
    }

    svg {
      font-size: 3rem;
    }
  }
  nav {
    display: flex;
    color: #fff;
    gap: 1rem;
    align-items: center;
    text-transform: capitalize;
  }
`;
export default Wrapper;
