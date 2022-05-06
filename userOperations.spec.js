const { browser } = require('protractor');
const AddUserModal = require('../Sushant_Patil_Teladoc_Challenge/addUserModal');

const addUserModal = new AddUserModal();

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
            expect(addUserModal.enterFirstName('John')).toBe(true);
        });
        it('Enter last name', () => {
            expect(addUserModal.enterLastName('Smith')).toBe(true);
        });
        it('Enter username', async () => {
            expect(addUserModal.enterUserName('JohnSmith')).toBe(true);
        });
        it('Enter password', async () => {
            expect(addUserModal.enterPassword('Password123!')).toBe(true);
        });
        it('Choose customer', async () => {
            expect(addUserModal.chooseCustomer(2)).toBe(true);
        });
        it('Click dropdown: Role', () => {
            expect(addUserModal.clickRole()).toBe(true);
        });
        it('Choose role', () => {
            expect(addUserModal.chooseRole(4)).toBe(true);
        });
        it('Enter email', () => {
            expect(addUserModal.enterEmail('johnsmith12@gmail.com')).toBe(true);
        });
        it('Enter phone #', () => {
            expect(addUserModal.enterPhoneNumber(9995555366)).toBe(true);
        });
        it('Save', () => {
            expect(addUserModal.save()).toBe(true);
            browser.sleep(2000);
        });

        // User verification
        it('Verify first name of the user', async () => {
            const fName = await addUserModal.verifyUserFirstName();
            expect(fName).toEqual('John');
        });
        it('Verify last name of the user', async () => {
            const lName = await addUserModal.verifyUserLastName();
            expect(lName).toEqual('Smith');
        });
        it('Verify user name of the user', async () => {
            const userName = await addUserModal.verifyUserName();
            expect(userName).toEqual('JohnSmith');
        });
        it('Verify role', async () => {
            const role = await addUserModal.verifyRole();
            expect(role).toEqual('Admin');
        });
        it('Verify email', async () => {
            const email = await addUserModal.verifyEmail();
            expect(email).toEqual('johnsmith12@gmail.com');
        });
        it('Verify cell phone', async () => {
            const phone = await addUserModal.verifyCellphone();
            expect(phone).toEqual('9995555366');
        });

        // delete user
        it('Delete the created user', async () => {
            addUserModal.deleteUser();
            browser.sleep(1000);
        });

        // verify that the deleted user does not exist
        it('Verify first name of the user', async () => {
            const lName = await addUserModal.verifyUserAfterDeleting();
            expect(lName).not.toEqual('Novak');
        });
    });
});
