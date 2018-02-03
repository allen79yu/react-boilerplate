import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//router
import Routes from "@src/router/Routes";

class MainFrame extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="main_container">
                <main>
                    <div id="main_content">
                        <Routes />
                    </div>
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainFrame));
