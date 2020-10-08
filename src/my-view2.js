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
      {id: 1, name: 'Washing Machine', price: '8,000.00', description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm2.jpg'},
      {id: 2, name: 'Washing Machine', price: '9,000.00', description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm4.jpg'},
      {id: 3, name: 'Washing Machine', price: '10,000.00', description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm2.jpg'},
      {id: 4, name: 'Washing Machine', price: '15,000.00', description: 'Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine', url: '../images/wm4.jpg'},
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
      <div style="padding: 20px;">
    <div class="row">
    <template is="dom-repeat" items="{{washingmachine}}">
        <div class="col-lg-3 col-md-3 col-sm-6 col-sx-12">
            <div class="card" style="margin-top: 5%;">
                <img class="card-img-top img-size" src="{{item.url}}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title item-name">{{item.name}}</h5>
                  <p style="margin:0px; color: #B12704; font-weight: bold;">{{item.price}}/-</p>
                  <p class="card-text card-desc" title="{{item.description}}">
                  {{item.description}}</p>
                  <a href="#" class="btn btn-primary">Description</a>
                </div>
            </div>
            </div>
            </template>
      </div>
  </div>
    `;
  }
}
window.customElements.define('my-view2', MyView2);