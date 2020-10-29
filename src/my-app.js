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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 20px 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 36px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 60px;
          font-size: 20px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
        .total-item {
          left: 30px;
          bottom: 40px;
          position: absolute;
          color: black;
          font-weight: 700;
          background-color: #fff;
          border-radius: 50%;
          width: 27px;
          text-align: center;
        }
       
      </style>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
=      <app-location route="{{route}}"  data="{{routeData}}" >
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <template is="dom-if" if="{{showSideNavBar}}">
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Electronics</app-toolbar>
         
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="[[rootPath]]view1">Refrigarator</a>
            <a name="view2" href="[[rootPath]]view2">Washing Machine</a>
            <a name="view3" href="[[rootPath]]view3">Camera</a>
            <a name="view4" href="[[rootPath]]view4">Head Phone</a>
            <a name="view5" href="[[rootPath]]view5">Television</a>
            <a name="view6" href="[[rootPath]]view6">Laptop</a>
            <a name="payment" href="[[rootPath]]payment">Payment</a>
          </iron-selector>
        </app-drawer>
        </template>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="" >

        <template is="dom-if" if="{{showSideNav}}">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">
              Hello {{name}}, Welcome Back!!! 
              </div>
            </app-toolbar>
            <app-toolbar style="float: right">
            <span style="cursor: pointer; margin-right: 25px;" on-click="redirectCart">
            <span class="total-item">{{count}}</span>
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              </span>
          <span style="cursor: pointer" on-click="logOut">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
                </span>
  </app-toolbar>
          </app-header>
          </template>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1" count={{count}}></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-view4 name="view4"></my-view4>
            <my-view5 name="view5"></my-view5>
            <my-view6 name="view6"></my-view6>
            <my-login name="login"></my-login>
            <my-payment name="payment"></my-payment>
            <payment-submit name="submit"></payment-submit>
            <my-details name="details" data={{detailsVar}}></my-details>
            <total-amount name="amount" data = {{tempTotal}}></total-amount>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      showSideNav:{
        type: Boolean,
        value: true
      } ,
      showSideNavBar: {
        type: Boolean,
        value: true
      },
      count: {
        type: Number,
        value: JSON.parse(localStorage.getItem("count")),
      },
      tempTotal: {
        type: Array,
        value: JSON.parse(localStorage.getItem("itemArr")),
      },
      name: {
        type: String,
        value: ''
      }
    };
  }
  


  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  redirectCart(){
    this.set('route.path', '/amount');
  }
  
  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'login' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'login';
    } else if (['view1', 'view2', 'view3','view4', 'view5', 'view6','login','details','amount','payment','submit'].indexOf(page) !== -1) {
      this.page = page;
      this.name = localStorage.getItem("name");
    }
    else {
      this.page = 'view404';
    }
    // making sideNav and NavBar false for login
    if(this.page == 'login'){
      this.showSideNav = false;
      this.showSideNavBar = false;
    }
    else {
      this.showSideNav = true;
      this.showSideNavBar = true;
    }
    // getting details
    if(this.page == 'details'){
      this.detailsVar = JSON.parse(localStorage.getItem("details"));
    }
    // getting total selected array
    if(this.page == 'amount'){
    this.tempTotal = localStorage.getItem("itemArr")?JSON.parse(localStorage.getItem("itemArr")):[];
    }

    // Close a non-persistent drawer when the page & route are changed.
    // if (!this.$.drawer.persistent) {
    //   this.$.drawer.close();
    // }
    var drawer = this.shadowRoot.getElementById('drawer');
    if (drawer&& drawer.persistent) {
      drawer.open();
    }

  }
  logOut() {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    this.set('route.path','/login');
  }
  _pageChanged(page) {
   
    // Import the page component on demand.
    // statement, so break it up.
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
        case 'view4':
        import('./my-view4.js');
        break;
        case 'view5':
        import('./my-view5.js');
        break;
        case 'view6':
        import('./my-view6.js');
        break;
        case 'login':
        import('./my-login.js');
        break;
        case 'details':
        import('./my-details.js');
        break;
        case 'amount':
        import('./total-amount.js');
        break;
        case 'payment':
        import('./my-payment.js');
        break;
        case 'submit':
        import('./payment-submit.js');
        break;
        case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('my-app', MyApp);
