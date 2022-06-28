import styled from 'styled-components';
import petHeroImage from '../images/pets-hero.png';

const Wrapper = styled.div`

.hero {
  overflow: hidden;
  width: 100vw;
  background-image: url(${petHeroImage});
  background-size: cover;
  aspect-ratio: 2/4;
    background-position: top center;
    max-height: 615px;
}

`
export default Wrapper;