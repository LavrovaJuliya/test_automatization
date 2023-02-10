import locators from "./locators"

describe('Name of the group', () =>{
    it('should behave...', async () =>{
        browser.url("https://test.upswot.com/admin/#/l")
        browser.pause(2000)
        await $("button.sign-in-btn").click()
       await browser.pause(2000)
       

    });
});