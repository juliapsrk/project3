import styled from 'styled-components';

const PetDetailPage = styled.div`
  .pet-detail {
    display: flex;
    margin: 1rem 0 5rem 0;

    .pet-info {
      flex-basis: 80%;

      p {
        max-width: 700px;
        font-size: 1rem;
      }
    }
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    h5 {
      font-size: 1rem;
      text-transform: capitalize;
      margin: 0;

      font-weight: 600;
    }

    .pet-buttons {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .page-btn {
      background: #d90000;
      border: none;
      display: block;
      color: #fff;
      border-radius: 4px;
      padding: 0.25rem 1rem;
      text-align: center;
      line-height: inherit;
      cursor: pointer;
    }
    .post-date {
      text-align: right;
    }
    .post-date + p {
      margin: 0;
    }
  }

  .bookmark {
    background-color: transparent;
    border: none;
    font-size: 1.7rem;
    align-self: center;
  }

  .top {
    display: flex;
    flex-direction: row;
  }

  .bookmarks {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* PROFILE Detail */
`;

export default PetDetailPage;
