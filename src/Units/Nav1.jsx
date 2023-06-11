import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
export default function Nav1(){

return (
<div>
<nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">

<div class="d-flex justify-content-end">
<div class="p-2 "><Link to="/"><Button variant="outline-light">Home</Button></Link></div>
<div class="p-2 "><Link to="/Product"><Button variant="outline-light">Product</Button></Link></div>
<div class="p-2 "><Link to="/Checkout"><Button variant="outline-light">Checkout</Button></Link></div>
</div>
<div class="d-flex justify-content-between">
<h4 style={{textAlign:"center", color:"white"}} class='justify-content-center'>Skin Enchant</h4>
</div>
<img
src="https://img.myloview.es/vinilos/shopping-cart-icon-isolated-on-dark-background-700-250615199.jpg"
width="50"
height="50"
className="d-inline-block align-top"
alt="React Bootstrap logo"

/>
</nav>
</div>
);
};