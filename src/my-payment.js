/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import './shared-styles.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';

class Payment extends PolymerElement {

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      .topleft {
        position: absolute;
      }
      .card {
          padding: 20px 10px 10px 10px;
          margin: 10px;
      }
      .circle{
          border-radius: 50%;
          text-align: center;
          color: #fff;
          font-weight: 600;
          background-color: #f9bf47;
      }
      .profile-div {
        left: 10px;
      }
      .heading-name{
        font-size: 18px;
        color: #000;
        font-weight: 600; 
        position: absolute;
        top: 12%;
        left: 18%;
      }
      .sub-heading-name {
        left: 18%;
        position: absolute;
        top: 55%;
        font-size: 14px;
        color: #000;
      }
      .account{
        text-align: right;
        top: 40px;
        color: #4285f4;
        font-weight: 600;
      }
      .last-transac {
        color: #000;
        font-size: 14px;
      }
      .amount{
        font-size: 20px;
        font-weight: 600;
        color: #000;
      }
      .date{
        font-size: 17px;
        font-weight: 600;
        color: #000;
      }
      .repeat {
        text-align: right;
        top: 10px;
        color: #4285f4;
        font-weight: 600;
      }
      .shedule-payment {
        font-size: 18px;
        color: #656363;
        font-weight: 600;
      }
      .btn-payment{
        border: 1px solid #848282;
        background-color: transparent;
        padding: 5px 10px;
        border-radius: 25px;
        font-size: 15px;
        margin-right: 10px;
      }
      button:focus {
        outline:none !important;
        background-color: #34d9d2 !important;
        color: #fff !important;
        border: transparent;
      }
      button:active {
        background-color: #34d9d2 !important;
        color: #fff !important;
      }
      .balance {
        font-size: 12px;
        color: #000;
        font-weight: 600;
      }
      .bottom-btn {
        border: 0px;
        background-color: transparent;
        padding: 5px 10px;
        font-size: 15px;
        margin-right: 10px;
        color: #dc3545;
        font-weight: 600;
      }
      .bottom-btn:focus{
        background-color: #dc3545 !important;
        color: #fff !important;
      }
     
      </style>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <app-location route="{{route}}"></app-location>
      
<div class="card">
  <img src="../images/bg-nav.jpg" alt="nav-bar" style="height: 100px;" >
  <div class="row topleft" style="width: 100%;">
  <div class="col-lg-6 col-md-6 profile-div">
  <span class="circle">
  S
  </span>
  <span class="heading-name">Star Tmt Steel</span>
  <br>
  <span class="sub-heading-name">9098</span>
  </div>
  <div class="col-lg-6 col-md-6 account">
  CHANGE ACCOUNT
  </div>
  </div>
  <div class="row" style="padding-top: 15px;">
  <div class="col-lg-3 col-md-3">
  <span class="last-transac">Last</span><br>
  <span class="last-transac">transaction</span>
  </div>
  <div class="col-lg-3 col-md-3">
  <span class="amount">$500.00</span><br>
  <span style="font-size: 14px;">Materials Purchased</span>
  </div>
  <div class="col-lg-3 col-md-3">
  <span class="date">07 Oct 2017</span><br>
  <span style="font-size: 14px;">Transaction Date</span>
  </div>
  <div class="col-lg-3 col-md-3 repeat">
  <span>REPEAT</span>
  </div>
  </div>
</div>
<div class="card">
<div class="row">
<div class="col-lg-5 col-md-5">
<paper-input label="Amount"></paper-input>
<paper-input label="Remarks"></paper-input>
<div>
<paper-input label="From"></paper-input>
<span style="font-size: 12px">Available Balance</span>
<span class="balance">$55,000.00</span>
</div>
</div>
<div class="col-lg-2 col-md-2"></div>
<div class="col-lg-5 col-md-5">
<span class="shedule-payment">Schedule this payment</span>
<span><paper-toggle-button style="display: inline !important;margin-left: 35% !important;" checked></paper-toggle-button></span>
<div style="margin-top: 2%;">
<button class="btn-payment active">Once</button>
<button class="btn-payment">Monthly</button>
<button class="btn-payment">Quarterly</button>
<button class="btn-payment">Yearly</button>
</div>
<paper-input label="Start date"></paper-input>
<paper-input label="Number of occurances"></paper-input>
</div>
</div>
</div> 
<div style="margin-left: 44%">
<button class="bottom-btn">BACK</button>
<button class="bottom-btn" on-click="proceed">PROCEED</button>
</div> 
    `;
  }
  proceed() {
    this.set('route.path', '/submit');
  }
}

window.customElements.define('my-payment', Payment);
