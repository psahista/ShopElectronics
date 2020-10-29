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
import '@polymer/app-route/app-route.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
class PaymentSubmit extends PolymerElement {

    
    
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }

    
  .circle-border-left{
      position:absolute;
      height:2rem;
      width:2rem;
      background-color:#eeeeee;
      border-radius: 50%;
      margin-left: -16px;
  
  }
  .circle-border-right{
      position:absolute;
      height:2rem;
      width:2rem;
      background-color:#eeeeee;
      border-radius:50%;
      border-radius: 50%;
      margin-right: -16px;
      right:0;
  
  }
        .submit-main {
     position:relative;
        margin-top: 20px;
        border: 1px solid #b5b1b9;
        background-color: #fff;
        border-style:solid solid dashed solid;
        text-align: center;
        padding: 20px 0px;
        }
        .submit-heading {
        font-size: 20px;
        font-weight: 600;
        color: #6c757d;
        }
        .submit-sub-heading {
        font-size: 14px;
        }
        .circle-submit{
            border-radius: 50%;
            text-align: center;
            color: #fff;
            font-weight: 600;
            background-color: #f9bf47;
            padding: 15px 18px;
        }
        .submit-second {
         border: 1px solid #b5b1b9;
        background-color: #fff;
        border-style: none solid solid solid;
        padding-bottom: 20px;
        }
        .heading-name{
            font-size: 18px;
            color: #000;
            font-weight: 600; 
            position: absolute;
            left: 23%;
            bottom: 55%;
          }
          .sub-heading-name {
            left: 23%;
            position: absolute;
            top: 42%;
            font-size: 14px;
            color: #000;
          }
          .payment-amount{
            font-size: 20px;
            font-weight: 600;
            color: #000;
          }
          .date-value {
            font-size: 17px;
            font-weight: 600;
            color: #000;
          }
          .priority {
            background-color: #c5c2c7;
            padding: 10px;
            border-radius: 25px;
          }
          .check-bg{
            padding: 10px 10px 5px 10px;
            background-color: #4de64d;
            border-radius: 50%;
            color: #fff;
            position: absolute;
            bottom: 70%;
          }
          .first-dot{
            padding: 10px 10px 5px 10px;
            background-color: #4de64d;
            border-radius: 50%;
            position: absolute;
            margin-left: 15px;
            padding: 6px;
            bottom: 55%;
          }
          .second-dot {
            padding: 10px 10px 5px 10px;
            background-color: #c5c2c7;
            border-radius: 50%;
            position: absolute;
            margin-left: 35px;
            padding: 6px;
            bottom: 55%;
          }
          .clock {
            position: absolute;
            padding: 5px 5px 0px 5px;
            background-color: #bac;
            left: 94px;
            border-radius: 50%;
          }
          .warning {
              color: red;
          }
      </style>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <app-location route="{{route}}"></app-location>
     <div class="submit-main">
     <div style="margin-right: 10%;">
     <span class="check-bg">
     <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>
<span>
<span class="first-dot"></span>
<span class="second-dot"></span>
<span class="clock">
<svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
  <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>
</span>
     </div>
     <div style="padding-top: 20px;">
     <span class="submit-heading">Submitted</span><br>
     <span class="submit-sub-heading">Your request is submitted and awaits approval</span>
     </div>
     <div class="circle-border-left"></div>
     <div class="circle-border-right"></div>
     </div>
    <div class="submit-second">
     <div class="row" style="padding: 20px 40px">
     <div class="col-lg-4 col-md-4 col-sm-4">
     <span class="circle-submit">
        S
     </span>
     <span class="heading-name">Star Tmt Steel</span>
  <br>
  <span class="sub-heading-name">8767</span>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4" style="text-align: center;">
     <span class="payment-amount">$2500.00</span><br>
     <span style="font-size: 12px;">Domestic payment</span>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4" style="text-align: center;">
     <span class="date-value">07 Oct 2017</span><br>
     <span style="font-size: 12px;">Scheduled on</span>
     </div>
     </div>
     <div class="row" style="padding: 20px 20px 0px 20px">
     <div class="col-lg-4 col-md-4 col-sm-4">
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4">
    <span style="padding: 0px 30px;"> 
    <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
</svg></span>
<span style="padding: 0px 30px;">
<svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
</svg>
</span>
     <span style="padding: 0px 30px;">
     <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-printer" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 2H5a1 1 0 0 0-1 1v2H3V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h-1V3a1 1 0 0 0-1-1zm3 4H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v1H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/>
  <path fill-rule="evenodd" d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM5 8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5z"/>
  <path d="M3 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg>
     </span>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4">
     </div>
     </div>
     <div class="row">
     <div class="col-lg-4 col-md-4 col-sm-4">
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4">
     <span style="padding: 0px 20px;font-size: 12px;">download</span>
     <span style="padding: 0px 30px;font-size: 12px;">share</span>
     <span style="padding: 0px 25px;font-size: 12px;">print</span>
     </div>
     <div class="col-lg-4 col-md-4 col-sm-4">
     </div>
     </div>
    </div>
    <div style="text-align: center; padding: 20px">
    <span class="priority">
    <span class="warning">
    <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-exclamation-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>
    </span>
    Your transaction has been put for processing high priority<span>
    </div>

    `;
  }
  
}

window.customElements.define('payment-submit', PaymentSubmit);
