import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Register from '../Pages/Register';
import CashWithdraw from '../Pages/CashWithdraw';
import CashDeposit from '../Pages/CashDeposit';
import Home from '../Pages/Home';
import CheckBalance from '../Pages/CheckBalance';
const Routes = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar={true}>
        <Scene key="Homes" component={Home} title="Home" initial={true} />
        <Scene key="Balance" component={CheckBalance} title="Check Balance" />

        <Scene key="Register" component={Register} title="Register" />
        <Scene key="CWith" component={CashWithdraw} title="Cash Withdraw" />
        <Scene key="CDep" component={CashDeposit} title="Cash Deposit" />
      </Scene>
    </Router>
  );
};

export default Routes;
