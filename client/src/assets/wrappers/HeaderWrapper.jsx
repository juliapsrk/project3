import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  border-top: 5px var(--color-crimson) solid;
  justify-content: center;
  position: relative;

  .logo {
    margin-right: auto;
    flex: 1;
  }

  nav {
    flex: 2;
    display: flex;
    color: var(--color-crimson);
    gap: 2rem;
    font-size: 1.2rem;

    a {
      border-bottom: 1px transparent solid;
      transition: all 0.3s linear;

      &:hover,
      &.active {
        border-bottom: 1px var(--color-crimson) solid;
      }
    }

    .auth-links {
      margin-left: auto;
      display: flex;     
      gap: 1.1rem;
      align-items: center;

      a {
        color: var(--color-text);
        font-size: 1.1rem;
        font-weight: 600;

        &:hover,
        &.active {
          border-bottom: 1px var(--color-text) solid;
        }
      }
    }
    .user-menu {
      position: absolute;
      top:0;
      right:0;
      background: crimson;
      padding: 0.4rem 2rem;
      border-bottom-left-radius: 4px;
      display: flex;
      gap: 2rem;

      a {
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        display: block;

      }
    }
    button {
      border:none;
      background: crimson;
      padding:0.5rem 0.8rem;
      border-radius: 4px;
      margin: 0;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 600;
      display: block;
      cursor: pointer;
      -webkit-appearance: none;
    -moz-appearance: none;
    }
  }
`;
export default HeaderWrapper;
