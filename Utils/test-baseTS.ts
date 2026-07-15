//const { test } = require("@playwright/test");

import test from "@playwright/test";


interface TestDataForOrder{
    username:string;
    password:string;
    product:string;
}
export const customtest=test.extend<{testDataForOrder:TestDataForOrder}>({
    testDataForOrder:
{
username:"standard_user",
password:"secret_sauce",
product:"Sauce Labs Backpack"
}
})