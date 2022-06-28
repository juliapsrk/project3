import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  border-top: 5px var(--color-crimson) solid;
  justify-content: center;

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
    text-transform: capitalize;

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
      gap: 2rem;

      a {
        color: var(--color-text);

        &:hover,
        &.active {
          border-bottom: 1px var(--color-text) solid;
        }
      }
    }
  }
`;
export default Wrapper;
