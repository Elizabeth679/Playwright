const { TIMEOUT } = require("node:dns");

const config=({
  testDir: './tests',
  TIMEOUT: 60*1000,
  expect: {
    TIMEOUT:60*1000
  },
  reporter: 'html',
  use:{
    browserName:'chromium',
    headless: false
  },
})
module.exports=config