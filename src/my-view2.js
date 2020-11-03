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

class MyView2 extends PolymerElement {
  constructor() {
    super();
  }


  ready() {
    super.ready();
    this.washingmachine = [
      {id: 5, name: 'Washing Machine', price: 8000.00, description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm2.jpg', left: 'Only 2 left!!'},
      {id: 6, name: 'Washing Machine', price: 9000.00, description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm4.jpg', left: 'Only 1 left!!'},
      {id: 7, name: 'Washing Machine', price: 10000.00, description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm2.jpg', left: 'Only 4 left!!'},
      {id: 8, name: 'Washing Machine', price: 15000.00, description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm4.jpg', left: 'Only 3 left!!'},
  ];
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .card {
          margin: 0px !important;
        }
      .card-desc{
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
      .item-name {
          font-size: 20px;
      }
      </style>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel = "stylesheet" 
      href = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.indigo-pink.min.css">
   <script src = "https://storage.googleapis.com/code.getmdl.io/1.0.6/material.min.js">
   </script>
      <app-location route="{{route}}"></app-location>
      <div style="padding: 20px;">
    <div class="mdl-grid">
    <template is="dom-repeat" items="{{washingmachine}}">
        <div class="mdl-cell mdl-cell--3-col">
            <div class="card" style="margin-top: 5%;">
                <img class="card-img-top img-size" style="cursor: pointer" src="{{item.url}}" on-click="description" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title item-name">{{item.name}}</h5>
                  <p style="margin:0px; color: #B12704; font-weight: bold;">{{item.price}}/-</p>
                  <p class="card-text card-desc" title="{{item.description}}">
                  {{item.description}}</p>
                  <a class="btn btn-primary" style="color: #fff">Add</a>
                </div>
            </div>
            </div>
            </template>
      </div>
  </div>
    `;
  }
  static get properties() {
    return {
      count:{
        type:Number,
        notify:true,
        value:0,
      },
      itemArray: {
        type : Array,
        notify:true,
        value: localStorage.getItem("itemArr")?JSON.parse(localStorage.getItem("itemArr")):[],
      },
    }
} 
  description(event){
    console.log(event.model.item.id);
    localStorage.setItem("details", JSON.stringify(event.model.item));
    this.set('route.path','details');
}
add(event){
  debugger
  console.log(event.model.item);
  console.log(this.itemArray);
  this.count = this.count+1;
  localStorage.setItem("count", JSON.stringify(this.count));
  this.itemArray.push(event.model.item);
  localStorage.setItem('itemArr',  JSON.stringify(this.itemArray));
}
}
window.customElements.define('my-view2', MyView2);
