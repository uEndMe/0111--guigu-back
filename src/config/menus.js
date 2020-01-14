const menus = new Map([
  ['/', {
    title: '首页',
    icon: 'home',
  }],
  ['/products', {
    title: '商品',
    icon: 'appstore',
    children: new Map([
      ['/products/category', {
        title: '分类管理',
        icon: 'bars',
      }],
      ['/products/product', {
        title: '商品管理',
        icon: 'tool',
      }],
    ])
  }],
  ['/user', {
    title: '用户管理',
    icon: 'user',
  }],
  ['/role', {
    title: '权限管理',
    icon: 'safety-certificate',
  }],
  ['/charts', {
    title: '图形图表',
    icon: 'area-chart',
    children: new Map([
      ['/charts/bar', {
        title: '柱状图',
        icon: 'bar-chart',
      }],
      ['/charts/pie', {
        title: '柱状图',
        icon: 'pie-chart',
      }],
      ['/charts/line', {
        title: '柱状图',
        icon: 'line-chart',
      }],
    ])
  }],
]);

// 暴露
export default menus;
