class Cart{
    constructor(page){
        this.page=page;
        this.item= page.locator('.inventory_item_name');
        this.check= page.locator('#checkout');
    }
    async verifyProduct(){
        await this.item.waitFor();
        console.log(await this.item.textContent());

    }
    async checkout(){
         await this.check.click();
    }
}
module.exports= Cart;