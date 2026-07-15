import { Locator, Page } from "@playwright/test";

export class Dashboard{
    page:Page;
    producttest:Locator;
    product:Locator;
    cart:Locator;

    constructor(page:Page){
        this.page=page; 
        this.producttest= page.locator(".inventory_item_name");
        this.product= page.locator('.inventory_item');
        this.cart= page.locator('#shopping_cart_container');
    }
    async selectProduct(productname:string){
        await this.page.waitForLoadState('networkidle');
    await this.producttest.first().waitFor();
    const titles= await this.producttest.allTextContents();
    console.log(titles);
    //const products= await page.locator('.inventory_item');
    //const productname= "Sauce Labs Backpack";
    const count= await this.product.count();
    for(let i=0;i<count;i++)
    {
        if(await this.product.nth(i).locator(".inventory_item_name").textContent()===productname)
        {
            await this.product.nth(i).locator("text= Add to cart").click();
            break;
        }
    }
    }
    async movetoCart(){
        await this.cart.click();

    }
}
//module.exports= Dashboard;