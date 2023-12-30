const EXCLUDE_LOW_LEVEL = java.lang.System.getProperty("EXCLUDE_LOW_LEVEL");

if (EXCLUDE_LOW_LEVEL == "true") {
    defineEvent(SeleniumSession, "Login", function (session, event) {});
    defineEvent(SeleniumSession, "AdminLogin", function (session, event) {});
    defineEvent(SeleniumSession, "AddToCart", function (session, event) {});
    defineEvent(SeleniumSession, "CheckOut", function (session, event) {});
    defineEvent(SeleniumSession, "AddProduct", function (session, event) {});
    defineEvent(SeleniumSession, "AddProductToCart", function (session, event) {});
    defineEvent(SeleniumSession, "ChangeProductPrice", function (session, event) {});

} else {
    /***********************************************************************************
     * Login to the store as a regular user.
     *
     * Parameters:
     *   username: string - The user that logs in
     *   password: string - The password of that user
     ************************************************************************************/
    defineEvent(SeleniumSession, "Login", function (session, event) {
        with (session) {
            writeText('//input[@class="whsOnd zHQkBf"]', event.userName);
            click('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]');
            waitForVisibility('//input[@class="whsOnd zHQkBf"]', 1000);
            sleep(5000);
            writeText('//input[@class="whsOnd zHQkBf"]', event.password);
            click('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]');

            // if (event.expectedWelcome)
            //     waitForVisibility('//img[@class="gb_Kc"]', 5000)
        }
    });

    defineEvent(SeleniumSession, "SendMail", function (session, event) {
        with (session) {
            waitForVisibility('//div[@class="T-I T-I-KE L3"]', 10000);
            click('//div[@class="T-I T-I-KE L3"]');
            // waitForVisibility('//div[@class="d3GVvd jGAaxb"]', 10000);
            writeText('//input[@class="agP aFw"]', event.to);
            click('//span[@class="aB gQ pE"]');
            waitForVisibility('//div[@class="aH9"]', 10000);
            writeText('//tr[@class="bzf"][2]//input[@class="agP aFw"]', event.cc);
            // writeText('//div[@class="aH9"]/input[@class="agP aFw"]', event.cc);
            writeText('//input[@class="aoT"]', event.subject);
            writeText('//div[@class="Ar Au"]/div[@class="Am aiL Al editable LW-avf tS-tW"]', event.body);
            click('//div[text()="Send"]');

            // class="T-I J-J5-Ji aoO v7 T-I-atl L3 T-I-KL"
            // class="Am Al editable LW-avf tS-tW"

        }
    });


// Define the 'from' and 'subject' values
    const fromValue = 'example@gmail.com';
    const subjectValue = 'Test Subject';

// Construct the XPath query for searching emails based on 'from' and 'subject'
    const searchXPath = `//input[@aria-label="Search"]`;
    const searchButtonXPath = `//button[@aria-label="Search Gmail"]`;
    const firstEmailXPath = `//div[@role="main"]//tr[1]`;
    const deleteButtonXPath = `//div[@aria-label="Delete"]`;
    const confirmDeleteButtonXPath = `//button[text()="Delete"]`;

// Function to perform the deletion
//     function deleteEmail() {
//         // Find and type into the search bar
//         const searchInput = document.evaluate(searchXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         searchInput.value = `from:${fromValue}`;
//
//         // Find and click the search button
//         const searchButton = document.evaluate(searchButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//         searchButton.click();
//
//         // Wait for the search results to load (adjust the timeout as needed)
//         setTimeout(() => {
//             // Find and click the first email
//             const firstEmail = document.evaluate(firstEmailXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//             firstEmail.click();
//
//             // Wait for the email details to load (adjust the timeout as needed)
//             setTimeout(() => {
//                 // Find and click the delete button
//                 const deleteButton = document.evaluate(deleteButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//                 deleteButton.click();
//
//                 // Wait for the confirmation modal to load (adjust the timeout as needed)
//                 setTimeout(() => {
//                     // Find and click the confirm delete button
//                     const confirmDeleteButton = document.evaluate(confirmDeleteButtonXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
//                     confirmDeleteButton.click();
//                 }, 2000);
//             }, 5000);
//         }, 5000);
//     }


    defineEvent(SeleniumSession, "DeleteMail", function (session, event) {
        with (session) {
            click('//a[text()="Inbox"]');
            // writeText('//input[@aria-label="Search mail"]', `from:${event.from} subject:${event.subject}` );
            // click('//table[@id=":22"]//tr[@class="zA zE"]//td[@class="yX xY "]//div[@class="yW"]//span[@class="bA4"]//span[@email="provengo6@gmail.com"]');
            // click('//table[@id=":22"]//tr[contains(@class, "zA")]//td[@class="yX xY "]//div[contains(@class, "yW"]//span[@class="bA4"]//span[@email="provengo6@gmail.com"]');
            click('//div[class="oZ-jc T-Jo J-J5-Ji "]');

            click('//div[@class="T-I J-J5-Ji nX T-I-ax7 T-I-Js-Gs mA T-I-KL" and (@aria-label="delete")]//div[@class="asa"]');
            click('//a[text()="Inbox"]');

        }
    });
}
//
//
//     /***********************************************************************************
//      * Login to the store as an admin user.
//      *
//      * Parameters:
//      *   username: string - The user that logs in
//      *   password: string - The password of that user
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "AdminLogin", function (session, event) {
//         with (session) {
//             // bp.log.info("AdminLogin "+event.user.username+" "+event.user.password)
//             writeText('//input[@id="username"]', event.user.username);
//             writeText('//input[@id="login"]', event.user.password);
//             click('//button[@class="action-login action-primary"]');
//         }
//     });
//
//     /***********************************************************************************/
//     defineEvent(SeleniumSession, "AddProduct", function (session, event) {
//         with (session) {
//
//             waitForClickability('//li[contains(@class,"item-catalog")]', 3000);
//             click('//li[contains(@class,"item-catalog")]');
//             waitForClickability('//li[contains(@class,"item-catalog-products")]', 3000);
//             click('//li[contains(@class,"item-catalog-products")]');
//             waitForClickability('//button[@id="add_new_product-button"]', 3000);
//             click('//button[@id="add_new_product-button"]');
//
//             waitForVisibility('//input[@name="product[name]"]', 10000);
//             clear('//input[@name="product[name]"]');
//             writeText('//input[@name="product[name]"]', event.product.name);
//             clear('//input[@name="product[sku]"]');
//             writeText('//input[@name="product[sku]"]', event.product.sku);
//             clear('//input[@name="product[quantity_and_stock_status][qty]"]');
//             writeText('//input[@name="product[quantity_and_stock_status][qty]"]', event.product.qty);
//             clear('//input[@name="product[price]"]');
//             writeText('//input[@name="product[price]"]', event.product.price);
//
//             click('//div[text()="Select..."]');
//
//             clear('//div[@class="action-menu _active"]/div[@class="admin__action-multiselect-search-wrap"]/input[@class="admin__control-text admin__action-multiselect-search"]')
//             writeText('//div[@class="action-menu _active"]/div[@class="admin__action-multiselect-search-wrap"]/input[@class="admin__control-text admin__action-multiselect-search"]', "Tees");
//
//             click('//label[@class="admin__action-multiselect-label"]/span[text()="Default Category / Men / Tops"]');
//
//             click('//button[@class="action-default"]');
//
//             click('//button[@id="save-button"]');
//
//             // waitForClickability('//a[@title="My Account"]', 14000);
//             // click('//a[@title="My Account"]');
//             // click('//a[@title="Sign Out"]');
//         }
//     });
//     /***********************************************************************************/
//     defineEvent(SeleniumSession, "ChangeProductPrice", function (session, event) {
//         with (session) {
//
//             waitForClickability('//li[contains(@class,"item-catalog")]', 5000);
//             click('//li[contains(@class,"item-catalog")]');
//             waitForClickability('//li[contains(@class,"item-catalog-products")]', 5000);
//             click('//li[contains(@class,"item-catalog-products")]');
//
//             productName = event.product.product + '-' + event.product.options[0] + '-' + event.product.options[1];
//             bp.log.info("ProductName " + productName)
//
//             waitForVisibility('//input[@class="admin__control-text data-grid-search-control"]', 3000);
//             clear('//input[@class="admin__control-text data-grid-search-control"]')
//             writeText('//input[@class="admin__control-text data-grid-search-control"]', productName);
//             waitForClickability('//button[@data-bind="click: apply.bind($data, false)"]', 1000);
//             // data-bind="i18n: 'Search'"
//             click('//button[@data-bind="click: apply.bind($data, false)"]');
//             click('//a[@class="action-menu-item"]');
//
//             waitForVisibility('//input[@name="product[price]"]', 3000);
//             clear('//input[@name="product[price]"]')
//             writeText('//input[@name="product[price]"]', event.product.newPrice);
//
//             click('//button[@id="save-button"]');
//
//             // waitForClickability('//a[@title="My Account"]', 14000);
//             // click('//a[@title="My Account"]');
//             // click('//a[@title="Sign Out"]');
//         }
//     });
//
//     /***********************************************************************************
//      * Logout a regular user.
//      *
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "Logout", function (session, event) {
//         with (session) {
//             click("//span[@class='customer-name']//button");
//             click("//a[normalize-space()='Sign Out']");
//         }
//     });
//
//     /***********************************************************************************
//      * Register a  user.
//      *
//      * Parameters:
//      *   s: string              - The name of the session in which we want this event to take place
//      *   firsntame : string     - The name of the new user
//      *   lastname : string      - The surname of the new user
//      *   email_address : string - An email address for the user. Must be unique.
//      *   password : string      - Password for the new user.
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "Register", function (session, event) {
//         with (session) {
//             click("//a[@href='http://localhost/customer/account/create/']");
//             writeText('//input[@id="firstname"]', event.firstname);
//             writeText('//input[@id="lastname"]', event.lastname);
//             writeText('//input[@id="email_address"]', event.email_address);
//             writeText('//input[@id="password"]', event.password);
//             writeText('//input[@id="password-confirmation"]', event.password);
//             click('//button[@type="submit" and contains(concat(" ",normalize-space(@class)," ")," action ") and contains(concat(" ",normalize-space(@class)," ")," submit ")]');
//             assertText("//div[@data-ui-id='message-success']//div[1]", "Thank you for registering with Main Website Store.")
//         }
//     });
//
//
//     /***********************************************************************************
//      * Add an item to the cart of the currently logged-in user.
//      *
//      * Parameters:
//      *   s: string                  - The name of the session in which we want this event to take place.
//      *   category : string          - The category of the product that we want to add.
//      *   subCategory : string       - The sub-category of the product that we want to add.
//      *   product : string           - The  product that we want to add.
//      *   options : array of strings - A list of options for the product.
//      *   quantity: number, optional - The number of items to add.
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "AddToCart", function (session, event) {
//         with (session) {
//             click("//span[text()='" + event.product.category + "']");
//             click("(//span[text()='" + event.product.category + "'])/following::span[text()='" + event.product.subCategory + "']/following::a[text()[normalize-space()='" + event.product.subSubCategory + "']]");
//
//             selectByValue("//div[@class='toolbar toolbar-products']/following::select[@id='limiter']", '36')
//
//             moveToElement("(//img[@alt='" + event.product.product + "'])[last()]")
//             waitForClickability("(//img[@alt='" + event.product.product + "'])[last()]", 1000);
//             click("(//img[@alt='" + event.product.product + "'])[last()]");
//
//             for (let opt in event.product.options) {
//                 // Click the options
//                 click("//div[@data-option-label='" + event.product.options[opt] + "']");
//
//                 // Verify that it was selected
//                 waitForVisibility("//div[@data-option-label='" + event.product.options[opt] + "' and contains(@class,'selected')]", 5000);
//             }
//             if (event.product.quantity) {
//                 writeText("//input[@title='Qty']", event.product.quantity, true);
//             }
//
//             if (event.product.expected_image) {
//                 waitForVisibility("//img[contains(@src, '" + event.product.expected_image + "')]", 5000);
//             }
//             click("//button[@id='product-addtocart-button']/span");
//             waitForVisibility("//div[@data-ui-id='message-success']//div[1]", 5000);
//             assertText("//div[@data-ui-id='message-success']//div[1]", "You added " + event.product.product + " to your shopping cart.");
//             // sleep(10000);
//         }
//     })
//
//     defineEvent(SeleniumSession, "CheckPrice", function (session, event) {
//         with (session) {
//
//             refresh();
//             click("//span[text()='" + event.product.category + "']");
//             click("(//span[text()='" + event.product.category + "'])/following::span[text()='" + event.product.subCategory + "']/following::a[text()[normalize-space()='" + event.product.subSubCategory + "']]");
//
//             selectByValue("//div[@class='toolbar toolbar-products']/following::select[@id='limiter']", '36')
//
//             moveToElement("(//img[@alt='" + event.product.product + "'])[last()]")
//             waitForClickability("(//img[@alt='" + event.product.product + "'])[last()]", 1000);
//             click("(//img[@alt='" + event.product.product + "'])[last()]");
//
//             for (let opt in event.product.options) {
//                 // Click the options
//                 click("//div[@data-option-label='" + event.product.options[opt] + "']");
//
//                 // Verify that it was selected
//                 waitForVisibility("//div[@data-option-label='" + event.product.options[opt] + "' and contains(@class,'selected')]", 5000);
//             }
//
//             waitForVisibility("//span[@class=\"price-wrapper \"]", 5000);
//             assertText("//span[@data-price-amount][1]", event.product.price);
//         }
//     })
//
//     /***********************************************************************************
//      * Remove an item from the cart of the currently logged-in user.
//      *
//      * Parameters:
//      *   s: string        - The name of the session in which we want this event to take place.
//      *   product : string - The  product that we want to remove.
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "RemoveFromCart", function (session, event) {
//         with (session) {
//             click("//a[@class='action showcart']");
//             click("//a[text()[normalize-space()='" + event.product + "']]/following::a[@class='action delete']");
//             click("//div[text()='Are you sure you would like to remove this item from the shopping cart?']/following::span[text()='OK']");
//             waitForInvisibility("//div[contains(@class,'block block-minicart')]//img[@alt='" + event.product + "']", 5000);
//             click("//button[@id='btn-minicart-close']");
//         }
//     });
//
//     /***********************************************************************************
//      * Check that a product exists in the cart of the currently logged-in user.
//      *
//      * Parameters:
//      *   s: string -      - The name of the session in which we want this event to take place.
//      *   product : string - The  product that we want to remove.
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "CheckExistenceOfProductInCart", function (session, event) {
//         with (session) {
//             click("//a[@class='action showcart']");
//             waitForVisibility("//div[contains(@class,'block block-minicart')]//img[@alt='" + event.product + "']", 5000);
//             click("//button[@id='btn-minicart-close']");
//         }
//     });
//
//
//     /***********************************************************************************
//      * Check-out the items in the cart of the currently logged-in user.
//      *
//      * Parameters:
//      *   s: string                                              - The name of the session in which we want this event to take place.
//      *   verifyItems : array of strings, optional               - A list of items that we expect to see in the cart.
//      *   verifyNonexistenceOfItems : array of strings, optional - A list of items that we expect not to see in the cart.
//      *   shippingMethod : string, optional                      - The shopping method that we want to use for this order.
//      ************************************************************************************/
//     defineEvent(SeleniumSession, "CheckOut", function (session, event) {
//
//         with (session) {
//             // waitForClickability("//a[@class='level-top ui-corner-all']", 200000);
//             // click("//a[@class='level-top ui-corner-all']");
//             refresh();
//
//             waitForClickability("//a[@class='action showcart']", 50000);
//             click("//a[@class='action showcart']");
//             waitForClickability("//button[@title='Proceed to Checkout']", 2000);
//             click("//button[@title='Proceed to Checkout']", 5000);
//
//             if (event.verifyItems || event.verifyNonexistenceOfItems) {
//                 waitForClickability("//div[contains(@class,'items-in-cart')]//div", 5000);
//                 waitForClickability("//div[contains(@class,'items-in-cart')]//div", 5000);
//                 click("//div[contains(@class,'items-in-cart')]//div");
//             }
//
//             if (event.verifyItems) {
//                 for (item in event.verifyItems) {
//                     waitForVisibility("//img[@alt='" + event.verifyItems[item] + "']", 5000);
//                 }
//             }
//
//             if (event.verifyNonexistenceOfItems) {
//                 for (item in event.verifyNonexistenceOfItems) {
//                     waitForInvisibility("//img[@alt='" + event.verifyNonexistenceOfItems[item] + "']", 5000);
//                 }
//             }
//
//             if (event.shippingMethod) {
//                 waitForClickability("//td[text()='" + event.shippingMethod + "']", 5000);
//                 click("//td[text()='" + event.shippingMethod + "']");
//             }
//
//             click("//span[text()='Next']");
//
//             if (event.verifyItems) {
//                 for (item in event.verifyItems) {
//                     waitForVisibility("//img[@alt='" + event.verifyItems[item] + "']", 5000);
//                 }
//             }
//             if (event.verifyNonexistenceOfItems) {
//                 for (item in event.verifyNonexistenceOfItems) {
//                     waitForInvisibility("//img[@alt='" + event.user.verifyNonexistenceOfItems[item] + "']", 5000);
//                 }
//             }
//
//
//             waitForClickability("//button[contains(@class,'action primary')]", 5000);
//             runCode("jQuery(document.querySelectorAll('button[class*=\"action primary\"]')).click()");
//             waitForVisibility("//p[text()='Your order number is: ']", 5000);
//             click("//span[text()='Continue Shopping']");
//         }
//     });
//
//
// }