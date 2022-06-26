import { IKContext, IKUpload } from 'imagekitio-react';

const ImageInput = (props) => {
  const { image, handleChange } = props;

  const handleSuccess = (result) => {
    //debugger
    const { url } = result;
    handleChange(url);
  };

  const handleError = (error) => {
    console.log(error)
    handleChange('');
  };

  return (
    <>
      {props.image && (
        <img style={{ maxWidth: '20em' }} src={image} alt="Selected" />
      )}
      <IKContext
        publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_API_KEY}
        authenticationEndpoint={process.env.REACT_APP_IMAGEKIT_AUTH_ENDPOINT}
        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT}
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