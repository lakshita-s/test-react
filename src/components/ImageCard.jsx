import { useState } from "react";
import "./ImageCard.css";

function ImageCard({ image }) {
  // liked = current value, setLiked = function to change it
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={image.src} alt={image.title} />
      <p>{image.title}</p>
      <button onClick={() => setLiked(!liked)}>{liked ? "♥" : "♡"}</button>
      <button></button>
    </div>
  );
}

export default ImageCard;
