const { test } = require("@playwright/test");

exports.customtest=test.extend({
testDataForOrder:
{
username:"standard_user",
password:"secret_sauce",
product:"Sauce Labs Backpack"
}
})