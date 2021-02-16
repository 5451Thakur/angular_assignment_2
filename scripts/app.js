(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items_to_buy = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex)
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this
    bought.items_bought = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var to_buy = [{ name: "Apples", quantity: "2" },
                  { name: "Bananas", quantity: "4" },
                  { name: "Pineapples", quantity: "6" },
                  { name: "Strawberries", quantity: "8" },
                  { name: "Mangos", quantity: "10" },
                  { name: "Oranges", quantity: "12" },
                  { name: "Pears", quantity: "14" } ]

    var bought = [];

    service.buyItem = function(itemIndex) {
     bought.push(to_buy[itemIndex])
     to_buy.splice(itemIndex, 1)
    }
    service.getItemsBought = function(){
      return bought;
    }
    service.getItemsToBuy = function() {
    return to_buy;
    }

  }

}());
