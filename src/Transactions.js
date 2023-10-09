import React, { useState } from 'react';

function Transactions() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Abhijeet', balance: 1000 },
    { id: 2, name: 'Ankush', balance: 1500 },
    { id: 3, name: 'Abhi', balance: 2000 },
    { id: 4, name: 'Dilip', balance: 1200 },
    { id: 5, name: 'Vinayak', balance: 800 },
    { id: 6, name: 'Romil', balance: 2500 },
    { id: 7, name: 'Dhruv', balance: 3000 },
    { id: 8, name: 'Dhruvi', balance: 900 },
    { id: 9, name: 'Lalit', balance: 1800 },
    { id: 10, name: 'Lalita', balance: 2100 },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState('');

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleTransaction = () => {
    if (!selectedCustomer || isNaN(transactionAmount)) {
      return;
    }

    if (selectedCustomer.name === 'Abhijeet') {
      const updatedCustomers = customers.map((customer) => {
        if (customer.id === 1) {
          return {
            ...customer,
            balance: customer.balance - parseFloat(transactionAmount),
          };
        } else if (customer.id === selectedCustomer.id) {
          return {
            ...customer,
            balance: customer.balance + parseFloat(transactionAmount),
          };
        } else {
          return customer;
        }
      });

      setCustomers(updatedCustomers);
      setSelectedCustomer(null);
      setTransactionAmount('');
    } else {
      alert("Only Abhijeet can send money to others.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="text-center">
            <h2>Our Customers</h2>
            <ul className="list-group">
              {customers.map((customer) => (
                <li key={customer.id} className="list-group-item">
                  <button
                    className="btn btn-link"
                    onClick={() => handleSelectCustomer(customer)}
                    disabled={customer.id === 1}
                  >
                    {customer.name} (Balance: {customer.balance})
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {selectedCustomer && (
            <div className="text-center mt-3">
              <h2>Transaction</h2>
              <p>
                Transfer funds from {selectedCustomer.name} (Balance:{' '}
                {selectedCustomer.balance}) to:
              </p>
              <input
                className="form-control"
                type="number"
                placeholder="Enter amount"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <button
                className="btn btn-primary mt-2"
                onClick={handleTransaction}
              >
                Transfer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Transactions;
