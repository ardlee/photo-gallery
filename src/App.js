
import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

export default function App() {
  const images = [
    {
      original: "images/2-5-23.jpg",
      thumbnail: 'images/2-5-23.jpg', 
      description: '2/5/2023'
    },
    {
      original: "images/2-6-23.jpg",
      thumbnail: 'images/2-6-23.jpg', 
      description: '2/6/2023'
    },
    {
      original: "images/3-4-23.jpg",
      thumbnail: "images/3-4-23.jpg",
      description: '3/4/23'
    },
    {
      original: "images/2-12-23.png",
      thumbnail: "images/2-12-23.png", 
      description: '2/12/202'
    },
    {
      original: "images/2-14-23.jpg",
      thumbnail: "images/2-14-23.jpg", 
      description: '2/14/2023'
    },
    {
      original: "images/3-5-23.jpg",
      thumbnail: "images/3-5-23.jpg", 
      description: '3/5/2023'
    },
    {
      original: "images/6-6-23.jpg",
      thumbnail: "images/6-6-23.jpg", 
      description: '6/6/2023'
    },
    { 
      original: "images/7-6-23.jpg",
      thumbnail: "images/7-6-23.jpg", 
      description: '7/6/2023'
    },
    {
      original: "images/8-6-23.jpg",
      thumbnail: "images/8-6-23.jpg", 
      description: '8/6/2023'
    },
    {
      original: "images/9-23-23.jpg",
      thumbnail: "images/9-23-23.jpg", 
      description: '9/23/2023'
    },
    {
      original: "images/10-21-23.jpg",
      thumbnail: "images/10-21-23.jpg", 
      description: '10/21/2023'
    },
    {
      original: "images/10-21-23-2.jpg",
      thumbnail: "images/10-21-23-2.jpg", 
      description: '10/21/2023'
    },
    {
      original: "images/12-30-23.jpg",
      thumbnail: "images/12-30-23.jpg", 
      description: '12/30/2023'
    },
    {
      original: "images/2-5-24.jpg",
      thumbnail: "images/2-5-24.jpg", 
      description: '2/5/2024'
    },
    {
      original: "images/4-1-24.jpg",
      thumbnail: "images/4-1-24.jpg", 
      description: '4/1/2024'
    },
    {
      original: "images/4-21-24.jpg",
      thumbnail: "images/4-21-24.jpg", 
      description: '4/21/2024'
    },
    {
      original: "images/5-17-24.jpg",
      thumbnail: "images/5-17-24.jpg", 
      description: '5/17/2024'
    },
    {
      original: "images/5-30-24.jpeg",
      thumbnail: "images/5-30-24.jpeg", 
      description: '5/30/2024'
    },
    {
      original: "images/6-8-24.jpg",
      thumbnail: "images/6-8-24.jpg", 
      description: '6/8/2023'
    },
    {
      original: "images/6-8-24-2.jpg",
      thumbnail: "images/6-8-24-2.jpg", 
      description: '6/8/2023'
    },
    {
      original: "images/10-25-24.jpg",
      thumbnail: "images/10-25-24.jpg", 
      description: '10/25/2024'
    },
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