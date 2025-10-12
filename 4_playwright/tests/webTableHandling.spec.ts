import {test, expect} from '@playwright/test';

test/*.only*/("Handling Webtable", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator("table[name='BookTable']"); //grab table locator

    //=========grab total rows and colums of table:============

    //colums:
    //number of elements (<td> or <th>) in a <tr>, provide number of colums in a table:
    const cols = table.locator('tr th'); //grab all <th> (table headers - one in each column) elements within a <tr>
    console.log("Number of colums " + await cols.count());

    //rows:
    const rows = table.locator('tbody tr'); //get all tr elements within table body (includes <th>) 
    console.log("Number of rows: " + await rows.count());

    expect(await cols.count()).toBe(4); //check col count
    expect(await rows.count()).toBe(7);//check row count

    await page.close();
});

test.only("Selecting single checkbox in a table", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable'); //grab table
    const cols = table.locator('thead tr th'); //table head > table row > table header
    const rows = table.locator('tbody tr'); //grab rows

    //first find matching row, then we can click it's checkbox:
    const matchingRow = rows.filter({
         //filter rows for target row:
         has: page.locator('td'), //is table data
         hasText: 'Tablet'//with this text
    });

    //get input element from target row (it's checkbox), and click it:
    await matchingRow.locator('input').check();
    
    await page.pause(); //pause to show checkbox selection

    await page.close();
});

test/*.only*/("Selecting multiple checkboxes in a table using a function", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.close();
});