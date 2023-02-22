import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import balance from '../helpers/balance'

export default function MetamaskLogin() {
    const [isConnected, setIsConnected] = useState(false);
    const [usdcBalance, setUsdcBalance] = useState("");
    const [ethAdress, setEthAdress] = useState("");
    const onConnect = async () => {
        try {
            const { account, usdcBalance } = await balance();
            setEthAdress(account);
            setUsdcBalance(usdcBalance);
            setIsConnected(true);
        } catch (err) {
            console.log(err);
        }
    }

    const onDisconnect = () => {
        setIsConnected(false);
    }

    return (
        <div className="app">
            <div className="app-header">
            </div>
            <div className="app-wrapper">
                {!isConnected && (
                    <div>
                        <Button className="app-button__login" onClick={onConnect}>
                            Login
                        </Button>
                    </div>
                )}
            </div>
            {isConnected && (
                <div className="app-wrapper">
                    <div className="app-details">
                        <h3> {ethAdress}</h3>
                        <div className="app-balance">
                            <span>USDC Balance: </span>
                            {usdcBalance}
                        </div>
                    </div>
                    <div>
                        <Button className="app-buttons__logout" onClick={onDisconnect}>
                            Disconnect
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}