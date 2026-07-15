const { test,expect } = require("@playwright/test");

test('Excel download',async({page})=>{
    await page.goto("https://selenium.qabible.in/radio-button-demo.php");
    await page.locator("//a[normalize-space()='Table']").click();
    await page.locator("//a[normalize-space()='Table Data Download']").click();
    const downloadPromise = page.waitForEvent('download');
    await page.locator("//span[normalize-space()='Excel']").click();
    const download = await downloadPromise;

  // Get downloaded file name
  const fileName = download.suggestedFilename();
  console.log('Downloaded file:', fileName);

  // Save the file to a specific location
  await download.saveAs(`downloads/${fileName}`);
    await page.pause();

})