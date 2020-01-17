import React, { Component } from 'react';
import { Card, Button, Icon, Table } from 'antd';
import { connect } from 'react-redux';

// import { columns, data } from '$datas/category'; //测试数据
import { columns } from '$datas/category'; //测试数据
import { getCategoryListAsync } from '$redux/actions';

@connect(
  //穿数据
  (state) => ({ categories: state.categories }),
  //穿方法
  { getCategoryListAsync }
)
class Category extends Component {
  componentDidMount() {
    //请求首页数据
    this.props.getCategoryListAsync();
  }
  render() {
    const { categories } = this.props
    return <div>
      <Card title="分类列表" extra={
        <Button type="primary">
          <Icon type="plus" />
          分类列表
        </Button>
      }>
        <Table
          columns={columns}
          dataSource={categories}
          bordered
          pagination={{
            showSizeChanger: true,  //页数改变
            showQuickJumper: true,  //快速跳转
            pageSizeOptions: ['3', '6', '9', '12'],
            defaultPageSize: 3,
          }}
          //更改 key 的键
          rowKey="_id"
        />
      </Card>
    </div>
  }
}

export default Category;