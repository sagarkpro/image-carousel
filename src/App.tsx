import React, { useState } from 'react';
import './app.css'

function App() {
  const images: string[] = [
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9d363b80_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0b192d26_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ad8ee37f_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ffbfdabe_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bd4ba53c_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/94917f61_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/04ffa7c6_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/088c5ccf_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bf9b4dbc_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/638caa77_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9195f2f4_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/f3f0b967_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0cabf5f7_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d1036b64_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d952c9ad_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/258f5741_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e8e9cdb6_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e5f72e6a_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e41c7196_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/7aca8bc3_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9d363b80_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0b192d26_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ad8ee37f_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/ffbfdabe_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bd4ba53c_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/94917f61_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/04ffa7c6_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/088c5ccf_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/bf9b4dbc_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/638caa77_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/aab5e333_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/9195f2f4_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/f3f0b967_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/0cabf5f7_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d1036b64_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/d952c9ad_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/258f5741_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e8e9cdb6_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e5f72e6a_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/e41c7196_z.jpg",
    "https://i.travelapi.com/lodging/74000000/73980000/73974400/73974370/7aca8bc3_z.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 3;

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const getTransform = () => {
    return `translateX(-${(currentIndex * 100) / visibleImagesCount}%)`;
  };
  return (
    <>
      <h1 style={{textAlign: 'center'}}>react</h1>
      <div className="carousel-container">
      <button onClick={previousImage}>
        <span className="material-icons"> {'<'} </span>
      </button>
      <div className="carousel-wrapper">
        <div className="carousel-images" style={{ transform: getTransform() }}>
          {
            images.map((image, index) => {
              return(
                <> 
                  {/* <img key={index} src={image} alt="Carousel" /> */}
                  <div className='image' style={{backgroundImage: `url(${image})`, height: '300px'}}>

                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <button onClick={nextImage}>
        <span className="material-icons">{'>'}</span>
      </button>
    </div>
    </>
  );
}

export default App;
