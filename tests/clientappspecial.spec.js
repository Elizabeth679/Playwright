const { test,expect } = require("@playwright/test");

test('clientapp login using special locators',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'Login'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".inventory_item_name").first().waitFor();
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
await expect(page.getByText("Sauce Labs Backpack"));
await page.getByRole("button",{name:'Checkout'}).click();
await page.getByPlaceholder("First Name").fill("Elizabeth");
await page.getByPlaceholder("Last Name").fill("Thomas");
await page.getByPlaceholder("Zip/Postal Code").fill("L2J 3R1");
await page.getByRole("button",{name:'Continue'}).click();
await page.locator('.summary_info').waitFor();
await expect(page.getByText("Item total: $29.99"));
await expect(page.getByText("Item total"));
await page.getByRole("button",{name:'Finish'}).click();
await expect(page.getByText("Thank you for your order!"));
    await page.pause();
})
