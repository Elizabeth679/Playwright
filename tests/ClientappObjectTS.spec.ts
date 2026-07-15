import {test,expect} from "@playwright/test";
import { Pomanager } from "../page_objects_ts/Pomanger";
import { customtest } from "../Utils/test-baseTS";

//const { test,expect } = require("@playwright/test");
//const Login = require("../page_objects/Login");
//const Dashboard = require("../page_objects/Dashboard");
//const Userdetails = require("../page_objects/Userdetails");
//const Summary = require("../page_objects/Summary");
//const Cart = require("../page_objects/Cart");
//const Pomanager = require("../page_objects/Pomanger");
//const { customtest } = require("../Utils/test-base");
//to get data from json file utils folder
const testdata=JSON.parse(JSON.stringify(require('../Utils/placeordertestdata.json')));

for (const data of testdata){
test(`automation of shopping cart web application using page object model for ${data.product}`,async({page})=>{
    let pomanager=new Pomanager(page);
    let login=pomanager.getLogin();
    //let login= new Login(page);
    await login.goto();
    //await login.validLogin("standard_user","secret_sauce");
     await login.validLogin(data.username,data.password);
   
     let dashboard=pomanager.getDashboard();
   // let dashboard= new Dashboard(page);
    //await dashboard.selectProduct("Sauce Labs Backpack");
    await dashboard.selectProduct(data.product);
    await dashboard.movetoCart();
    
    let cart=pomanager.getCart();
    //let cart= new Cart(page);ait cart.verifyProduct();
    await cart.checkout();
    
    let user=pomanager.getUser();
    //let user=new Userdetails(page);
    await user.shippingDetails("Eliza","Thomas","123456");
    await user.submitDetails();
    let summary=pomanager.getSummary();
    // let summary=new Summary(page);
    await summary.verifySummary();
    await summary.clickFinish();
    await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
    await page.pause();
})
}
/*customtest.only('page playwright customised test',async({page,testDataForOrder})=>{
    let pomanager=new Pomanager(page);
    let login=pomanager.getLogin();
    await login.goto();
     await login.validLogin(testDataForOrder.username,testDataForOrder.password);
   
     let dashboard=pomanager.getDashboard();
    await dashboard.selectProduct(testDataForOrder.product);
    await dashboard.movetoCart(); 
   
    let cart=pomanager.getCart();
    await cart.verifyProduct();
    await cart.checkout();
    await page.pause();
})
    */
