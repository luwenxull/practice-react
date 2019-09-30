import React, { Component } from 'react';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

class Menu extends Component {
  render() {
    return (
      <Drawer
        // open
        variant="persistent"
      >
        <List>
          <ListItem button>
            <Link to="/code-split">代码分割</Link>
          </ListItem>
          <ListItem button>
            <Link to="/context">动态主题</Link>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    );
  }
}

export default Menu;
