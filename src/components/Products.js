import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './../styles/Products.scss';
import CartBtn from "./CartBtn";
import { ReactDOM } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
const Products = () => {
     const { id } = useParams();
     const [Product, setProduct] = useState([]);
     const [filter, setFilter] = useState([Product]);
     useEffect(() => {
          const FetchData = async () => {
               const response = await fetch('https://fakestoreapi.com/products');
               setProduct(await response.json());
          }
          FetchData();
     }, [id])
     const Loading = () => {
          return (
               <div>
                    Loading Products....
               </div>
          )
     }

     const AllProduct = Product.map((productItem) => {

          return (
               <>
                    <div className="col-lg-4 col-md-4 card-info" key={productItem.id}>
                         <Link to={`/ProductDetails/${productItem.id}`}>
                              <Card className="Cards">
                                   <Card.Img variant="top" src={productItem.image} />
                                   <Card.Body>
                                        <Card.Title>{productItem.title.substring(0, 13)}</Card.Title>
                                        <p className="price">${productItem.price}</p>
                                        <NavLink to="/" className="btn btn-outline-primary">Add to Cart</NavLink>
                                   </Card.Body>
                              </Card>
                         </Link>
                    </div>
               </>
          )

     });


     return (
          <section className="Products">
               <div className="container">
                    <div className="row">
                         <h2 className="mt-5">Products</h2>
                         <hr />
                    </div>
                    <div className="row">
                         {AllProduct}
                    </div>
               </div>
          </section>

     )



};
export default Products;