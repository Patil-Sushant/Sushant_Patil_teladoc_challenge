const { basename } = require("path");
const { browser, protractor } = require("protractor");

class AddUser {
    constructor() {
        // ---------------------------------------------------------------------------------------------
        // Add User: elements
        // ---------------------------------------------------------------------------------------------
        const firstName = element(by.css('input[name="FirstName"]'));
        const lastName = element(by.css('input[name="LastName"]'));
        const userName = element(by.css('input[name="UserName"]'));
        const password = element(by.css('input[name="Password"]'));
        const role = element(by.css('select[name="RoleId"]')); 
        const email = element(by.css('input[name="Email"]')); 
        const mobilePhone = element(by.css('input[name="Mobilephone"]'));
        const elemSave = element(by.css('button.btn.btn-success'));

        const verifyUserFirstName = element.all(by.css('td.smart-table-data-cell')).get(0);
        const verifyUserLastName = element.all(by.css('td.smart-table-data-cell')).get(1);
        const verifyUserName = element.all(by.css('td.smart-table-data-cell')).get(2);
        const verifyCustomer = element.all(by.css('td.smart-table-data-cell')).get(3);
        const verifyRole = element.all(by.css('td.smart-table-data-cell')).get(5);
        const verifyUserEmail = element.all(by.css('td.smart-table-data-cell')).get(6);
        const verifyUserCellphone = element.all(by.css('td.smart-table-data-cell')).get(7);
        
        const deleteUser = element.all(by.css('button[ng-click="delUser()"]')).get(3);
        const okButton = element.all(by.css('button[ng-click="close(btn.result)"]')).last();

        const verifyDeletedUser = element(by.css('tr.smart-table-data-row:nth-child(3) > td:nth-child(2)'));

        // const elementTableRows = element.all(by.css('tr.smart-table-data-row')).get(3);

        // ---------------------------------------------------------------------------------------------
        // Add user: elements base xpath (pending substitution)
        // ---------------------------------------------------------------------------------------------

        const elemGenericXpathForARadioButton = '(//input[contains(@type,"radio")])[XXX]';
        const elemGenericXpathForRole = '//select//option[XXX]';

        // Methods for creating a user

        this.enterFirstName = async (fname) => {
            try {
                    firstName.click();
                    firstName.sendKeys(fname);
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };

        this.enterLastName = (lname) => {
            try {
                    lastName.click();
                    lastName.sendKeys(lname);
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };

        this.enterUserName = (username) => {
            try {
                    userName.click();
                    userName.sendKeys(username);
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
            return true;
        };

        this.enterPassword = (pwd) => {
            try {
                    password.click();
                    password.sendKeys(pwd);
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };
    
        this.chooseCustomer = (number) => {
            const elemGenericRadioButton = elemGenericXpathForARadioButton.replace('XXX', number);
            try {
                    const specificRadioButton = element(by.xpath(elemGenericRadioButton));
                    specificRadioButton.click();
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };

        this.clickRole = () => {
            try {
                role.click();
                browser.sleep(500);
            }
            catch (e) {
                return false;
            }
        };
    
        this.chooseRole = (number) => {
            const elemRole = elemGenericXpathForRole.replace('XXX', number);
            try {
                    const specificRole = element(by.xpath(elemRole));
                    specificRole.click();
                    browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };

        this.enterEmail = (e_mail) => {
            try {
                   email.click();
                   email.sendKeys(e_mail);
                   browser.sleep(500);
                }
            catch (e) {
                return false;
            }
        };

        this.enterPhoneNumber = (phone) => {
            try {
                  mobilePhone.click();
                  mobilePhone.sendKeys(phone);
                  browser.sleep(500);
                }
            catch (e) {
                return false;
            }
            return true;
        };

        this.save = () => {
            try {
                elemSave.click();
                browser.sleep(1000);
            }
            catch (e) {
                return false;
            }
            return true;
        };

        // Methods for verifying a user

        this.verifyUserFirstName = () => {
            try {
                return verifyUserFirstName.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyUserLastName = () => {
            try {
                return verifyUserLastName.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyUserName = () => {
            try {
                return verifyUserName.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyCustomer = () => {
            try {
                return verifyCustomer.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyRole = () => {
            try {
                return verifyRole.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyEmail = () => {
            try {
                return verifyUserEmail.getText();
            }
            catch (e){
                return false;
            }
        };

        this.verifyCellphone = async () => {
            try {
                return verifyUserCellphone.getText();
            }
            catch (e){
                return false;
            }
        };

        // delete user
        this.deleteUser = () => {
            try {
                    deleteUser.click();
                    browser.sleep(500);
                    okButton.click();
                }
            catch (e) {
                return false;
            }
            return true;
        };

        // verify user post deleting
        this.verifyUserAfterDeleting = () => {
            try {
                return verifyDeletedUser.getText();
            }
            catch (e){
                return false;
            }
        };
    }
}

module.exports = AddUser;
