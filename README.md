# TKNGEN

Create and deploy BEP20 / ERC20 tokens with a click of a button...

### tkngen

The *tkngen client* builds on top of the [tkngen-api](https://github.com/sntsabode/tkngen-api). For a full and comprehensive explanation of all the features and caveats of the app please see *tkngen-api's* [documentation](https://github.com/sntsabode/tkngen-api#readme).

To test out the application visit [`https://sntsabode.github.io/tkngen`](https://sntsabode.github.io/tkngen)

> <img src="./misc/sc.gif" alt=""/>

<br/>

### Features

* `ERC20` / `BEP20` Token Type
  
  * ***Standard*** *(No mint or burn functions)*

  * ***Mintable*** *(mint function)*

  * ***Burnable*** *(burn function)*

  * ***MintableBurnable*** *(mint and burn functions)*

* Token configuration options

  * `Token Name`: *string* -- your token's name *(the value ui's show as your token's name e.g bscscan, etherscan)*.

  * `Token Symbol`: *string* -- your token's symbol *(the value ui's show as your token's symbol e.g etherscan, bscscan)*.

  * `Decimals`: *number* -- your token's decimals *([an ethereum thing](https://docs.openzeppelin.com/contracts/3.x/erc20#a-note-on-decimals))*.

  * `Total Supply`: *number* -- the amount of your tokens minted during the deployment. The amount is sent to the entered wallet address.

* Supported Networks

  * `BEP20`

    * ***Binance Smart Chain Mainnet***

    * ***Binance Smart Chain Testnet***

    * ***Binance Smart Chain Mainnet fork (dry run, only available on local instances of the tkngen-api.)***


  * `ERC20`

    * ***Mainnet***

    * ***Kovan***

    * ***Mainnet fork (dry run, only available on local instances of the tkngen-api.)***

<br/>

If you plan on deploying to mainnet ***(not recommended)*** we'd recommend using local instances of the tkngen-api client & server and not using the demo production builds *(although the demo production builds are capable of mainnet deployments)*. For a guide on how to do this, please see *tkngen-api's* [documentation](https://github.com/sntsabode/tkngen-api#readme).

## Quick Guide

<br/>

> ### Prerequisites
>
> * ***MetaMask***
> * ***Account with Ether on the desired network***

<br/>

> ### Step ∞
> * ***Follow the gif 😉***

<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
