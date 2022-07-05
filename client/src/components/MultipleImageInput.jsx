import ImageInput from './ImageInput';
// import './MultipleImageInput.scss';

const MultipleImageInput = (props) => (
  <>
    <div className="multiple-image-list">
      {props.images.map((image, index) => (
        <div key={image} className="multiple-image-item">
          <img src={image} alt={`#${index}`} />
          <button
            type="button"
            onClick={() =>
              props.onChange(props.images.filter((_, i) => i === index))
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
    <ImageInput
      handleChange={(url) => props.onChange([...props.images, url])}
    />
  </>
);

export default MultipleImageInput;
