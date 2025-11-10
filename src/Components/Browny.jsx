import { Link } from "react-router-dom";

const galleryItems = [
  {
    img: "https://liliyum.com/cdn/shop/products/Birthdaycakebrownies_800x.jpg?v=1630921524",
    title: "BROWNY CAKE",
    description: "ITS A SINGLE TIER CAKE\n\nCOST OF 1/2 KG: 900\nCOST OF 1 KG: 1800",
  },
  {
    img: "https://dy9wzeeht8myy.cloudfront.net/images/catalog/flowers/CH471-350x350.jpg",
    title: "BROWNY DOUBLE LAYER",
    description: "DOUBLE LAYER BROWNY CAKE\n\nCOST OF 1/2 KG: 1400\nCOST OF 1 KG: 2599",
  },
  {
    img: "https://thegirlinspired.com/wp-content/uploads/2024/12/brownie-cupcakes-recipe-card-300x300.jpg",
    title: "BROWNY CUPCAKES",
    description: "MINI BROWNY CUPCAKES\n\nCOST OF 10pcs: 300\nCOST OF ONE BOX 25pcs: 700",
  },
  {
    img: "https://www.themerchantbaker.com/wp-content/uploads/2020/03/Irish-Cream-Cheesecake-Brownies.jpg",
    title: "CHESSECAKE BROWNIES",
    description: "CHESSEYYY BROWNY LAYERS\n\nCOST OF 4 PCS: 200\nCOST OF 10pcs: 500",
  },
];

export default function Browny() {
  return (
    <div className="page-container">
      <h1 className="page-title">BROWNY GALLERY!!!</h1>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div key={index} className="card gallery-item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
            <Link to="/Submit" className="btn-primary" style={{ marginTop: "10px" }}>
              ADD TO CART
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


