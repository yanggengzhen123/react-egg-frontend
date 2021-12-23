import React, { useState, useEffect } from 'react';
import { WingBlank, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'umi';
export default function (props: any) {
  return (
    <div>
      <WingBlank>
        <List>
          <List.Item>
            <Link to="/function/hook">hook</Link>
          </List.Item>
          <WhiteSpace />
          <List.Item>
            <Link to="/function/context">context</Link>
          </List.Item>
          <WhiteSpace />
        </List>
      </WingBlank>
    </div>
  );
}
