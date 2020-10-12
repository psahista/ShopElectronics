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

class MyDetails extends PolymerElement {

    
    
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
        .leftItem {
          color: green;
          font-weight: 600;
          font-size: 22px;
        }
        .desc-headings {
          font-weight: 600;
          font-size: 20px;
        }
      </style>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <app-location route="{{route}}"></app-location>
      <div style="padding: 20px;">
      
      <div class="card">
      <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <img src="{{data.url}}" style="width: 80%">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
      <div style="margin-top: 10%;"><span class="desc-headings">Name: </span><span>{{data.name}}</span></div>
      <div><span class="desc-headings">Description: </span><span>{{data.description}} </span></div>
      <div><span class="desc-headings">Price: </span><span> {{data.price}} /-</span></div>
      <div class="leftItem">{{data.left}}</div>
      </div>
      </div>
    </div>
    
  </div>
    `;
  }
  static get properties() {
    return {
      data:{
        type:[],
        notify:true,
        value:"",
        observer:""
      },
    }
} 
 
}

window.customElements.define('my-details', MyDetails);
