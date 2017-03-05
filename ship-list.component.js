'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('shippartApp').
  component('shipList', {
      templateUrl:'./templates/ship-list.template.html',
    // template:
        // '<ul>' +
        //   '<li ng-repeat="shippart in $ctrl.shipparts">' +
        //     '<span>{{shippart.name}}</span>' +
        //     '<p>{{shippart.snippet}}</p>' +
        //   '</li>' +
        // '</ul>',
    controller: function PhoneListController() {
      this.shipparts = [
        {
          name: 'Main Weapon',
          snippet: '6*16 inch long-range Cannon.',
          duration:'300-500 Rounds'
        }, {
          name: 'Sub Weapon',
          snippet: '8*6 inch Med-range Cannon.',
          duration:'1000-1500 Rounds'
        }, {
          name: 'Anti-Air Weapon',
          snippet: '12*3 inch Anti-Air Gun.',
          duration:'5000-15000 Rounds'
        }
      ];
    }
  });
