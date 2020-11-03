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

class MyView6 extends PolymerElement {

  constructor() {
    super();
  }


  ready() {
    super.ready();
    this.laptop = [
      {id: 21, name: 'Laptop', price: 49000.00, description: 'Lenovo V14 Intel Core i3 10th Gen 14-inch HD Thin and Light Laptop (4GB RAM/ 1TB HDD/ DOS/ Grey/ 1.6 kg), 82C4016RIH', url: '../images/laptops.jpg', left: 'Only 2 left!!'},
      {id: 22, name: 'Laptop', price: 59000.00, description: 'Lenovo V14 Intel Core i3 10th Gen 14-inch HD Thin and Light Laptop (4GB RAM/ 1TB HDD/ DOS/ Grey/ 1.6 kg), 82C4016RIH', url: '../images/laptops.jpg', left: 'Only 1 left!!'},
      {id: 23, name: 'Laptop', price: 60000.00, description: 'Lenovo V14 Intel Core i3 10th Gen 14-inch HD Thin and Light Laptop (4GB RAM/ 1TB HDD/ DOS/ Grey/ 1.6 kg), 82C4016RIH', url: '../images/laptops.jpg', left: 'Only 4 left!!'},
      {id: 24, name: 'Laptop', price: 45000.00, description: 'Lenovo V14 Intel Core i3 10th Gen 14-inch HD Thin and Light Laptop (4GB RAM/ 1TB HDD/ DOS/ Grey/ 1.6 kg), 82C4016RIH', url: '../images/laptops.jpg', left: 'Only 3 left!!'},
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
      <div class = "mdl-grid">
      <template is="dom-repeat" items="{{laptop}}">
               <div class = "mdl-cell mdl-cell--3-col">
               <div class="card" style="margin-top: 5%;">
               <img class="card-img-top img-size" src="{{item.url}}" style="cursor: pointer" on-click="description" alt="Card image cap">
               <div class="card-body">
                 <h5 class="card-title item-name">{{item.name}}</h5>
                 <p style="margin:0px; color: #B12704; font-weight: bold;">{{item.price}}/-</p>
                 <p class="card-text card-desc" title="{{item.description}}">
                 {{item.description}}</p>
                 <a href="#" class="btn btn-primary">Add</a>
               </div>
           </div>
               </div>
               
               </template>
            </div>
    
  </div>
    `;
  }
  description(event){
    console.log(event.model.item.id);
    localStorage.setItem("details", JSON.stringify(event.model.item));
    this.set('route.path','details');
  }
}

window.customElements.define('my-view6', MyView6);
