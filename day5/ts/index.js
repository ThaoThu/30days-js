"use strict";
// let add = (a:number, b?:number) => a+b!
// console.log( add(1));
exports.__esModule = true;
var classImplementInterface_1 = require("./classImplementInterface");
// export class Employee{
//  public name : string
//   private age:number
//   readonly male: boolean
//   constructor(n:string, a:number, m:boolean){
//     this.name = n
//     this.age = a
//     this.male = m
//   }
// console.log(Thao.print());
// constructor(public name : string, private age :number, readonly male : false){}
//   print(){
//     return `${this.name}, ${this.age}, ${this.male}`
//   }
// }
// const Thao = new Employee('thao',3,false)
// const Thao1 = new Employee('thao',3,false)
// let employees : Employee[]= []
// employees.push(Thao)
// employees.push(Thao1)
// employees.forEach(element => {
//   console.log(element.print());
// });
// interface Person {
//   name : string
//   age : number
//   speak (lang:string) : void
//   spend(amount:number) : number
// }
// const Thao:Person = {
//   name : 'Thao Thu',
//   age : 22,
//   speak(txt:string):void{
//     console.log(txt);
//   } ,
//   spend(num:number):number{
//     return num
//   } 
// }
// export interface hasPrint {
//   print():string
// }
var documentOne = new classImplementInterface_1.Invoice('Thao', 'cry', 4000);
var documentTwo = new classImplementInterface_1.Payment('Thu', 'buy', 4000);
// const aTup :[string, boolean, number] = ['Thao', false, 54]
// aTup[0]='78774'
// console.log(aTup);
var numberArray = [4, 5, 6];
var last = function (arr) {
    return arr[arr.length - 1];
};
console.log(last(['4', '4', '3']));
var lastT = function (arr) { return arr[arr.length - 1]; };
var l1 = lastT([1, 2, 3, 4, 'g']);
var l2 = lastT(['f', 'g', 's']);
console.log("🚀 ~ file: index.ts ~ line 80 ~ l", l1, l2);
// let array : Array<T>
var makeArr = function (a, b) {
    return [a, b];
};
