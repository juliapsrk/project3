import styled from 'styled-components';
import petHeroImage from '../images/pets-hero.png';

const HomeWrapper = styled.div`
  .hero {
    overflow: hidden;
    width: 100%;
    margin-block-start: 1rem;
    background-image: url(${petHeroImage});
    background-size: cover;
    aspect-ratio: 1/1;
    background-position: top center;
    max-height: 400px;
  }  
  /* PET CARD Hompage */

  .grid-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
    grid-auto-rows: auto;
    gap: 4rem;
    margin: 3rem auto;
    //justify-content: center;
    

    .grid-list:nth-of-type(1) {
      margin-bottom: 100px;
    }
    .grid-item {
      // max-width: 300px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      position: relative;
      transition: all 0.3s;

      &:hover {
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
      }
    }

    .item-photo {
      img {
        border-radius: 5px 5px 0 0;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: top;
      }
    }
    .item-info {
      padding: 1rem 1rem 0 1rem;
      display: flex;
      flex-direction: column;
      min-height: 250px;

      h5 {
        font-size: 1.38rem;
        margin: 0;
        padding: 0;
        font-weight: 600;
      }
      h5 + p {
        text-transform: capitalize;
      }
      p {
        font-size: 0.94rem;
        font-weight: 600;
      }
      p + p {
        font-size: 0.84rem;
        font-weight: 400;
        align-self: flex-end;
        padding-right: 10px;
      }
      p.post-date {
        position: absolute;
        bottom: 0;
      }
    }
  }
`;
export default HomeWrapper;
