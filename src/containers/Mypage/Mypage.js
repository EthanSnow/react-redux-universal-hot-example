import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { DataWraper, InputBtn} from 'components';

@connect(state => ({data: state.mypage}))
export default class Mypage extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const {data} = this.props;
    return (
      <div>
        {data.mapKey.map( (XXXX, iiii) => <DataWraper key={iiii} str = {XXXX}/>)}
        <InputBtn />
        <InputBtn />
      </div>
    );
  }
}
