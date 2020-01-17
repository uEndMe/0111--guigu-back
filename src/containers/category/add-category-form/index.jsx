import React, { Component } from 'react';
import ProTypes from 'prop-types';
import { Form, Input } from 'antd';

//传：表单方法
@Form.create()
//添加分类表单
class AddForm extends Component {
  static propTypes = {
    categoryName: ProTypes.string
  }
  render() {
    const { form: { getFieldDecorator }, categoryName } = this.props;
    const Item = Form.Item;
    return (
      <Form>
        <Item label="品类名称">
          {getFieldDecorator(
            'categoryName',
            {
              rules: [{ required: true, message: '请输入分类名称' }],
              //初始值
              initialValue: categoryName
            }
          )(<Input placeholder="请输入分类名称" />)}
        </Item>
      </Form>
    )
  }
}

export default AddForm;
