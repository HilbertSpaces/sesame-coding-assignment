
import Web3 from 'web3';

export default async function balance() {
    const tokenAbi = [{
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    }];
    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log("Non-ethereum browser detected. You should install Metamask");
        }
        return provider;
    };
    let account, usdcBalance;
    try {
        const currentProvider = detectCurrentProvider();
        if (currentProvider) {
            await currentProvider.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(currentProvider);
            const userAccount = await web3.eth.getAccounts();
             account = userAccount[0];
            let ethBalance = await web3.eth.getBalance(account);

            // TODO(Jonathankt): Add additional tokens to addresses to check balances for future quests.
            const tokenList = [["USDC", '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48']];
            const tokenMap = new Map(tokenList);
            const tokenInst = new web3.eth.Contract(tokenAbi, tokenMap.get("USDC"));
             usdcBalance = await tokenInst.methods.balanceOf(account).call();
            console.log(usdcBalance,account);
        }
    } catch (err) {
        console.log(err);
    }

    return {account,usdcBalance};
}