import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Cart } from "./Cart";
import { Userdetails } from "./Userdetails";
import { Summary } from "./Summary";

//const Cart = require("./Cart");
//const Dashboard = require("./Dashboard");
//const Login = require("./Login");
//const Summary = require("./Summary");
//const Userdetails = require("./Userdetails");

export class Pomanager{
    page:Page;
    login:Login;
    dashboard:Dashboard;
    cart:Cart;
    user:Userdetails;
    summary:Summary;


    constructor(page:Page){
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
//module.exports=Pomanager;