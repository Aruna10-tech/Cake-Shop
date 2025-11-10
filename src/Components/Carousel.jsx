import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "https://www.amytreasure.com/wp-content/uploads/2020/09/Black-Forest-Gateaux-1200-x-1200-735x735.jpg",
    "https://assets.winni.in/product/primary/2024/3/94578.jpeg?dpr=2&w=220",
    "https://static.wixstatic.com/media/60d245_610a5a709508412fa4b82eafab2f0f1f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "https://flowersugar.com/cdn/shop/products/Salted-Caramel-Chocolate-Cake-1_750x.jpg?v=1653233992"
  ];

  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true
  };

  return (
    <div className="carousel-container" style={{width:"550px",height:"500px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="carousel-image"
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "15px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
