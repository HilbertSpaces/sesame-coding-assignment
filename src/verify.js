import balance from './balance'
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function VerifyButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [hasBalance, setHasBalance] = useState(false);
    const [account, setAccount] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const url = 'https://sesame-coding-lab.herokuapp.com/';

    async function verify() {
        const { account, usdcBalance } = await balance();
        setAccount(account);
        if (usdcBalance > 0) {
            setHasBalance(true);       
        }
        handleShow();
    }

    useEffect(() => {
        const urlAccount = url.concat("account=" + account);
        fetch(urlAccount).then(response => response.json())
            .then(json => {
                setCouponCode(json.couponCode);
            });
    }, [])

    const text = hasBalance ? "Your coupon code is: " + couponCode : "Add USDC to your account for coupon code!";
    return (
        <div className="verify">
            <Button variant="outline-primary" onClick={verify}> Verify </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Quest Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}