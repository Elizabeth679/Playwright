class Summary{
    constructor(page){
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
module.exports=Summary;