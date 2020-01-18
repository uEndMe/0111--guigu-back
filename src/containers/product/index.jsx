import React, { Component } from 'react';
import { Card, Select, Input, Button, Icon, Table, message } from 'antd';

import { reqGetProduct } from '$api'

export default class Product extends Component {

  state = {
    products: [],
    total: 0,
  }

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
  ];

  getProduct = (pageName, pageSize) => {
    reqGetProduct(pageName, pageSize)
      .then(({ list, total }) => {
        this.setState({ products: list, total });
        message.success('获取商品列表数据成功~');
      })
      .catch((err) => {
        message.error(err)
      })
  }

  componentDidMount() {
    this.getProduct(1, 3);
  }

  render() {
    const { Option } = Select;
    const { products, total } = this.state;
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
        dataSource={products}
        bordered
        pagination={{
          pageSizeOptions: ['3', '6', '9'],
          defaultPageSize: 3,
          showSizeChanger: true,
          showQuickJumper: true,
          total,
          onChange: this.getProduct,
          //pageSize 变化的回调
          onShowSizeChange: this.getProduct,
        }}
        rowKey='_id'
      />
    </Card>
  }
}