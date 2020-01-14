import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import menus from '$conf/menus';
import { mapEach } from '$utils'; //遍历 map

const { SubMenu, Item } = Menu;

@withRouter //高阶组件，传三大属性
class LeftNav extends Component {
  newMenus = (menus) => {
    return mapEach(menus, key => {
      const i = menus.get(key);
      //渲染父级
      if (i.children) {
        return (
          <SubMenu
            key={key}
            title={
              <span>
                <Icon type={i.icon} />
                <span>{i.title}</span>
              </span>
            }
          >
            {/* 渲染子集，同下 */}
            {this.newMenus(i.children)}
          </SubMenu>
        )
        //渲染子集
      } else {
        return (
          <Item key={key}>
            <Link to={key}>
              <Icon type={i.icon} />
              <span>{i.title}</span>
            </Link>
          </Item>
        )
      }
    })
  }

  render() {
    const { pathname } = this.props.location;
    return <Menu
      theme="dark"  //主题色
      defaultSelectedKeys={[pathname]}  //默认选中
      defaultOpenKeys={['/' + pathname.split('/')[1]]}  //默认展开的菜单
      mode="inline"
    >
      {this.newMenus(menus)}
    </Menu>

  }
}

export default LeftNav;