
Given("User types in username and password as {string} and {string}", async function (username, password) {
    await (await $("//Edit[@AutomationId=\"LoginUserName_TxtBox\"]")).setValue(username)
    await (await $("//Edit[@AutomationId=\"Login_Password_TxtBox\"]")).setValue(password)
});

When('Select page size as {string}', async (size) => {


    
    await (await $("#page-size-settings")).click()
    await (await $(`option=${size}`)).click()

    await browser.pause(10000)
   
   

});

Then('Then message should be {string}', async (msg) => {
    await expect(msg).toBe("admin")
})

