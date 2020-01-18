import React, { Component } from 'react';
import { Card, Button, Icon, Table, Modal, message } from 'antd';
import { connect } from 'react-redux';

// import { data } from '$datas/category'; //测试数据
import { getCategoryListAsync, addClassAsync, setClassAsync, delClassAsync } from '$redux/actions';
import AddForm from './add-category-form';

@connect(
  //穿数据
  (state) => ({ categories: state.categories }),
  //穿方法
  {
    getCategoryListAsync,
    addClassAsync,
    setClassAsync,
    delClassAsync,
  }
)
class Category extends Component {
  state = {
    action: '',
    handleData: {},
  }
  componentDidMount() {
    //请求首页数据
    this.props.getCategoryListAsync();
  }


  _getData = (fn) => {
    const form = this.AddForm.props.form;
    form.validateFields((err, values) => {
      if (err) return;
      //发送请求，更新后端数据
      fn(values, form);
    })
  }

  //删除分类
  openDel = (category) => {
    return () => {
      Modal.confirm({
        title: `您确认要删除${category.name}分类吗？`,
        onOk: () => {
          this.props.delClassAsync(category._id)
            .then(() => {
              message.success('删除分类成功~');
            })
            .catch((err) => {
              message.error(err);
            })
        }
      })
    }
  }

  //添加分类
  add = () => {

    this._getData(({ categoryName }, { resetFields }) => {
      //发送请求，更新后端数据
      this.props.addClassAsync(categoryName)
        .then(() => {
          message.success('添加分类成功~');
          resetFields();  //清空
          this.handleDialog('')();  //关闭
        })
        .catch(err => {
          message.error(err);
        })
    })
  }

  //修改分类
  set = () => {
    this._getData(({ categoryName }) => {
      const { handleData: { _id } } = this.state
      //发送请求，更新后端数据
      this.props.setClassAsync(_id, categoryName)
        .then(() => {
          message.success('更新分类成功~');
          this.handleDialog('')();  //关闭
        })
        .catch(err => {
          message.error(err);
        })
    })
  }

  //操纵对话框
  handleDialog = (action, handleData) => {
    return () => {
      this.setState({ action, handleData: handleData || {} })
    }
  };

  render() {
    //table 表头
    const columns = [
      {
        title: '品类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width: '33.33%',
        // dataIndex: 'name',
        render: category => {
          //render 传参：
          //默认整个数据，
          //dataIndex,可以指定属性
          return <div>
            <Button type='link' onClick={this.handleDialog('set', category)} style={{ marginLeft: -15, }} >修改</Button>
            <Button type='link' onClick={this.openDel(category)} >删除</Button>
          </div>
        }
      },
    ];

    //对话框
    const str = {
      add: '添加分类',
      set: '修改分类',
      del: '删除分类',  //这个用确认框做了，不用写在这里
    }

    const {
      props: { categories },
      state: { action, handleData },
    } = this;
    return <Card title="分类列表" extra={
      <Button type="primary" onClick={this.handleDialog('add')}>
        <Icon type="plus" />
        添加分类
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
      <Modal
        title={str[action]}
        visible={!!action}
        onOk={this[action]}
        onCancel={this.handleDialog('')}
        width={300}
      >
        {/* 获取子组件的 from  */}
        <AddForm
          categoryName={handleData.name}
          wrappedComponentRef={form => this.AddForm = form} />
      </Modal>

    </Card >
  }
}

export default Category;