import { Locator, Page } from "@playwright/test";

export class Summary{
    page:Page;
    summaryinfo:Locator;
    itemtotal:Locator;
    finish:Locator;
    constructor(page:Page){
        this.page=page;
        this.summaryinfo= page.locator('.summary_info');
        this.itemtotal= page.locator('.summary_subtotal_label');
        this.finish= page.locator('#finish');
    }
    async verifySummary()
    {
        await this.summaryinfo.waitFor();
        console.log(await this.itemtotal.textContent());    
    }
    async clickFinish()
    {
        await this.finish.click();
    }

}
//module.exports=Summary;