---
sidebar_position: 2
---

# Test the browser extension

## 0. Get the Polkadot-JS Extension

- If you don't have it already, go to [https://polkadot.js.org/extension/](https://polkadot.js.org/extension/)
and install the Polkadot extension.

- The Polkadot-JS Extension manages Polkadot accounts and is used to sign transactions.

- Create an account and make sure you select "Use with any network" 
so that you can use the account in the Wika blockchain.


## 1. Get a copy of the code

- Go to [https://github.com/randombishop/wika_browser_ext](https://github.com/randombishop/wika_browser_ext)

- Click on **Download ZIP** 

![screenshot](/img/docs/contribute/wika_website_github_download.png)

- Unzip it somewhere handy.

- Note: if you already downloaded it before to test a previous version, 
you can replace the previous version and do a refresh. 
(Go to `chrome://extensions/` for Google Chrome; or `about:debugging` for Firefox.)


## 2.a Add the extension to Google Chrome

- Navigate to chrome://extensions/

![screenshot](/img/docs/contribute/chrome_extensions_url.png)

- Toggle developer mode (on the top right corner)

- Click on **Load Unpacked** and select the folder you prepared on step 1.

![screenshot](/img/docs/contribute/chrome_extension_loading.png)

- Click on the small plugin icon at the top right corner of the browser window and pin the wika extension so that it's always visible.

![screenshot](/img/docs/contribute/chrome_extension_pin.png)


## 2.b Add the extension to Mozilla Firefox

- Navigate to about:debugging

- Click **This Firefox**

- Click  **Load Temporary Add-on** then select the file "manifest.json" in the folder you prepared on step 1.




## 3 Open the Wika extension

- Click on the wika icon at the top right of your browser window.

![screenshot](/img/webapp/home.png)

- If it opened the webapp, Yay! You've successfully installed the latest version from source code and you're ready to start testing!
Thank you for contributing to the Wika Community!


## 4 Create your account

- Click the **Connect Account** button and follow the steps to select the Polkadot account.

- If the account does not appear, make sure you have successfully installed Polkadot Extension, 
created an account, and selected "Use with any network"
  
- After you've connected your account, account details should be displayed and the Wika icon should be ON.

![screenshot](/img/webapp/account.png)

- Copy your  **Public address (substrate format)** then send it to an admin in the discord server so that they send you some Wikas!



## 5 The Wika Widget

- When you have the Wika extension installed and a connected account, the Wika icon should show ON, 
and whenever you browse to a new page, the Wika Widget will be injected in the page

![screenshot](/img/docs/contribute/youtube_with_widget.png)

- You can use the widget to send likes to any webpage.

- It also shows your current balance and the amount of likes already received by current page.

- If you want to prevent it from showing, click on the Wika icon and disconnect the account from the webapp.
The switch will turn OFF and the widget won't show until you re-connect.

- You can also turn off the extension by simply closing the tab that has the web app. 
