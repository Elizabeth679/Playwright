const {test,expect} = require("@playwright/test");

test('first playwright test',async function(){

})

test('browser context playwright test',async({browser})=>{
    const context =await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://google.com");
    console.log(await page.title());
    await page.goto("http://www.saucedemo.com")
    await page.locator("#user-name").fill("standard_user1");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    console.log(await page.locator("h3[data-test='error']").textContent())
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service")
    await expect(page.locator("h3[data-test='error']")).toContainText("Epic sadface")
    const username=page.locator("#user-name");
    const login=page.locator("#login-button");
    const cardtitle=page.locator(".inventory_item_name")
    await username.fill("");
    await username.fill("standard_user");
    await login.click();
    console.log(await cardtitle.first().textContent());
    console.log(await cardtitle.nth(1).textContent());
    console.log(await cardtitle.last().textContent());
    console.log(await cardtitle.allTextContents());
    await page.pause();

})

test('page playwright test', async({page})=>{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")// assertion>>conditional check--> using the keyword "expect")
})

test('UI Controls',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php");
    await page.locator("//a[normalize-space()='Input Form']").click();
    await page.locator("//a[normalize-space()='Simple Form Demo']").click();
    await page.locator('#single-input-field').fill("Hello");
    await page.locator('#button-one').click();
    await expect(page.locator('#message-one')).toHaveText("Your Message : Hello");
    await page.locator("//a[normalize-space()='Checkbox Demo']").click();
    await page.locator('#gridCheck').check();
    console.log(await page.locator('#message-one').textContent());
    await expect(page.locator('#message-one')).toHaveText("Success - Check box is checked");
    await expect(page.locator('#gridCheck')).toBeChecked();// assertions
    expect(await page.locator('#gridCheck').isChecked()).toBeTruthy();// assertions
    
    await page.locator("//a[normalize-space()='Radio Buttons Demo']").click();
    await page.locator('#inlineRadio1').check();
    await page.locator('#button-one').click();
    await expect(page.locator('#message-one')).toHaveText("Radio button 'Male' is checked");
    await expect(page.locator('#inlineRadio1')).toBeChecked();
    expect(await page.locator('#inlineRadio1').isChecked()).toBeTruthy();
    
    await page.locator("//a[normalize-space()='Select Input']").click();
    await page.locator('#single-input-field').selectOption("Red");
    await expect(page.locator('#message-one')).toHaveText("Selected Color : Red");

    await page.locator("//a[normalize-space()='Form Submit']").click();
    await page.locator('#validationCustom01').fill("Elizabeth");
    await page.locator('#validationCustom02').fill("Thomas");
    await page.locator('#validationCustomUsername').fill("eliza");
    await page.locator('#validationCustom03').fill("Canada");
    await page.locator('#validationCustom04').fill("Toronto");
    await page.locator('#validationCustom05').fill("L2J 3R1");
    await page.locator('#invalidCheck').check();
    await page.locator("button[type='submit']").click();
    await expect(page.locator('#message-one')).toHaveText("Form has been submitted successfully!");
    await page.pause();
})

test('childwindow handling and multiple tabs',async({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("http://www.google.com");
const newPage= await Promise.all([context.waitForEvent('page'),
    page.evaluate(()=>window.open("https://github.com"))
]);// new tab
const newTab=await context.newPage();
await newTab.goto("http://www.saucedemo.com");// new tab
console.log("Child window and new tab opened successfully")
await page.pause();
})

test('codegen generated code',async({page})=>{
   
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('elizabeth');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('thomas');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('l2R 3j1');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
});
test.only('playwright special locators', async({page})=>{

    await page.goto("https://selenium.qabible.in/index.php");
    //await page.locator("//a[normalize-space()='Input Form']").click();
    await page.getByRole("link",{name:'Input Form'}).click();
    //await page.locator("//a[normalize-space()='Checkbox Demo']").click();
    await page.getByRole("link",{name:'Checkbox Demo'}).click();
    await page.getByLabel("Click on this check box").check();
    //await page.locator("//a[normalize-space()='Radio Buttons Demo']").click();
    await page.getByRole("link",{name:'Radio Buttons Demo'}).click();
    await page.getByLabel("45 to 60").check();
    //await page.locator("//a[normalize-space()='Select Input']").click();
    await page.getByRole("link",{name:'Select Input'}).click();
    await page.getByLabel("Select Color").selectOption("Red");
   // await page.locator("//a[normalize-space()='Form Submit']").click();
    await page.getByRole("link",{name:'Form Submit',exact: true}).click();
    await page.getByPlaceholder("First name").fill("Elizabeth");
    await page.getByPlaceholder("Last name").fill("Thomas");
    await page.getByPlaceholder("Username").fill("eliza");
    await page.getByPlaceholder("City").fill("Canada");
    await page.getByPlaceholder("State").fill("Ontario");
    await page.getByPlaceholder("Zip").fill("L2R 3J1");
    await page.getByLabel("Agree to terms and conditions").check();
    await page.getByRole("button",{name:'Submit form'}).click();
    await page.locator("//a[normalize-space()='Simple Form Demo']").click();
    await page.getByPlaceholder("Message").fill("Hello");
    await page.getByRole("button",{name:'Show Message'}).click();
    await page.getByText("Your Message : Hello").isVisible();
    await page.pause();
})
