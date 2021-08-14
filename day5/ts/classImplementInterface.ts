import {hasPrint} from './interfaceForClass'

export class Invoice implements hasPrint {
  constructor(  readonly client : string,
    private work   :string,
    public amount :number){  }
  print(){
    return `${this.client} owes ${this.work} ${this.amount} `
  }
}

export class Payment implements hasPrint{
  constructor(  readonly reciever : string,
    private job   :string,
    public amt :number){  }
  print(){
    return `${this.reciever} pays ${this.job} ${this.amt} `
  }

}