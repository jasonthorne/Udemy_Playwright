import {test} from '@playwright/test';

//+++++++++++ 3 types of dropdowns: ++++++++++++++++
//single static drop down (values dont change)
//multi static dropdown (values dont change)
//dynamic dropdown

//Single static =====================================================

test/*.only*/('Single static dropdown handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');

    //--------------------------------------------------------------------------------------------
    //WAYS TO GET A SELECTION OPTION +++++++++++ specifically used for static dropdowns (where values are static)
    //getting selection option by id and value:
    await page.selectOption('#skills', {value: 'Android'});

    await page.pause(); //pause page to show selection

    //getting selection option by id and label (the text given for the option):
    await page.selectOption('#skills', {label: 'Art Design'});

    await page.pause(); //pause page to show selection

    //getting selection option by id and index (option's position in list):
    await page.selectOption('#skills', {index: 3});

    await page.pause(); //pause page to show selection
    //-------------------------------------------------------------------------------------------
    await page.close();
});

//Multi static =====================================================


test/*.only*/('Multi static dropdown handling', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', [{value: "Ohio"},{label: "Texas"},{index: 3}]) //+++++++++passing array of values instead of one selected value
    await page.pause(); //pause page to show selection
    await page.close();
});

//Dynamic drop downs  =====================================================


//searchable dynamic drop down:
test/*.only*/('Searchable dynamic dropdown handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
  
    await page.close();
});

//NON searchable dynamic drop down:
test/*.only*/('Non searchable dynamic dropdown handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
  
    await page.close();
});

