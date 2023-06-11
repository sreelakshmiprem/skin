import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Home() {
const navigate = useNavigate();

const goToAddPage = () => {
navigate("/additem");
};

return (
<div
style={{
backgroundImage: "url('https://img.freepik.com/free-photo/macadamia-body-lotion-skin-cream_1150-42810.jpg?w=900&t=st=1686430292~exp=1686430892~hmac=47d118bc5d126d9564feac53bf73262f7cc114ee83f08b8e7857269c8c5c8ddf')",
backgroundSize: "cover",
backgroundPosition: "center",
minHeight: "100vh",
}}
>
<Container className="text-center " >
<h1 className="display-3 text-center" style={{ fontSize: "6rem" ,color:"black "}}><br/><br/><strong>Skin Enchant</strong></h1>
<p className="lead text-center " style={{ marginTop: "50px", color:"black" }}>
Herbal and natural skin products are formulated with plant-based ingredients, offering gentle and nourishing skincare without harsh chemicals. They promote healthier skin, harness the power of natural compounds, and often prioritize sustainability and eco-friendly practices, making them a popular choice for conscious consumers.
</p>
<p>Join on this venture by </p>
<div className="mt-4">

</div>
<div class="p-2 "><Link to="/login"><Button variant="outline-dark">Login</Button></Link></div>
</Container>
</div>
);
}
