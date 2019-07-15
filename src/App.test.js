import React from 'react';
import ReactDOM from 'react-dom';
import puppeteer from 'puppeteer';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




describe('Login', () => {
  it('should login with failure', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    // console.log('page', page)
    await page.type('#huhaoran', 'mockuser');
    // await page.type('#password', 'wrong_password');
    // await page.click('button[type="submit"]');
    // await page.waitForSelector('.ant-alert-error'); // should display error
    await page.close();
    browser.close();
  });
});