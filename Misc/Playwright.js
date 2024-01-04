//--------------------------------
// Arrange:
const { context } = await launch();
const page = await context.newPage();
await page.goto("http://lido.app");
//--------------------------------

//--------------------------------
// Act:
//click on log in button in upper right corner to navigate to log in page
await page.locator(`:text("Login")`).click();
//click on input box for email address
await page.locator(`[data-test-id="SignInEmail"]`).click();
//fill in with invalid email
await page.locator(`[data-test-id="SignInEmail"]`).fill(`wrongo@email.com`);
//click on input box for password
await page.locator(`[data-test-id="SignInPassword"]`).click();
//fill in with invalid password
await page.locator(`[data-test-id="SignInPassword"]`).fill("password");
//click 'Log in with email button' to attempt log in
await page.locator(`:text("Log in with email")`).click();

//--------------------------------

//--------------------------------
// Assert:
//assert that login failed with visible toast saying "Email or password is incorrect"
await expect(page.locator(`#\\32 98034997`)).toBeVisible();

//--------------------------------

//--------------------------------
// Arrange:
const { context } = await launch();
const page = await context.newPage();
await page.goto("http://lido.app");
//--------------------------------

//--------------------------------
// Act:
//click on log in button in upper right corner to navigate to log in page
await page.locator(`:text("Login")`).click();
//click on input box for email address
await page.locator(`[data-test-id="SignInEmail"]`).click();
//fill in with invalid email
await page.locator(`[data-test-id="SignInEmail"]`).fill(`wrongo@email.com`);
//click on input box for password
await page.locator(`[data-test-id="SignInPassword"]`).click();
//fill in with invalid password
await page.locator(`[data-test-id="SignInPassword"]`).fill("password");
//click 'Log in with email button' to attempt log in
await page.locator(`:text("Log in with email")`).click();

//--------------------------------

//--------------------------------
// Assert:
//assert that login failed with visible toast saying "Email or password is incorrect"
await expect(page.locator(`#\\32 98034997`)).toBeVisible();

//--------------------------------

//--------------------------------
// Arrange:
//--------------------------------

//--------------------------------
// Act:
//click on input box for email address
await page.locator(`[data-test-id="SignInEmail"]`).click();
//fill in with valid email
await page
  .locator(`[data-test-id="SignInEmail"]`)
  .fill(`jeanettehaltondev@gmail.com`);
//click on input box for password
await page.locator(`[data-test-id="SignInPassword"]`).click();
//fill in with valid password
await page.locator(`[data-test-id="SignInPassword"]`).fill("testingaccount777");
//click 'Log in with email button' to attempt log in
await page.locator(`:text("Log in with email")`).click();
//--------------------------------

//--------------------------------
// Assert:
//assert that user will be redirected to dashboard. in upper right corner will be log in email
await expect(
  page.locator(`:text("jeanettehaltondev@gmail.com")`)
).toBeVisible();
//--------------------------------

//--------------------------------
// Arrange:
//--------------------------------

//--------------------------------
// Act:
//click on input box for email address
await page.locator(`[data-test-id="SignInEmail"]`).click();
//fill in with valid email
await page
  .locator(`[data-test-id="SignInEmail"]`)
  .fill(`jeanettehaltondev@gmail.com`);
//click on input box for password
await page.locator(`[data-test-id="SignInPassword"]`).click();
//fill in with valid password
await page.locator(`[data-test-id="SignInPassword"]`).fill("testingaccount777");
//click 'Log in with email button' to attempt log in
await page.locator(`:text("Log in with email")`).click();
//--------------------------------

//--------------------------------
// Assert:
//assert that user will be redirected to dashboard. in upper right corner will be log in email
await expect(
  page.locator(`:text("jeanettehaltondev@gmail.com")`)
).toBeVisible();
//--------------------------------
