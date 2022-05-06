const { browser } = require('protractor');
const AddUserPopup = require('../Sushant_Patil_Teladoc_Challenge/addUserPopup');

const addUserPopup = new AddUserPopup();

describe('User operations', () => {
    describe('Add a new user', () => {
        it('Launch home page', () => {
            browser.get('http://www.way2automation.com/angularjs-protractor/webtables');
            browser.manage().window().maximize();
            browser.sleep(1000);
        });
        it('Click hyperlink: Add user', () => {
            element.all(by.css('button[ng-click*="pop()"]')).get(0).click();
        });
        it('Enter First Name', () => {
            expect(addUserPopup.enterFirstName('John')).toBe(true);
            expect(addUserPopup.enterFirstName('123')).toBe(true);
            // expect(validation).toBe("Numbers not accepted for firstname")
        });
        it('Enter last name', () => {
            expect(addUserPopup.enterLastName('Smith')).toBe(true);
        });
        it('Enter username', async () => {
            expect(addUserPopup.enterUserName('JohnSmith')).toBe(true);
        });
        it('Enter password', async () => {
            expect(addUserPopup.enterPassword('Password123!')).toBe(true);
        });
        it('Choose customer', async () => {
            expect(addUserPopup.chooseCustomer(2)).toBe(true);
        });
        it('Click dropdown: Role', () => {
            expect(addUserPopup.clickRole()).toBe(true);
        });
        it('Choose role', () => {
            expect(addUserPopup.chooseRole(4)).toBe(true);
        });
        it('Enter email', () => {
            expect(addUserPopup.enterEmail('johnsmith12@gmail.com')).toBe(true);
        });
        it('Enter phone #', () => {
            expect(addUserPopup.enterPhoneNumber(9995555366)).toBe(true);
        });
        it('Save', () => {
            expect(addUserPopup.save()).toBe(true);
            browser.sleep(5000);
        });

        // User verification
        it('Verify first name of the user', async () => {
            const fName = await addUserPopup.verifyUserFirstName();
            expect(fName).toEqual('John');
        });
        it('Verify last name of the user', async () => {
            const lName = await addUserPopup.verifyUserLastName();
            expect(lName).toEqual('Smith');
        });
        it('Verify user name of the user', async () => {
            const userName = await addUserPopup.verifyUserName();
            expect(userName).toEqual('JohnSmith');
        });
        it('Verify role', async () => {
            const role = await addUserPopup.verifyRole();
            expect(role).toEqual('Admin');
        });
        it('Verify email', async () => {
            const email = await addUserPopup.verifyEmail();
            expect(email).toEqual('johnsmith12@gmail.com');
        });
        it('Verify cell phone', async () => {
            const phone = await addUserPopup.verifyCellphone();
            expect(phone).toEqual('9995555366');
        });

        // delete user
        it('Delete the created user', async () => {
            addUserPopup.deleteUser();
            browser.sleep(2000);
        });

        // verify that the deleted user does not exist
        it('Verify first name of the user', async () => {
            const lName = await addUserPopup.verifyUserAfterDeleting();
            expect(lName).not.toEqual('Novak');
        });
    });
});