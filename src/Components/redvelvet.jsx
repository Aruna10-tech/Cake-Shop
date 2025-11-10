import { Link } from "react-router-dom";

const galleryItems = [
  {
    img: "https://www.fnp.com/images/pr/l/v20250204190018/red-velvet-fresh-cream-cake-with-heart-shaped-topper_1.jpg",
    title: "REDVELVET CAKE",
    description: "ITS A SINGLE TIER CAKE\n\nCOST OF 1/2 KG: 1200\nCOST OF 1 KG: 2466",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcWUIrdlJwame9bElV9JnAE_K8mMWLCPxCA&s",
    title: "REDVELVET TWO LAYER",
    description: "TWO LAYER REDVELVET CAKE\n\nCOST OF 1/2 KG: 2299\nCOST OF 1 KG: 3599",
  },
  {
    img: "https://www.errenskitchen.com/wp-content/uploads/2020/10/red-velvet-cupcakes-1-3.jpg",
    title: "REDVELVET CUPCAKES",
    description: "MINI REDVELVET CUPCAKES\n\nCOST OF 10pcs: 599\nCOST OF ONE BOX 25pcs: 899",
  },
  {
    img: "https://www.playpartyplan.com/wp-content/uploads/2023/02/red-velvet-cake-balls-12.jpg",
    title: "REDVELVET CAKE BALLS",
    description: "SMALL VELVET CAKES BALLS\n\nCOST OF 8 PCS: 400\nCOST OF 10pcs: 600",
  },
];

export default function Redvelvet() {
  return (
    <div className="page-container">
      <h1 className="page-title">REDVELVET GALLERY!!!</h1>
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
