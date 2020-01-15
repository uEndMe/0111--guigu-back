const menus = new Map([
  ['home', {
    title: '首页',
    icon: 'home',
  }],
  ['products', {
    title: '商品管理',
    icon: 'appstore',
    children: new Map([
      ['category', {
        title: '分类管理',
        icon: 'bars',
      }],
      ['product', {
        title: '商品管理',
        icon: 'tool',
      }],
    ])
  }],
  ['user', {
    title: '用户管理',
    icon: 'user',
  }],
  ['role', {
    title: '权限管理',
    icon: 'safety-certificate',
  }],
  ['charts', {
    title: '图形图表',
    icon: 'area-chart',
    children: new Map([
      ['bar', {
        title: '柱状图',
        icon: 'bar-chart',
      }],
      ['pie', {
        title: '饼形图',
        icon: 'pie-chart',
      }],
      ['line', {
        title: '折线图',
        icon: 'line-chart',
      }],
    ])
  }],
]);

// 暴露
export default menus;
