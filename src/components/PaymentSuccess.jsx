import React, { useEffect } from 'react'
import { getBaseUrl } from '../utils/baseURL';

const PaymentSuccess = () => {

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const sessionId = query.get('session_id');
       
        if(sessionId) {
            fetch(`${getBaseUrl()}/api/orders/confirm-payment`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({session_id: sessionId})
            })
            .then((res) => res.json())
            .catch((err) => console.error("Error confirming payment", err))
        }

    }, [])
    return (
        <div>PaymentSuccess</div>
    )
}

export default PaymentSuccess