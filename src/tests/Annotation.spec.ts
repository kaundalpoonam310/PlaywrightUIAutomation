
const {test, expect} = require('@playwright/test');

//Only Annotation
test.only('test1', async ({page}) => {
    console.log('test1');
})

test.skip('test2', async ({page}) => {
    console.log('test2');
})


test('test3', async ({page, browserName}) => {
    console.log('test3');
    if(browserName == 'chrome'){
        test.skip();
    }

})

//Fixme
test('test4', async ({page}) => {
    test.fixme();
    console.log('test4');
})


//fail
test('test5', async ({page}) => {
    test.fail();
    console.log('test5');
    expect(1).toBe(1);
})

//slow
test('test6', async ({page}) => {
    test.slow();
    await page.goto("https://www.demoblaze.com/index.html");
    console.log('test6');
})