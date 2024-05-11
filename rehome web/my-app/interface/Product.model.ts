export class Product {
  constructor(
    public _id:any=null,
    public productId:string="",
    public productName:string="",
    public productOptionType:string="",
    public price:number,
    public description:string="",
    public imageUrl:string="",) {}
}
