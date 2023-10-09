import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Withdrawal = () => {
  const [balance, setBalance] = useState(1500);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [isWithdrawn, setIsWithdrawn] = useState(false);

  const handleWithdrawal = () => {
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      alert('Please enter a valid withdrawal amount.');
      return;
    }

    if (parseFloat(withdrawalAmount) > balance) {
      alert('Insufficient balance for withdrawal.');
      return;
    }

    const newBalance = balance - parseFloat(withdrawalAmount);
    setBalance(newBalance);
    setIsWithdrawn(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Withdraw Money</h2>
          <div className="mb-3">
            <p>Your Current Balance: Rs. {balance.toFixed(2)}</p>
            {isWithdrawn && (
              <p>
                Withdrawn: Rs. {parseFloat(withdrawalAmount).toFixed(2)}<br />
                Your New Balance: Rs. {balance.toFixed(2)}
              </p>
            )}
          </div>
          <div className="mb-3 text-center">
            <input
              type="number"
              className="form-control"
              placeholder="Enter withdrawal amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={handleWithdrawal}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
