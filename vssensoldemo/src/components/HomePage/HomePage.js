import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './HomePage.css'


class HomePage extends Component {

    constructor(){
        super()
        this.state = {
            activeItem: 'home'
        }
      }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state

        return (
            <Menu id='mainMenu' color={'green'}>
                <Menu.Item header>VSS ensol</Menu.Item>
                <Menu.Item
                    name='aboutUs'
                    active={activeItem === 'aboutUs'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Key Value'
                    active={activeItem === 'Key Value'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Service'
                    active={activeItem === 'Service'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Contact'
                    active={activeItem === 'Contact'}
                    onClick={this.handleItemClick}
                />
                
                <Menu.Menu position='right'>
                    <Menu.Item
                    name='leave'
                    active={activeItem === 'leave'}
                    onClick={() => {
                        this.props.onRouteChange('')
                    }}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default HomePage