import { test, expect } from '@playwright/test';

//++++++++++PROGRAMATICALLY SET TRACING ++++++++++++++++

test('test', async ({ page, context }) => { //+++++++++++ Note the passing of context here +++++++++
  //start the tracing, allowing sbapshots & screenshots: ++++++
  await context.tracing.start({snapshots:true, screenshots:true}); 

  await page.goto('https://www.facebook.com/');
  await page.getByRole('button', { name: /*'this doesnt exist!'*/ 'Decline optional cookies' }).click();

  //at end of test, stop the tracing, and path where to save tracing: ++++++++
  await context.tracing.stop({path:'traceTest.zip'});
});