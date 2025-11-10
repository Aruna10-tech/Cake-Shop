import { useSelector } from "react-redux";
export default function AboutUs() {
  
  const submittedData = useSelector((state) => state.user.message);
  return (
    <div className="page-container">
      <div className="card" style={{ maxWidth: "800px", padding: "40px", margin: "30px auto" }}>
         <h1 className="page-title">About Us</h1>
         <p>Welcome to our bakery! We are passionate about creating delicious, handcrafted cakes and desserts that bring joy to every occasion.</p>
          <h2>Why Choose Us?</h2>
        <ul style={{ textAlign: "left", margin: "20px auto", maxWidth: "600px", textAlign:'center',listStyle:'none' }}>
          <li>Fresh, locally sourced ingredients</li>
          <li>Custom designs for any event</li>
          <li>Fast and reliable delivery</li>
         <li>Exceptional customer reviews</li>
         </ul>
        {submittedData && (

        <ul >

          {
            submittedData.map((data, index) => (
               <li style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px",listStyle:"none" }}>
          <h2>Submitted Order Details:</h2>
          <p><strong>Customer Name:</strong> {data.customerName}</p>
          <p><strong>Phone Number:</strong> {data.phoneNumber}</p>
          <p><strong>Date of Birth:</strong> {data.dob}</p>
          <p><strong>Cake Shape:</strong> {data.shape}</p>
          <p><strong>Message on the Cake:</strong> {data.message}</p>
        </li>
            ))
          }

        </ul>
        
      )}
      </div>
    </div>
  );
}
