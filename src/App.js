import React, { Component } from 'react';
import IconBigData from './images/icon_big_data.png';
import IconBlockchain from './images/icon_blockchain.png';
import IconCrypto from './images/icon_crypto.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img src="/logo.png" width="30" height="30" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#"><i className="fas fa-book"></i> Documentation</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i className="fab fa-slack"></i> Join the Community</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Get Early Access</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Polyledger EtherCloud</h1>
              <p className="lead">Middleware-as-a-Service for Token Teams and the Enterprise</p>
              <button type="button" class="btn btn-primary btn-lg"><i className="fas fa-book"></i> Read the Docs</button>
              <button type="button" class="btn btn-secondary btn-lg ml-2"><i className="fab fa-slack"></i> Join Slack</button>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="col-sm">
              <img src={IconBigData} className="mx-auto d-block" alt="Big Data" />
              <h2 className="text-center">Developer Platform</h2>
              <p className="lead">Leverage a global toolkit. Use one API to interact with your on-chain and off-chain data.</p>
            </div>
            <div className="col-sm">
              <img src={IconBlockchain} className="mx-auto d-block" alt="Blockchain" />
              <h2 className="text-center">DevOps Stack</h2>
              <p className="lead">Connect to remote nodes on Infura and use Web3.js to interact with the Ethereum blockchain.</p>
            </div>
            <div className="col-sm">
              <img src={IconCrypto} className="mx-auto d-block" alt="Crypto" />
              <h2 className="text-center">Secure Identity</h2>
              <p className="lead">We help manage user authentication &amp; identity by using public keys and digital signing.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h4>Accelerate your business</h4>
              <p className="lead">We provide an extensible software solution for managing your team, your token, and your enterprise. Leverage our developer platform and application marketplace to install, build, and share custom applications.</p>
            </div>
          </div>
        </section>
        <section className="container mt-5">
          <h3 className="text-center">Sign up for early access</h3>
          <form className="form-inline d-flex justify-content-center" action="https://formspree.io/info@polyledger.com" method="POST">
            <input className="form-control" type="email" placeholder="Email" name="_replyto" required />
            <button className="btn btn-primary ml-2" type="submit">Submit</button>
          </form>
        </section>
        <hr />
        <footer className="container">
          <p>&copy; 2018 Polyledger</p>
        </footer>
      </div>
    );
  }
}

export default App;
