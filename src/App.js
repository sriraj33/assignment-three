import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {

  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [network, setNetwork] = useState();

  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    loadAccout();
  }, [])

  useEffect(() => {
    loadBalance();
  }, [account])

  async function loadAccout(){
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }

  async function loadBalance(){
    const network = await web3.eth.getNetworkType();
    const balance = await web3.eth.getBalance(account);
    setNetwork(network);
    setBalance(balance);
  }

  return (
    <div className="App">
      <h1>Decentralized App (DApp)</h1>
      <p><h3>Your Accout: {account}</h3></p>
      <p>
        <h3>Your Balance ({network}): ETH {(balance/1e18).toFixed(6)}</h3>
      </p>
    </div>
  );
}

export default App;