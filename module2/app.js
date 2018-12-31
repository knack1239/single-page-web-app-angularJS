(function() {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$injection = ['ShoppingListCheckOffService']

  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuyList = this;

    ToBuyList.items = ShoppingListCheckOffService.ToBuy();

    ToBuyList.MoveItem = function(itemIndex) {
      ShoppingListCheckOffService.MoveItem(itemIndex);
    };
  }


  AlreadyBoughtController.$injection = ['ShoppingListCheckOffService']

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var BoughtList = this;

    BoughtList.items = ShoppingListCheckOffService.Bought();

  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var ItemsToBuy = [{
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "pistachio",
        quantity: "10"
      }
    ];

    var ItemsBought = [];

    service.MoveItem = function(itemIdex) {
      ItemsBought.push(ItemsToBuy[itemIdex]);
      ItemsToBuy.splice(itemIdex, 1);
    };

    service.ToBuy = function() {
      // console.log(ItemsToBuy);
      return ItemsToBuy;
    };

    service.Bought = function() {
      // console.log(ItemsBought);
      return ItemsBought;
    };
  }

})();
