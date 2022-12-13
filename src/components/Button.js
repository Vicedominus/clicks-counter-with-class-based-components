import React from "react";
import '../stylesheets/Button.css';


class Button extends React.Component {
    render () {
        return (
            <button
                onClick={this.props.clickListener}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;