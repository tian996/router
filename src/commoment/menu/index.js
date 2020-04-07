import React, { useState } from 'react';
import { Menu } from 'antd';
import Router from '../router/router'
import { withRouter, Link } from 'react-router-dom';

const { SubMenu } = Menu;



function menuItemDom(route, Path) {
  return (<Menu.Item key={Path}><Link to={Path}>{route.name}</Link></Menu.Item>)
}

function subMenuDom(route, Path) {
  return (
    <SubMenu
      key={Path}
      title={
        <span>
          <span>{route.name}</span>
        </span>
      }
    >
      {
        route.children.map(item => {
          return item.children ? subMenuDom(item, Path + item.path) : menuItemDom(item, Path + item.path)
        })
      }
    </SubMenu>
  )
}

export default withRouter(function (props) {
  const [select, setSelect] = useState(null);
  const { match } = props;
  return (
    <Menu
      mode="inline"
      style={{ width: '20%' }}
      defaultSelectedKeys={match.path}
      openKeys={select|| [match.path.match(/\/\w+/g)[0]]}
      onOpenChange={(key) => { setSelect(key) }}
    >
      {
        Router.length ? Router.map(item => {
          return item.children ? subMenuDom(item, item.path) : menuItemDom(item, item.path)
        })
          :
          ''
      }
    </Menu>
  );
})