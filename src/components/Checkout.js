import React from "react";
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useState } from "react";
import './../styles/Checkout.scss';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const Checkout = () => {
     const state = useSelector((state) => state.addItems);
     const [value, setValue] = useState();
     var total = 0;
     const itemList = (item) => {
          total = total + item.price;
          return (

               <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                         <h6 className="my-0">{item.title}</h6>
                    </div>
                    <span className="text-muted">${item.price}</span>
               </li>
          );
     }
     return (
          <>
               <div className="container mt-5 checkout">
                    <div className="row mt-10">
                         <h2>Checkout</h2>

                    </div>
                    <hr />
                    <div className="row">
                         <div className="col-md-4 order-md-2 mb-4">
                              <h4 className="d-flex justify-content-between align-items-center mb-3">
                                   <span className="text-muted">Your cart</span>
                                   <Badge className="badge badge-secondary badge-pill">

                                        {state.length}
                                   </Badge>

                              </h4>
                              <ul className="list-group mb-3">
                                   {state.map(itemList)}

                                   <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>${total}</strong>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-md-8 order-md-1">
                              <h4 className="mb-3">Billing address</h4>
                              <Formik
                                   initialValues={{
                                        Address: '',
                                        email: '',
                                        PhoneNumber: ''
                                   }}
                                   validationSchema={Yup.object().shape({
                                        Address: Yup.string()
                                             .required('Address is required'),
                                        email: Yup.string()
                                             .email('Email is invalid')
                                             .required('Email is required'),
                                        PhoneNumber: Yup.string()
                                             .min(6, 'Password must be at least 6 characters')
                                             .required('Password is required')
                                   })}
                                   onSubmit={fields => {
                                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                                   }}
                                   render={({ errors, status, touched }) => (
                                        <Form>
                                             <div className="form-group row">
                                                  <div className="col-md-3"> <label htmlFor="Address">Address *</label></div>
                                                  <div className="col-md-9">  <Field name="Address" type="text" className={'form-control' + (errors.Address && touched.Address ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="Address" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                                  <div className="col-md-3">
                                                       <label htmlFor="email">Email *</label>
                                                  </div>
                                                  <div className="col-md-9">
                                                       <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} /></div>
                                                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                             </div>
                                             <div className="form-group row">
                                             <div className="col-md-3">
                                                     <label htmlFor="confirmPassword"> PhoneNumber</label>
                                                     </div>
                                                  <div className="col-md-9">   <PhoneInput
                                                       placeholder="Enter phone number"
                                                       value={value}
                                                       onChange={setValue} />
                                                       <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                                  </div>
                                             </div>
                                             <div className="form-group mt-5">
                                                  <button type="submit" className="btn btn-primary mr-2">Submit Form</button>
                                                  <button type="reset" className="btn btn-secondary">Reset</button>
                                             </div>
                                        </Form>
                                   )}
                              />
                              {/* <form className="needs-validation" novalidate="">
                                   <div className="mb-3">
                                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                        <div className="invalid-feedback">
                                             Please enter a valid email address for shipping updates.
                                        </div>
                                   </div>

                                   <div className="mb-3">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                        <div className="invalid-feedback">
                                             Please enter your shipping address.
                                        </div>
                                   </div>

                                   <div className="mb-3">
                                        <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                   </div>

                                   <div className="row">
                                        <div className="col-md-5 mb-3">
                                             <label htmlFor="country">Country</label>
                                             <select className="custom-select d-block w-100" id="country" required="">
                                                  <option value="">Choose...</option>
                                                  <option>United States</option>
                                             </select>
                                             <div className="invalid-feedback">
                                                  Please select a valid country.
                                             </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                             <label htmlFor="state">State</label>
                                             <select className="custom-select d-block w-100" id="state" required="">
                                                  <option value="">Choose...</option>
                                                  <option>California</option>
                                             </select>
                                             <div className="invalid-feedback">
                                                  Please provide a valid state.
                                             </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                             <label htmlFor="zip">Zip</label>
                                             <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                             <div className="invalid-feedback">
                                                  Zip code required.
                                             </div>
                                        </div>
                                   </div>
                                   <hr className="mb-4" />
                                   <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                              </form> */}
                         </div>
                    </div>
               </div>
          </>
     );
}
export default Checkout;