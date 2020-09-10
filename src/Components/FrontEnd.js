import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './Header-Footer/Footer';
import Header from './Header-Footer/Header';
import Login from './Login/Login';
import Home from './Home/Home';
import NotFound from './404NotFound/404NotFound';
// import ShopHome from './SHOP/Views/Home/ShopHome'
import AddEquipment from './Equipment/AddEquipment';
import Enrollments from './EventEnrollment/Enrollments';
import EnrolEvents from './EventEnrollment/EnrolEvents';
import EnrollmentForm from './EventEnrollment/EnrollmentForm';

class FrontEnd extends Component {

    state = {  }

    render() { 

        return ( 

            <div className="FrontEnd">

                <Router>

                    <Header />

                    <Switch>

                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/equipment" component={AddEquipment} />
                        {/* <Route path="/shop" component={ShopHome} /> */}
                        <Route path="/EnrolEvenrs" component={EnrolEvents} />
                        <Route path="/Enrollments" component={Enrollments} />
                        <Route path="/EnrollmentForm/:id" component={EnrollmentForm} />
                        <Route path="/EnrollmentForm" component={EnrollmentForm} />


                        <Route component={NotFound} />

                    </Switch>

                    <Footer />

                </Router>

            </div>

         );
    }
}
 
export default FrontEnd;