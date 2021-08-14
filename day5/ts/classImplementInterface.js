"use strict";
exports.__esModule = true;
exports.Payment = exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        return this.client + " owes " + this.work + " " + this.amount + " ";
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var Payment = /** @class */ (function () {
    function Payment(reciever, job, amt) {
        this.reciever = reciever;
        this.job = job;
        this.amt = amt;
    }
    Payment.prototype.print = function () {
        return this.reciever + " pays " + this.job + " " + this.amt + " ";
    };
    return Payment;
}());
exports.Payment = Payment;
