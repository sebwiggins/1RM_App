import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
      <Menu>
      <Link to="/" >
        <Menu.Item
          name='1RM Tracker'
          active={activeItem === '1RM Tracker'}
          onClick={this.handleItemClick}
        >
          1RM Tracker
        </Menu.Item>
        </Link>
        <Link to="/calculator" >
        <Menu.Item
          name='% 1RM Calculator'
          active={activeItem === '% 1RM Calculator'}
          onClick={this.handleItemClick}
        >
          % 1RM Calculator
        </Menu.Item>
        </Link>
        <Link to="/leaderboard" >
        <Menu.Item
          name='Leaderboard'
          active={activeItem === 'Leaderboard'}
          onClick={this.handleItemClick}
        >
          Leaderboard
        </Menu.Item>
        </Link>
      </Menu>

      
      </div>

    )
  }
}

