import React, { Component } from 'react';
import { Card, Button, Icon, Table } from 'antd';

import { columns, data } from '$datas/category';

export default class Category extends Component {
  render() {
    return <div>
      <Card title="分类列表" extra={
        <Button type="primary">
          <Icon type="plus" />
        </Button>
      }>
        <Table
          columns={columns}
          dataSource={data}
          bordered
        />
      </Card>
    </div>
  }
}