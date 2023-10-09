import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Deposit = () => {
  const [balance, setBalance] = useState(1000); 
  const [depositAmount, setDepositAmount] = useState('');
  const [isDeposited, setIsDeposited] = useState(false);

  const handleDeposit = () => {
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('Please enter a valid deposit amount.');
      return;
    }

    const newBalance = balance + parseFloat(depositAmount);
    setBalance(newBalance);
    setIsDeposited(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Deposit Money</h2>
          <div className="mb-3 text-center">
            <p>Your Current Balance: Rs. {balance.toFixed(2)}</p>
            {isDeposited && (
              <p>
                Deposited: Rs. {parseFloat(depositAmount).toFixed(2)}<br />
                Your New Balance: Rs. {balance.toFixed(2)}
              </p>
            )}
          </div>
          <div className="mb-3 text-center">
            <input
              type="number"
              className="form-control"
              placeholder="Enter deposit amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
