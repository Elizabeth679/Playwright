const { TIMEOUT } = require("node:dns");

const config=({
  testDir: './tests',
  TIMEOUT: 40*1000,
  expect: {
    TIMEOUT:40*1000
  },
  reporter: 'html',
  use:{
    browserName:'chromium',
    headless: false
  },
})
module.exports=config