import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
import Modal from '@/components/Modal';
import { Button } from 'antd-mobile';
export default class Lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleClick = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          测试
        </Button>
        {/* <CreatePortal>model</CreatePortal> */}
        <Modal show={this.state.show} onClose={this.handleClose}>
          111
        </Modal>
      </div>
    );
  }
}
