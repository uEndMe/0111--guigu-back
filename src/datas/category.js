import React from 'react';
import { Button } from 'antd';



export const columns = [
  {
    title: '品类名称',
    dataIndex: 'name',
  },
  {
    title: '操作',
    width: '33.33%',
    // dataIndex: 'operation',
    render: () => {
      return <div>
        <Button type='link' style={{ marginLeft: -15, }} >修改</Button>
        <Button type='link' >删除</Button>
      </div>
    }
  },
]

export const data = [
  {
    key: 1,
    name: '鼠标',
  },
  {
    key: 2,
    name: '键盘',
  },
  {
    key: 3,
    name: '显示屏',
  },
  {
    key: 4,
    name: '移动硬盘',
  },
  {
    key: 5,
    name: 'CPU',
  },
  {
    key: 6,
    name: '内存条',
  },
  {
    key: 7,
    name: 'U盘',
  },
  {
    key: 8,
    name: '电源',
  },
];

