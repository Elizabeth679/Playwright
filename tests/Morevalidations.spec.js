const { test,expect } = require("@playwright/test");

test('popup validations',async({page})=>{
await page.goto("https://www.saucedemo.com");
await expect(page.locator('h3[data-test="error"]')).toBeHidden();
await page.locator('#login-button').click();
await expect(page.locator('h3[data-test="error"]')).toBeVisible();
await page.goto("https://selenium.qabible.in/index.php");
await page.locator('#alert-modal').click();
await page.locator("//a[normalize-space()='Javascript Alert']").click();
/*page.on('dialog',async dialog=>{
    await page.waitForTimeout(3000)
    await dialog.accept();  // Ok button
})
    
await page.locator('.btn.btn-warning').click();
*/
page.on('dialog',async dialog=>{
    await page.waitForTimeout(3000)
    await dialog.dismiss();// cancel button
})
await page.locator('.btn.btn-warning').click();

await page.locator('#others').hover();
await page.goto("https://demoqa.com/frames");
const framepage= page.frameLocator('#frame1');
console.log(await framepage.locator('#sampleHeading').textContent());
await page.pause();
})

test('screenshots',async({page})=>{
    await page.goto("https://www.saucedemo.com");
    await expect(page.locator('.error-message-container.error')).toBeHidden();
    await page.locator('#login-button').click();
    await page.locator('.error-message-container.error').screenshot({path:"error.png"});
    await expect(page.locator(".error-message-container.error")).toBeVisible();
    await page.screenshot({path:"error1.png"});
    await page.pause();

})
test.only('visual comparison',async({page})=>{
    await page.goto("https://www.saucedemo.com");
   expect(await page.screenshot()).toMatchSnapshot("saucedemo.png");

})
