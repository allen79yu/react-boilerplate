import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//utils
import Bundle from "@utils/Bundle";

//routes
import loadLogin from "bundle-loader?lazy!@containers/Login";
const Login = props => <Bundle load={loadLogin}>{Login => <Login {...props} />}</Bundle>;

class Routes extends React.Component {
    componentDidMount() {
        loadLogin(() => {});
    }
    render() {
        return (
            <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
            </div>
        );
    }
}

export default Routes;
