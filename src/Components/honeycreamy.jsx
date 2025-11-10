import { Link } from "react-router-dom";

const galleryItems = [
  {
    img: "https://content.api.news/v3/images/bin/b1cef3243d02054c8ce4b7b38cabbf1e",
    title: "HONEYCAKE CAKE",
    description: "ITS A SINGLE TIER CAKE\n\nCOST OF 1/2 KG: 1400\nCOST OF 1 KG: 2799",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeA9M_H0POAZ05oWv7LeuqiBziHYzA2ueA56fMd0x6ILFQEdHzfVWvgzc6QIwT9JUEJw&usqp=CAU",
    title: "RUSSIAN HONEY CAKE",
    description: "RUSSIAN STYLE HONEYCAKE\n\nCOST OF 1/2 KG: 2000\nCOST OF 1 KG: 3899",
  },
  {
    img: "https://img.thecdn.in/330116/images-2024-11-28T095833627-1732768156464.jpeg?width=600&format=webp",
    title: "HONEY FRUIT CAKE",
    description: "HONEY WITH FRUITCAKE\n\nCOST OF 1/2 KG: 999\nCOST OF ONE BOX 25pcs: 1699",
  },
  {
    img: "https://bustleandsew.com/wp-content/uploads/Screenshot-16.png",
    title: "HONEY CUPCAKE",
    description: "HONEY CUPCAKES WITH FRUITS\n\nCOST OF 8 PCS: 400\nCOST OF 10pcs: 600",
  },
];

export default function Honeycreamy() {
  return (
    <div className="page-container">
      <h1 className="page-title">HONEYCAKE GALLERY!!!</h1>
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
