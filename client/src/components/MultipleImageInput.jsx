import ImageInput from './ImageInput';

const MultipleImageInput = (props) => {
  //console.log(props);

  const handleImageAddition = () => {
    props.onImagesChange([...props.images, '']);
  };

  return (
    <>
      {props.images.map((image, index) => {
        return (
          <ImageInput
            key={image}
            image={image}
            handleChange={(url) => {
              // let currentImage = props.images.find((_, current) => current === index)
              let imagesList = [];
              if (props.images.length > 0) {

                imagesList = props.images.map((image, currentImage) => {
                  if (currentImage === index) {
                    return url;
                  } else {
                    return image
                  }
                })

              } else {
                imagesList[index] = url
              }
              props.onImagesChange(imagesList)
              // props.onImagesChange(
              //   props.images.map((image, existingImagesIndex) =>
              //     existingImagesIndex === index ? url : image
              //   )
              // );
            }}
          />
        );
      })}
      <button onClick={handleImageAddition} type="button"> + </button>
    </>
  )
}

export default MultipleImageInput;
