export default class Products{
    constructor(id,name, description, price, img, type, brand, techInfo, sales){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.img = img
        this.sales = sales
        this.type = type
        this.brand = brand
        this.techInfo = techInfo
    }
    incrementSold() {
        this.sales = this.sales + 1
    }
}