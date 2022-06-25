import styled from 'styled-components';

const Wrapper = styled.section`
display: grid;
align-items: center;
justify-content: center;
form {
  max-width: 400px;
  border-top: 5px solid crimson;
  padding-top: 50px;

  a {

    color: crimson;
  }
  

  input, textarea, select {
    width: 100%;
    padding: 0.8rem 0.25rem;
    border:1px solid gray;
    border-radius: 3px;
  }

  label {
    text-transform: capitalize;
  }
}
`
export default Wrapper;