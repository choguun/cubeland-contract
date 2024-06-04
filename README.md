# cubeland-contract

### Vision

* On-chain AIGC Survival Sandbox cube-theme Games in which users truly own their assets.

### Description

* We are building a decentralized and On-chain AIGC Survival Sandbox cube-theme Games in which users truly own their assets by leveraging blockchain, IPFS and AI technology.

![GUI](/gui.png "GUI")

### How to deploy cubeland-contract

* npx hardhat run scripts/01_deploy_protocol.ts --network testnet
* config contract address to all deploy scripts.
* npx hardhat run scripts/02_setup_world.ts --network testnet
* npx hardhat run scripts/03_add_quest.ts --network testnet
* npx hardhat run scripts/04_add_recipe.ts --network testnet
* npx hardhat run scripts/05_add_gameitem.ts --network testnet 

### Technologies Used:

1. Smart Contract
1.1 On-chain in-game Items and Token
1.2 World (Game Logic)
2. IPFS Storage to store game metadata
3. WebGL
4. Web Socket
5. AI & LLM

### Key Features:

1. On-chain Game Logic eg. Quest(Daily Check-in, Raffle, Mini game), Craft, Item, Token, Profile, and World.
2. Token bound account; user truly own their asset on their Profile NFT.
3. Multiplayer
4. Supported Multi Platform on browser

### How it works:
![How it works](/howitwork.png "How it works")

Demo:
https://www.cubesland.xyz \
Deck:
https://www.canva.com/design/DAGHJxyfB3s/eU47zaq-dPN8YPK36UyBng/edit

### Business Model
1. Sell NFT and in-game items
2. Platform fees

### Deployed Smart Contract
<b>World Contract</b> https://testnet.opbnbscan.com/address/0xd3a85ead10da64d3028a4e147256b66e449c0450
