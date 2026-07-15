const Cart = require("./Cart");
const Dashboard = require("./Dashboard");
const Login = require("./Login");
const Summary = require("./Summary");
const Userdetails = require("./Userdetails");

class Pomanager{
    constructor(page){
        this.page=page;
        this.login=new Login(page);
        this.dashboard=new Dashboard(page);
        this.cart=new Cart(page);
        this.user=new Userdetails(page);
        this.summary=new Summary(page);

    }
    getLogin(){
        return this.login;
    }
    getDashboard(){
        return this.dashboard;
    }
    getCart(){
        return this.cart;
    }
    getUser(){
        return this.user;
    }
    getSummary(){
        return this.summary;
    }
}
module.exports=Pomanager;