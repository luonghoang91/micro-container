import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from './component/AppHeader';
import AppFooter from './component/AppFooter';
import MicroFrontend from './MicroFrontend';

const {
  REACT_APP_COUPON_HOST: couponHost,
  REACT_APP_SMARTUX_HOST: smartuxHost,
} = process.env;

const Smartux = ({ history }) => (
  <MicroFrontend history={history} host={smartuxHost} name="Smartux" />
);
const Coupon = ({ history }) => (
  <MicroFrontend history={history} host={couponHost} name="Coupon" />
 );

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Smartux} />
        <Route exact path="/coupon" component={Coupon} />
      </Switch>
      <AppFooter/>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
