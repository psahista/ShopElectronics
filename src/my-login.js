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
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-toast/paper-toast.js';


class MyLogin extends PolymerElement {


  constructor() {
    super();
  }


  ready() {
    super.ready();
    localStorage.setItem("userName", 'admin');
    localStorage.setItem("password", 'admin');
    
  }
  

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .bg {
            height: 100%; 
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            width: 100%;
          }
          .login{
              position: absolute;
              width: 100%;
              top: 100px;
          }
          .login-heading {
              position: absolute;
              top: 50px;
              width: 86%;
              margin-left: 7%;
          }
          .heading{
            font-size: 40px;
            color: #716161;
            font-family: "Times New Roman";
            text-align: center;
          }
          .main {
              background-color: #fff;
              box-shadow: 5px 10px 5px 5px #0a0e11;
          }
          .login-subHeading{
              font-size: 36px;
              text-align: center;
              font-family: Arial;
              padding: 15px 0 0 0;
          }
          .credentials {
              padding: 0px 25px 10px 20px;
          }
          .custom-btn {
              padding: 10px 65px !important;
              border-radius: 0px !important;
              margin-left: 18%;
              margin-bottom: 2%;
          }
          .row {
            margin-right: 0px !important; 
            margin-left: 0px !important;
        }
        .error {
          margin-left: 15%;
          color: #dd2c00;
        }
      </style>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <app-location route="{{route}}"></app-location>
      
      <img class="bg" src="../images/bg_img.jpg">
      <div class="login">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
             <div class="login-heading">
              <h1 class="heading">Welcome to Hype Enterprise</h1>
              <div class="main">
                <h2 class="login-subHeading">Login</h2>
                <hr>
                <template is="dom-if" if="{{show}}">
                <div class="error">Wrong UserName or Password</div>
                </template>
                <div class="credentials">
                
                  <form>
                  <paper-input label="UserName" value="{{valueName}}" required auto-validate error-message="UserName is required!"></paper-input>
                  <paper-input label="Password" value="{{valuePassword}}" required auto-validate error-message="Password is required!"></paper-input>
                
                  <button class="btn btn-primary custom-btn" on-click="handleClick">LOGIN</button>
                  </form>
                  
               
                </div>
              </div>
               </div>
               </div>
               <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              </div>
          </div>  
      </div>
      
    `;
  }
  static get properties() {
    return {
      show:{
        type: Boolean,
        value:false
      }
    }
  }
  handleClick(){
    if(this.valueName == localStorage.getItem("userName") && this.valuePassword == localStorage.getItem("password")){
    this.set('route.path', '/view1');
    }
    else {
      this.show = true;
    }
  }
}

window.customElements.define('my-login', MyLogin);
