
import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const images = [
    {
      original: "images/image1.png",
      thumbnail: '/images/image1.png', 
      description: 'Image 1 Description'
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];
  // Custom renderer for the currently displayed image
  const renderItem = (item) => {
    return (
      <div className="custom-image-container">
        <img src={item.original} alt={item.description || "Gallery Image"} />
        {item.description && <p className="image-description">{item.description}</p>}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Welcome to My Photo Gallery</h1>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={5000}
        showIndex={true}
        renderItem={renderItem} // Use custom renderer
      />
    </div>
  );

}
