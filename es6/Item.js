
class Item {

    constructor(itemId,itemName,ratePerUnit){

        this.itemId = itemId;
        this.itemName=itemName;
        this.ratePerUnit = ratePerUnit;
    }

    toString(){
        return this.itemName + this.ratePerUnit ;
    }
}

module.exports= Item;