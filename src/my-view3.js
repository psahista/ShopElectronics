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

class MyView3 extends PolymerElement {
  constructor() {
    super();
  }


  ready() {
    super.ready();
    this.camera = [
      {id: 1, name: 'Camera', price: '43,000.00', description: 'Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case', url: '../images/cam1.jpg'},
      {id: 2, name: 'Camera', price: '38,000.00', description: 'Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case', url: '../images/cam2.jpg'},
      {id: 3, name: 'Camera', price: '50,000.00', description: 'Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case', url: '../images/cam3.jpg'},
      {id: 4, name: 'Camera', price: '28,000.00', description: 'Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case', url: '../images/cam4.jpg'},
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
    <template is="dom-repeat" items="{{camera}}">
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

window.customElements.define('my-view3', MyView3);
