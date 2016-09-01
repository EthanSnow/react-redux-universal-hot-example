import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as btnActions from 'redux/modules/mypage';

// don't need to connect for now because it is expected the get the data from the containner.
export default class DataWraper extends Component {
  static propTypes = {
    str: PropTypes.string
  };
  render() {
    const {str} = this.props;
    return (
      <div>
        {str}
      </div>
    );
  }
}


@connect( () => ({ }), btnActions)
export class InputBtn extends Component {
  static propTypes = {
    addStr: PropTypes.func
  };
  handleChange = (evt) => {
    this.componentValue = evt.target.value;
    console.log(this);
  }
  clickAddBtn = (event) => {
    event.preventDefault();
    this.props.addStr(this.componentValue);
    console.log(this.componentValue);
  }
  render() {
    this.componentValue = 'typehere';
    return (
      <div>
        <input type="text" defaultValue = {this.componentValue} onChange={this.handleChange} />
        <button onClick = {this.clickAddBtn}/>
      </div>
    );
  }
}
