import React, { useContext } from 'react';
import { ScreenNameContext } from '../App';

function NavBar() {

  const Screen = useContext(ScreenNameContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" style={{ fontWeight: "bold" }}>Money Game | Natchanon</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
          {/* //--Dispatch--// */}
            <a onClick={() => Screen.dataDispatch('Crypto')} class="nav-item nav-link" href="#">Cryptocurrency</a>
            <a onClick={() => Screen.dataDispatch('Transaction')} class="nav-item nav-link" href="#">Transaction</a>
          </div>
        </div>
      </nav>
    </div>

  );

}

export default NavBar