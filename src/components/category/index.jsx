import React, { Component } from 'react';
import { Card, Button, Icon, Table } from 'antd';

import { columns, data } from '$datas/category';

export default class Category extends Component {

  render() {
    return <div>
      <Card title="分类列表" extra={
        <Button type="primary">
          <Icon type="plus" />
          分类列表
        </Button>
      }>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            showSizeChanger: true,  //页数改变
            showQuickJumper: true,  //快速跳转
            pageSizeOptions: ['3', '6', '9', '12'],
            defaultPageSize: 3,
          }}
        />
      </Card>
    </div>
  }
}