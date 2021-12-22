import React, { Component } from 'react';
import CreatePortal from '../CreatePortal';
import { Icon } from 'antd-mobile';

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed' as const,
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'fixed' as const,
    top: '10px',
    right: '10px',
  },
};

interface ModalProps {
  onClose: Function;
  show: boolean;
}
export default class Modal extends Component<ModalProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { show } = this.props;
    return (
      <>
        {show ? (
          <CreatePortal style={Styles.modal}>
            <div style={Styles.body}>
              {this.props.children}
              <Icon
                type="cross"
                size="lg"
                style={Styles.close}
                onClick={this.handleClose}
              />
            </div>
          </CreatePortal>
        ) : null}
      </>
    );
  }
}
