import React from "react";
import styles from "./LoginStyle.scss";
import { connect } from "react-redux";
import { init, inputUserName } from "@src/actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.onInit();
    }
    render() {
        return (
            <div id="login">
                <h1>Hello world</h1>
                <p>{this.props.home.init ? `I'm alive` : `Somthing wrong`}</p>
                <input type="text" value={this.props.home.userName}  onChange={this.props.onInputUserName}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        home: state.home,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onInit: () => {
            dispatch(init());
        },
        onInputUserName: (event) => {
            dispatch(inputUserName(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
