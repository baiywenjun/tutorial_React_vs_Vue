import React, {Component} from 'react';
import PropTypes from 'prop-types';
import demoStyle from './Demo.module.css'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'demo msg'
        }
    }

    render() {
        return (
            <div style={this.props.pStyle}>
                <p>{this.props.msg}</p>
                <div className={demoStyle.title}>引入外部样式</div>
                <div>
                    <p>子组件的值：{this.state.msg}</p>
                    <button onClick={this.props.onClick}>给父组件传值</button>
                </div>
            </div>
        );
    }
}

Demo.propTypes = {
    msg: PropTypes.string
};
Demo.defaultProps = {
    msg: 'I am the default'
};

export default Demo;
