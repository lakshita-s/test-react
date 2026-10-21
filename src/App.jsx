import { useState } from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";
import { shuffle } from "./utils/shuffle";

function App() {
  const startingImages = [
    { id: 1, src: "images/photo1.jpg", title: "what" },
    { id: 2, src: "images/photo2.jpg", title: "does" },
    { id: 3, src: "images/photo4.jpg", title: "this" },
    { id: 4, src: "images/photo3.jpg", title: "mean" },
  ];

  const [images, setImages] = useState(startingImages);

  return (
    <>
      <button onClick={() => setImages(shuffle(images))}>shuffle</button>
      <div className="board">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </>
  );
}

export default App;
