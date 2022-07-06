import styled from 'styled-components';

const ProfileWrapper = styled.div`
  
  
  /* PROFILE */
  .profile-page {
    display: flex;
    gap: 4rem;

    .bold {
      font-weight: 600;
    }

    .profile-photo img {
      max-width: 150px;
      border-radius: 50%;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
    h2 {
      font-size:1.5rem;
      font-weight: 500;
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 500;
      text-transform: uppercase;
      border-bottom: 1px solid gray;
      margin-top: 4rem;
    }
    p {
      font-size: 0.94rem;
    }
    .flex-spa {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }    
  }
`;
export default ProfileWrapper;
