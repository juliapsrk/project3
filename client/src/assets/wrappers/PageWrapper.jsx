import styled from 'styled-components';

const Wrapper = styled.main`
  .page-wrapper {
    margin: 2rem auto;
    max-width: 1200px;
    padding: 1rem 2rem;
  }
  .title {
    font-size: 1.65rem;
    color: var(--color-crimson);
    font-weight: 600;
  }
  .slogan {
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 400;

    span {
      display: block;
    }
      }
`;
export default Wrapper;
