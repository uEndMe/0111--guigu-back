import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import menus from '$conf/menus';
import { mapEach } from '$utils'; //遍历 map

const { SubMenu, Item } = Menu;

@withRouter //高阶组件，传三大属性
class LeftNav extends Component {
  newMenus = (menus, start = '') => {
    return mapEach(menus, key => {
      const url = '/' + key;
      const i = menus.get(key);
      //渲染父级
      if (i.children) {
        return (
          <SubMenu
            key={key}
            title={
              <span>
                <Icon type={i.icon} />
                <span>
                  {/* {key} */}
                  <FormattedMessage id={key} />
                </span>
              </span>
            }
          >
            {/* 渲染子集，同下 */}
            {this.newMenus(i.children, url)}
          </SubMenu>
        )
        //渲染子集
      } else {
        return (
          <Item key={key}>
            <Link to={start + url}>
              <Icon type={i.icon} />
              <span>
                {/* {key} */}
                <FormattedMessage id={key} />
              </span>
            </Link>
          </Item>
        )
      }
    })
  }

  render() {
    const [, start, url] = this.props.location.pathname.split('/');
    return <Menu
      theme="dark"  //主题色
      defaultSelectedKeys={[url]}  //默认选中
      defaultOpenKeys={[start]}  //默认展开的菜单
      mode="inline"
    >
      {this.newMenus(menus)}
    </Menu>

  }
}

export default LeftNav;