import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Dashboard.css";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const min_balance = 10000.0;
  const [currentBalance, setCurrentBalance] = useState(0.0);
  const [eligibility_msg, setEligbility_ms] = useState("");

  const openFD = () => {
    console.log("clicked");
    if (currentBalance.toFixed(2) >= 2 * min_balance) {
      setEligbility_ms("You are eligbile to Open an FD");
    } else {
      setEligbility_ms("You are not eligbile to Open an FD");
    }
  };

  const depositMoney = (event) => {
    event.preventDefault();
    const depositAmountInput = document.getElementById("depositAmount");
    const depositAmount = parseFloat(depositAmountInput.value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      const newBalance = currentBalance + depositAmount;
      setCurrentBalance(newBalance);
      depositAmountInput.value = "";
    }
    openFD();
  };

  const withdrawMoney = (event) => {
    event.preventDefault();
    const withdrawAmountInput = document.getElementById("withdrawAmount");
    const withdrawAmount = parseFloat(withdrawAmountInput.value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      if (currentBalance - withdrawAmount < 0.0 || currentBalance <= 0.0) {
        alert("You cannot withdraw money!! Insufficient Balance");
      } else {
        const newBalance = currentBalance - withdrawAmount;
        setCurrentBalance(newBalance);

        withdrawAmountInput.value = "";
      }
    }
    openFD();
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="main--content">
          <div className="header-wrapper">
            <div className="header--title">
              <span>Primary</span>
              <h2>DashBoard</h2>
            </div>
          </div>
          <div className="card--container">
            <div className="card--wrapper">
              <div className="card hidden" id="dashboardCard">
                <h3>Home</h3>
                <p>
                  Your current balance is: ₹{" "}
                  <span>{currentBalance.toFixed(2)}</span>
                </p>
              </div>
              <div className="card hidden" id="profileCard">
                <h3>Profile</h3>
                <ul className="li_item">
                  <li>
                    <span>Name: </span>
                  </li>
                  <li>
                    <span>Email: </span>
                  </li>
                  <li>
                    <span>Amount: {currentBalance.toFixed(2)} </span>
                  </li>
                </ul>
              </div>
              <div className="card hidden" id="depositCard">
                <h3>Deposit</h3>
                <p>
                  Your current balance is: ₹
                  <span id="currentBalanceDeposit">
                    {currentBalance.toFixed(2)}
                  </span>
                </p>
                <form>
                  <div className="form-group">
                    <label htmlFor="depositAmount">Amount:</label>
                    <input
                      type="text"
                      id="depositAmount"
                      name="depositAmount"
                      placeholder="Enter deposit amount"
                    />
                  </div>
                  <button type="submit" onClick={(e) => depositMoney(e)}>
                    Deposit Cash
                  </button>
                </form>
              </div>
              <div className="card hidden" id="withdrawCard">
                <h3>Withdraw</h3>
                <p>
                  Your current balance is: ₹
                  <span id="currentBalanceWithdraw">
                    {currentBalance.toFixed(2)}
                  </span>
                </p>
                <form>
                  <div className="form-group">
                    <label htmlFor="withdrawAmount">Amount:</label>
                    <input
                      type="text"
                      id="withdrawAmount"
                      name="withdrawAmount"
                      placeholder="Please enter your amount to withdraw: "
                    />
                  </div>
                  <button type="submit" onClick={(e) => withdrawMoney(e)}>
                    Withdraw Cash
                  </button>
                </form>
              </div>

              <div className="card hidden" id="openFDCard">
                <h3>Open FD</h3>
                <p>
                  Your current balance is: ₹{" "}
                  <span>{currentBalance.toFixed(2)}</span>
                </p>
                <p className="elg">
                  Eligibility_Status: <span>{eligibility_msg}</span>
                </p>
              </div>
 
              <div className="card hidden" id="applyLoanCard">
                <h3>Apply Loan</h3>
                <label htmlFor="loan">Loan Type: k</label>
                <select id="loan">
                  <option value = "home">Home</option>
                  <option value = "Car">Car</option>
                  <option value = "Personal">Personal</option>
                  <option value = "other">Other</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
