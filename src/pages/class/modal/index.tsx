import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
export default class Lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CreatePortal>model</CreatePortal>
      </div>
    );
  }
}
