const puppeteer = require("puppeteer");


async function main() {
	const browser = await puppeteer.launch({
		headless: false,
	});
	const page = await browser.newPage();
	await page.goto("http://contractorsinsurancereview.com/ExampleForm/");
	await page.type("#name", "MatanBaynesai");
	await page.type("#phone", "034343432");
	await page.type("#email", "Matan@gmail.com");
	await page.type("#company", "google");
	const newInputValue = "51-500";
	await page.evaluate(val => document.querySelector("#option1").innerHTML = val, newInputValue);
    await page.screenshot({path:"mypic.png"});
    await Promise.all([page.click(".primary.button"),page.waitForNavigation()]);
    console.log("Congrats You reached the Thank You Page!");
	await page.waitForTimeout(5000); // wait for 5 seconds

	await browser.close();
}
main();