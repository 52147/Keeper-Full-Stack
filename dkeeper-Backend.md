# Keeper-Backend
- This is the localhost address where dapp deployed at http://127.0.0.1:4943/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai
- Use Web 3 to build the backend for Keeper.
## Web3
- Web3: Build the website on the blockchain.
- Blockchain: 
  - Encoded the transitions, encode means hashing the nounce in block. Chain means later block hash depend on the previous block hash.
  - If we change the one block data, hashing result will be incorrect in the subsequent block because every block link each other and this can ensure the security of data.
  - We can store the `data or code` into the block. 
- Distrubted Blockchain: 
  - If we have 3 peer, we have 3 copy of the blockchain, the data, nonce, hash are all the same. 
  - If one peer change it's data, hash will change and it will be different from the other two.
  - So this can make sure the data is corret and it called `distributed trustless ledger`, leger always be correct, and no one can tamper with it.

![image](https://user-images.githubusercontent.com/79159894/200148279-2b2fd64f-7a04-414a-a728-6829792cf60c.png)
## Reference
- https://guggero.github.io/blockchain-demo/#!/block
- https://www.coinonvip.com/202109301801416036.html
## Set up Web3
### Check the System information
- Search `系統資訊` in `WINDOW START`
- Window version should be >= `10`.
- System Type should be `x64`.
- ![image](https://user-images.githubusercontent.com/79159894/200155778-0224ef50-6c5e-4703-9214-22b559899eb3.png)
### Install Ubuntu by using WSL
-  Open Powershell as Adminstrator
- Install window sub system for Linux through Powershell 
```
 wsl --install -d Ubuntu
```
 - wsl will open and ask us to input the Unix user account
 - set the user name and password
 - After set up for user name and password, ubuntu will start install.
 - Check the ubuntu 
 - Type this command in Powershell as Adminstrator
 ```
 wsl --list --verbose
 ```
 - ![image](https://user-images.githubusercontent.com/79159894/200156396-7be01aed-a627-4d07-b0d6-495eb83bcb8e.png)
 - We can see Ubuntu at the list

### Install 2 extension in VScode
- Install Motoko extension
- ![image](https://user-images.githubusercontent.com/79159894/200157322-1dc47875-9809-402b-84cf-d254bab4c510.png)
- Install WSL extension
- ![image](https://user-images.githubusercontent.com/79159894/200157401-5156c06d-2315-4bb8-91c3-8cb1dbf2a4bb.png)

### Install Homebrew
- Go to Homebrew website
- https://brew.sh/
- Run this command in wsl to install Homebrew
 ```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 ```
 
- Follow the Next steps instructions to add Homebrew to your PATH and to your bash shell profile script
- Then install build tools
 ```
 sudo apt-get install build-essential
 ```
 - input the Ubuntu password and type Y
 - Check installation sucessfually
```
brew --version
```
### Use brew to install node@16
- install node@16
```
brew install node@16
```
- link to node@16
```
brew link node@16
```
- Check the installation
```
node --version
```
### Install DFX
Run the command in ubuntu
```
DFX_VERSION=0.9.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```
- After sucessfully install, it will display the path.
```
/home/debra/bin/dfx
```
- Add the Path in system variable 
- copy the path and past it in the `export PATH=$PATH:<REPLACE WITH YOUR INSTALLATION PATH>` and run the command
```
export PATH=$PATH:/home/debra/bin/dfx
```
```
echo "${PATH//:/$'\n'}"
```
- close the ubuntu and open a new ont
- Check the dfx installation
```
dfx --version
```
- If sucessfullt install, the version will display.
- ![image](https://user-images.githubusercontent.com/79159894/200158741-668f8cc5-0f3e-4d82-a0cf-3536234567f4.png)




- upgrade dfx
```
dfx upgrade
```
- upgrade npm
```
npm install -g npm@8.19.3
```
- Creat a new directory name ic-projects
```
mkdir ic-projects
```
- move to the ic-prjects path
```
cd ic-projects/
```
- create a hello project
```
dfx new hello
```

- Opend the file that hello project at.
```
explorer.exe .
```
- Opend the file we can see all template file that dfx created
-![image](https://user-images.githubusercontent.com/79159894/200160788-b90f4b9c-5f3d-4e39-ae8f-948f75470756.png)

### Develop DApp on Vscode
- `ctrl + shift + p` Open the command of vscode and type `New WSL Window using Distro`
- Then select `Ubuntu`
- if select New WSL Window, vscode will appear error `vs code server for wsl closed unexpectedly`
```
[2022-11-06 07:24:50.009] Unable to detect if server is already installed: Error: Command failed: C:\WINDOWS\System32\wsl.exe -d docker-desktop-data -e sh -c "[ -d ~/.vscode-server/bin/8fa188b2b301d36553cbc9ce1b0a146ccb93351f ] && printf found || ([ -f /etc/alpine-release ] && printf alpine-; uname -m)"
[2022-11-06 07:24:50.009] 
[2022-11-06 07:24:50.010] Launching C:\WINDOWS\System32\wsl.exe -d docker-desktop-data sh -c '"$VSCODE_WSL_EXT_LOCATION/scripts/wslServer.sh" 8fa188b2b301d36553cbc9ce1b0a146ccb93351f stable code-server .vscode-server --host=127.0.0.1 --port=0 --connection-token=2165574219-744881447-1217679081-272999650 --use-host-proxy --without-browser-env-var --disable-websocket-compression --accept-server-license-terms --telemetry-level=all'
[2022-11-06 07:24:50.290] VS Code Server for WSL closed unexpectedly.
[2022-11-06 07:24:50.290] For help with startup problems, go to https://code.visualstudio.com/docs/remote/troubleshooting#_wsl-tips
[2022-11-06 07:24:50.302] WSL Daemon exited with code 0
```
-  Because I have a previous installation of `Docker` that was interfering here
-  ![image](https://user-images.githubusercontent.com/79159894/200160850-9019590e-ba59-44f1-85c3-2df8aadc077b.png)
- Then the window will be opened and left side the green bar wil run `start remoting`
- ![image](https://user-images.githubusercontent.com/79159894/200163284-2b52dff2-2e29-4f00-b16b-8a3f71880e60.png)
- Then we can select exploer -> open folder -> select ic-projects -> select hello -> click ok
- Then vscode will start display our hello project
- ![image](https://user-images.githubusercontent.com/79159894/200163422-7d2e8231-7ee9-4b48-821e-8adf5e49f446.png)

- Then open main.mo file, we can see the code does not have color.
- So we go to the install the motoko extension
- Then main.mo code will be available.
- ![image](https://user-images.githubusercontent.com/79159894/200162744-e5245a5a-1c88-41cf-94ad-89db7efcc2ef.png)
- Then open the terminal
```
dfx start --emulator
```
- Then when we see `Listening on http://127.0.0.1:8000/`, split a new terminal.
```
Nov 06 03:39:17.730 INFO Starting server. Listening on http://127.0.0.1:8000/
```
- Run this command in the new terminal
``` 
dfx deploy
```
- Then go to package.json file and modify this 3 dependencies.
```
        "@dfinity/agent": "^0.10.4",
        "@dfinity/candid": "^0.10.4",
        "@dfinity/principal": "^0.10.4",
```
![image](https://user-images.githubusercontent.com/79159894/200162947-c240c62b-5bc5-483b-9e7b-3877ffb10f9c.png)

- Then update webpack
```
npm install webpack-cli@4.10.0
```
- if we do not update webpack, will get the error`[webpack-cli] TypeError: cli.isMultipleCompiler is not a function`
```
[webpack-cli] TypeError: cli.isMultipleCompiler is not a function
    at Command.<anonymous> (/home/debra/ic-projects/hello/node_modules/@webpack-cli/serve/lib/index.js:146:35)
    at async Promise.all (index 1)
    at async Command.<anonymous> (/home/debra/ic-projects/hello/node_modules/webpack-cli/lib/webpack-cli.js:1672:7)
```
- Then after update the webpack, we can start npm
```
npm start
```
- Then we will get the url that project is running at.
```
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
```
- Go to http://localhost:8080/
- We can see our project page
- ![image](https://user-images.githubusercontent.com/79159894/200163152-27339f4a-4585-4117-94c4-2332a407e397.png)
### Reference
- https://stackoverflow.com/questions/72637891/how-to-solve-webpack-cli-typeerror-cli-ismultiplecompiler-is-not-a-function


## Use ICP to build DApp for Keeper
- ICP:  Internet Computer Protocol (ICP) — allows software to run on the internet in a distributed manner, as opposed to using servers controlled by large companies.
- DApp: A decentralized application (dApp) is a type of distributed open source software application that runs on a peer-to-peer (P2P) blockchain network rather than on a single computer.
- DFINITY:The DFINITY Foundation is a not-for-profit　organisation developing the Internet Computer. The Internet Computer is a public blockchain platform which is based on a network of sub-blockchains governed by an ownerless master blockchain. The web3 platform is designed to enhance the Internet with a new form of server-less cloud-functionality. Its internal cryptocurrency ICP is the short form of its underlying protocol, the Internet Computer Protocol.


## Start
Open ubuntu terminal, change directory to ic-projects
```
cd ic-projects/
```
Create a new dfx project
```
dfx new dkeeper
```
Update to the latest dfx
```
dfx upgrade
```
- Go to VScode
- `ctrl + shift + p` Open the command of vscode and type New WSL Window using Distro
- Then select `Ubuntu`
- Then select `ic-projects`
- Then select `dkeeper`
- And we can start coding


## Put our frontend Keeper codeee in dfx project
- Open the dkeeper we have two file dkeeper_front and dkeeper_backend in src file
- delete index.js, index.html in srcand main.css in assets
- paste `index.html`, `index.js` and `components file` in src file
- change the `index.js` file name to `index.jsx` 
- ![image](https://user-images.githubusercontent.com/79159894/201272287-7ba1a09e-be9a-4e08-bef5-163633208087.png)
- modify code in `module_export`
- change js to `jsx`
- ![image](https://user-images.githubusercontent.com/79159894/201272631-731e97c2-04a9-444e-a3b8-35558a9c9de2.png)

- decomment this module code in wepack.config.js 
- ![image](https://user-images.githubusercontent.com/79159894/201272559-b0c50eff-5bd0-4310-b5e1-6953e7805bc1.png)
- Add `tsconfig.json` file in dkeeper folder
- ![image](https://user-images.githubusercontent.com/79159894/201272934-5a882b5b-394b-4e34-a7b4-8b6af6218c96.png)
- Replace all package file to this content
``` 
{
  "name": "dkeeper_assets",
  "version": "0.1.0",
  "description": "Internet Computer starter application",
  "keywords": [
    "Internet Computer",
    "Motoko",
    "JavaScript",
    "Canister"
  ],
  "scripts": {
    "build": "webpack",
    "prebuild": "npm run copy:types",
    "start": "webpack serve --mode development --env development",
    "prestart": "npm run copy:types",
    "copy:types": "rsync -avr .dfx/$(echo ${DFX_NETWORK:-'**'})/canisters/** --exclude='assets/' --exclude='idl/' --exclude='*.wasm' --delete src/declarations"
  },
  "devDependencies": {
    "@dfinity/agent": "^0.10.4",
    "@dfinity/candid": "^0.10.4",
    "@dfinity/principal": "^0.10.4",
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.10.9",
    "@mui/material": "^5.10.12",
    "assert": "2.0.0",
    "buffer": "6.0.3",
    "copy-webpack-plugin": "^10.2.4",
    "css-loader": "^6.5.1",
    "events": "3.3.0",
    "html-webpack-plugin": "5.5.0",
    "process": "0.11.10",
    "stream-browserify": "3.0.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "5.3.1",
    "ts-loader": "^9.2.6",
    "typescript": "^4.5.5",
    "util": "0.12.4",
    "webpack": "5.63.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.4.0"
  },
  "browserslist": [
    "last 2 chrome version",
    "last 2 firefox version",
    "last 2 safari version",
    "last 2 edge version"
  ],
  "dependencies": {
    "@mui/icons-material": "^5.10.9",
    "@mui/material": "^5.10.12",
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    "react-scripts": "5.0.0",
    "uuid": "8.3.2"
  }
}
``` 
- Replace all old mui depencies to new mui dependencies in package-lock.json nad package.json
``` 
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.10.9",
    "@mui/material": "^5.10.12",
``` 

- Because  we  use @mui/material@5.5.3 and this require  react@"^17.0.0"
- So go to package.json and modify react and react-dom dependcy
``` 
  "dependencies": {
    ...
    "react": "^17.0.0",
    "react-dom": "^17.0.0",
    ...
  },
``` 
- if I run dfx start and then dfx deploy in vscode command, it will appear this error
- After I use ubuntu terminal to run dfx start --emulator and then dfx deploy, it can work.(not sure it is the problem come from)
![image](https://user-images.githubusercontent.com/79159894/201275857-c939741e-131e-498b-8b8a-dbbc540bffc9.png)

- Open the ubuntu terminal
- dfx start --emulator
- than will show project run at https://localhost:8080
- Open the `new ubuntu terminal`. Run this command in the new terminal
``` 
dfx deploy
``` 
``` 
npm install webpack-cli@4.10.0
npm install @emotion/react @emotion/styled
``` 
- if we not use npm install @emotion/react @emotion/styled instead use npm install
- we will get the error below
- ![image](https://user-images.githubusercontent.com/79159894/201274628-9458cea3-8e60-4c16-9585-514313af53be.png)
- Reference:
- https://stackoverflow.com/questions/71718054/issue-with-material-ui-icons-npm-installation-unable-to-resolve-dependency-tre
- Then run
``` 
npm start
``` 
We can deploy our react frontedn on loaclhost8080 successfully.
![image](https://user-images.githubusercontent.com/79159894/201275638-7fa397be-62fc-422a-a42d-b21d19193f18.png)

### Reference
- https://www.gemini.com/cryptopedia/dfinity-coin-the-internet-computer-dfinity-team
- https://en.wikipedia.org/wiki/Dfinity

## Motoko
Everytime we modify the main.mo, we need to run dfx deploy to make the new function working. 
## `App.jsx File`
 ```javascript
// import canister for connecting with Motoko
import { dkeeper_backend } from "../../../declarations/dkeeper_backend";
 ```
- canister name is at dfx.json file
- ![image](https://user-images.githubusercontent.com/79159894/201453397-d5862bcf-1fed-4cd1-837c-641f83dcacf1.png)

## Error

Keep ran into this error
### Address already in use
After I run dfx start, I got this error.
![image](https://user-images.githubusercontent.com/79159894/201316288-b9c0e0f9-ea28-419a-9278-b18c460aeeb5.png)
- This mean I have another process is running at this 4943 port.
- So First I need to get pid 
- And then kill this process
``` 
sudo lsof -i:4943
``` 
- pid is 7291
![image](https://user-images.githubusercontent.com/79159894/201316791-7c733a56-1dad-4c4c-8add-bee335bcc92f.png)
``` 
kill 7291
``` 
- Then run dfx start 
- No error and start to install dfx
sudo lsof -i:4943


- Reference: https://stackoverflow.com/questions/19071512/socket-error-errno-48-address-already-in-use

### thread replica actor panic
After run dfx start, I got this error.

![image](https://user-images.githubusercontent.com/79159894/201321411-629b0598-5f1a-4650-a147-58756fe61a95.png)
- Solution
- dfx start --background --clean
- Reference:https://forum.dfinity.org/t/failed-to-setup-wallet-caller/14243



## Deployed Dapp on the Internet

