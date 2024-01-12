const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, until } = require('selenium-webdriver');
require('chromedriver');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000); // Zet de timeout op 60 seconden


// Stel de browser driver in
const driver = new Builder().forBrowser('chrome').build();

// Scenario 1: Verbeterde Inlogervaring
Given('de gebruiker is op de inlogpagina van OpinionOnline', async function () {
  await driver.get('http://localhost:3000/login');
});

When('de gebruiker zijn of haar inloggegevens invult', async function () {
  const emailInputLocator = By.css('#email_input');
  const passwordInputLocator = By.css('#password_input');

  // Wacht tot het e-mailveld aanwezig en zichtbaar is
  const emailInput = await driver.wait(until.elementLocated(emailInputLocator), 10000);
  await driver.wait(until.elementIsVisible(emailInput), 10000);
  await emailInput.sendKeys('manal.moussaoui@student.odisee.be');

  // Wacht tot het wachtwoordveld aanwezig en zichtbaar is
  const passwordInput = await driver.wait(until.elementLocated(passwordInputLocator), 10000);
  await driver.wait(until.elementIsVisible(passwordInput), 10000);
  await passwordInput.sendKeys('Manal2103');

  // Je kunt hier ook een interactie toevoegen om op de inlogknop te klikken, indien nodig
});


Then('moet de gebruiker snel en veilig toegang krijgen tot zijn of haar account', async function () {
  await driver.findElement(By.id('submit_btn')).click();
  await driver.get('http://localhost:3000/Account');
});


// Scenario 2: Mobiele Responsiviteit bij Enquêtes Invullen
Given('de gebruiker opent OpinionOnline op een mobiel apparaat', async function () {
  await driver.manage().window().setRect({ width: 375, height: 667 });
  await driver.get('http://localhost:3000/');
});
 
When('de gebruiker probeert een enquête in te vullen', async function () {
  // Vind de enquête op de pagina.
  await driver.get('http://localhost:3000/Preview/76');
 
 
  // Vul de enquête in. Bijvoorbeeld, vul een tekstveld in en selecteer een keuze.
});
 
Then('moet de enquête goed weergegeven worden op het mobiele scherm', async function () {
  await driver.get('http://localhost:3000/Preview/76');

  // Wacht tot een bekend element dat aangeeft dat de enquête is geladen zichtbaar is.
  const bekendElement = await driver.findElement(By.tagName('h1')); 
  const isVisible = await bekendElement.isDisplayed();

  if (!isVisible) {
    throw new Error('De enquête wordt niet correct weergegeven op het mobiele scherm.');
  }
});




 
 
// Scenario 3: UI-aanpassingen voor Enquête Creatie
Given('de gebruiker wil een nieuwe enquête maken', async function () {
  await driver.get('http://localhost:3000/Editor/273');
});
 
When('de gebruiker de enquête-creatie interface gebruikt', async function () {
  // Replace 'buttonClass' with the actual class of the button
  // If the button has multiple classes, you can use any one of them that is unique enough to identify the button
  const buttonClass = 'text-primary-normal'; // for example
  try {
    const button = await driver.wait(until.elementLocated(By.css(`button.${buttonClass}`)), 10000);
    await button.click();
  } catch (error) {
    throw new Error('Kon de knop niet vinden met de gegeven class selector: ' + error);
  }
  // Voer hier andere interacties uit die nodig zijn voor de test.
});


 
Then('moet de interface gebruiksvriendelijk en intuïtief zijn', async function () {
  // Voer hier je verificaties uit
  const isElementVisible = await driver.findElement(By.id('someElement')).isDisplayed();
  if (!isElementVisible) {
   throw new Error('De interface is niet gebruiksvriendelijk.');
  }
});


// Optioneel: Sluit de browser na alle tests
AfterAll(async function () {
  await driver.quit();
});


