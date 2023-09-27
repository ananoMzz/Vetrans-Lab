import "./Gallery.css";
import hand from "../images/hand.jpg";
import vetran from "../images/zuriko.png";
import me from "../images/myImg.png";
import photo from "../images/photographer.png";
const Galllery = (props) => {
  return (
    <div className="gallery-border">
      <div className="image-div">
        <img src={props.images[0]}></img>
      </div>
      <div className="image-div">
        <img src={props.images[1]}></img>
      </div>
      <div className="image-div">
        <img src={props.images[2]}></img>
      </div>
      <div className="image-div">
        <img src={props.images[3]}></img>
      </div>
      <div className="switch-page">
        <button
          className="btn prev-btn"
          onClick={() => {
            props.onPageSwitch(-1);
          }}
        >
          ←
        </button>
        <p>Page {props.CurrentPage + 1}</p>
        <button
          className="btn next-btn"
          onClick={() => {
            props.onPageSwitch(1);
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Galllery;
