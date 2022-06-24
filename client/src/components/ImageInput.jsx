import { IKContext, IKUpload } from 'imagekitio-react';

const ImageInput = (props) => {

  const handleSuccess = (result) => {
    const { url } = result;
    props.handleChange(url);
  };

  const handleError = (error) => {
    console.log(error);
    props.handleChange('');
  };

  return (
    <>
      {props.image && (
        <img style={{ maxWidth: '20em' }} src={props.image} alt="Selected" />
      )}
      <IKContext
        publicKey="public_+pBjyiyzgSWxNPHRiOsBroVDZVU="
        urlEndpoint="https://ik.imagekit.io/b2qsdwrpl"
        transformationPosition="path"
        authenticationEndpoint="/authentication"
      >
        <IKUpload onSuccess={handleSuccess} onError={handleError} />
      </IKContext>
    </>
  );
};

export default ImageInput;


//In order to use the SDK, you need to provide it with a few configuration parameters. 
//The configuration parameters can be applied directly to the IKImage component or using 
//an IKContext component.

