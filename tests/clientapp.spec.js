const { test,expect } = require("@playwright/test");

test('clientapp login',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".inventory_item_name").first().waitFor();
    const titles= await page.locator(".inventory_item_name").allTextContents();
    console.log(titles);
    const products= await page.locator('.inventory_item');
    const productname= "Sauce Labs Backpack";
    const count= await products.count();
    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator(".inventory_item_name").textContent()===productname)
        {
            await products.nth(i).locator("text= Add to cart").click();
            break;
        }
    }
await page.locator('#shopping_cart_container').click();
await page.locator('.inventory_item_name').waitFor();
await expect(page.locator('.inventory_item_name')).toHaveText("Sauce Labs Backpack");
await page.locator('#checkout').click();
await page.locator('#first-name').fill("Elizabeth");
await page.locator('#last-name').fill("Thomas");
await page.locator('#postal-code').fill("L2J 3R1");
await page.locator('#continue').click();
await page.locator('.summary_info').waitFor();
await expect(page.locator('.summary_subtotal_label')).toHaveText("Item total: $29.99");
await expect(page.locator('.summary_subtotal_label')).toContainText("Item total");
await page.locator('#finish').click();
await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
    //await page.pause();
})
