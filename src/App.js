
import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

export default function App() {
  const images = [
    {
      original: "images/image1.jpg",
      thumbnail: '/images/image1.jpg', 
      description: '2/5/2023'
    },
    {
      original: "images/image2.jpg",
      thumbnail: '/images/image2.jpg', 
      description: '2/6/2023'
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];
  // Custom renderer for the currently displayed image
  const [currentDescription, setCurrentDescription] = useState(images[0].description);

  return (
    <div className="App">
      <h1 className="image-description-header">{currentDescription}</h1>

      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={5000}
        showIndex={true}
        onSlide={(index) => setCurrentDescription(images[index].description || "")} // Update description on slide change
        renderItem={(item) => (
          <div className="gallery-slide">
            <img src={item.original} alt={item.description || "Gallery Image"} />
          </div>
        )}
      />
    </div>
    );
}