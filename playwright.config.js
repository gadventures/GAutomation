// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :0,
  workers: 3,
  /* Maximum time one test can run for. */
  //10-
  timeout: 3000 * 10000,
  expect: {
  
    timeout: 500000
  },
  
  reporter: 'html',
  projects : [
    {
      name : 'safari',
      use: {

        browserName : 'webkit',
        headless : true,
        screenshot : 'off',
        trace : 'on',//off,on 
        ...devices['iPhone 11'],    
      }

    },
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : true,
        screenshot : 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        permissions:['geolocation'],
        
        trace : 'on',//off,on
       // ...devices['']
     //   viewport : {width:720,height:720}
         }

    }
    ]

};

module.exports = config;
