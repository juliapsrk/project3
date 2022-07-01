import styled from 'styled-components';
import petHeroImage from '../images/pets-hero.png';

const Wrapper = styled.div`

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

`
export default Wrapper;