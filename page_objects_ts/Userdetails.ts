import { Locator, Page } from "@playwright/test";

export class Userdetails{
    page:Page;
    firstname:Locator;
    lastname:Locator;
    pincode:Locator;
    submit:Locator;
    constructor(page:Page){
        this.page=page;
        this.firstname=page.locator('#first-name');
        this.lastname=page.locator('#last-name');
        this.pincode=page.locator('#postal-code');
        this.submit=page.locator('#continue');

    }
    async shippingDetails(fname:string,lname:string,pin:string){
     await this.firstname.fill(fname);
     await this.lastname.fill(lname);
     await this.pincode.fill(pin);
    }
    async submitDetails(){
     await this.submit.click();
    }
}
//module.exports=Userdetails;