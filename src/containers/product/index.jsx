import React, { Component } from 'react';
import { Card, Select, Input, Button, Icon, Table } from 'antd';


export default class Product extends Component {
  columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
    },
    {
      title: '商品描述',
      dataIndex: 'desc',
    },
    {
      title: '商品价格',
      dataIndex: 'price',
    },
    {
      title: '商品状态',
      dataIndex: 'status',
      render: () => {
        return <div>
          <Button type="primary">上架</Button>
          <span style={{ paddingLeft: 10 }}>已下架</span>
        </div>
      }
    },
    {
      title: '操作',
      dataIndex: 'xxx', //到时候定义
      render: () => {
        return <div>
          <Button type="link">详情</Button>
          <Button type="link">修改</Button>
        </div>
      }
    }
  ]
  render() {
    const { Option } = Select;
    return <Card
      title={
        <div>
          <Select defaultValue='1'>
            <Option value="1">根据商品名称</Option>
            <Option value="2">根据商品描述</Option>
          </Select>
          <Input placeholder="关键字" style={{ width: 200, margin: '0 10px' }} />
          <Button type="primary">搜索</Button>
        </div>
      }
      extra={
        <Button type="primary">
          <Icon type="plus" />
          添加商品
        </Button>
      }
    >
      <Table
        columns={this.columns}
        dataSource={[{}, {}, {}, {}]}
        bordered
        pagination={{
          pageSizeOptions: ['3', '6', '9'],
          defaultPageSize: 3,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </Card>
  }
}