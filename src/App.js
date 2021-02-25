import './App.css';
import './AppQueries.css';

import Nav from './components/Nav/Nav.component';
import Landing from './components/landing/Landing.component';
import OtherProducts from './components/otherproducts/OtherProducts.component';
import Consult from './components/consult/Consult.component';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { Footer } from './components/footer/Footer.component';

export const App = () => {


  return (
    <>
    <div className="page">
      <Nav/>
      <Switch>
            <Route path="/consult" render={(props) => <Consult {...props} />} />
            <Route
              path="/otherproducts"
              render={(props) => <OtherProducts {...props} />}
            />
            <Route path="/"  component={Landing} />

            <Redirect from="*" to="/" />
          </Switch>
         {/* section: footer */}
      <Footer/>
    </div>
      
      </>
  );
}

export default withRouter(App);
