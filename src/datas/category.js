import React from 'react';
import { Button } from 'antd';



export const columns = [
  {
    title: '品类名称',
    dataIndex: 'categoryName',
  },
  {
    title: '操作',
    width: '33.33%',
    dataIndex: 'operation',
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
    categoryName: '鼠标',
  },
  {
    key: 2,
    categoryName: '键盘',
  },
  {
    key: 3,
    categoryName: '显示屏',
  },
  {
    key: 4,
    categoryName: '移动硬盘',
  },
  {
    key: 5,
    categoryName: 'CPU',
  },
  {
    key: 6,
    categoryName: '内存条',
  },
  {
    key: 7,
    categoryName: 'U盘',
  },
  {
    key: 8,
    categoryName: '电源',
  },
];

