import styled from 'styled-components';

const CardWrapper = styled.div`
display: flex;
padding: 1rem 2rem;
align-items: center;
gap: 4rem;

.picture {
  border-radius: 50%;

  img {
    max-height: 150px;
    border-radius: 50%;
    aspect-ratio: 2/2;
    object-fit: cover;
  }
}
.content {
  font-size: 1rem;

  h3 {
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
  }
  p {
    padding-block-end: 1rem;
    margin: 0;
  }
}
.buttons {
  display: flex;
  gap: 1rem;

  .btn {
    display: block;
    border:none;
    color:#fff;
    font-size: 0.9rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: var(--color-crimson);
    cursor: pointer;

    &.brown {
      background-color: var(--color-text);
    }
  }
}
`
export default CardWrapper;