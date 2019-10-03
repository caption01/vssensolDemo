import React from 'react'
import { Form, Container, Button, Icon } from 'semantic-ui-react'

const RegisterForm = ({onRouteChange}) => {

    return (
        <Container style={{"width": "50%", "marginTop": "10%"}}>
            <Form>
                <Form.Group style={{"marginBottom": "3em", "justifyContent": "center"}}>
                    <h2>Register</h2>
                </Form.Group>
                <Form.Group>
                    <Form.Input label='First name' placeholder='First Name' width={8} />
                    <Form.Input label='Last Name' placeholder='Last Name' width={8} />
                </Form.Group>
                <Form.Group>
                    <Form.Input label='Email' placeholder='First Name' width={8} />
                    <Form.Input label='Password' placeholder='Last Name' width={8} type='password' />
                </Form.Group>
                <Form.Group style={{"justifyContent": "center"}}>
                    <Button onClick={() => onRouteChange('login')} icon labelPosition='left'>
                    <Icon name='left arrow' />
                    Cancel
                    </Button>
                    <Button onClick={() => onRouteChange('login')} icon labelPosition='right'>
                    Submit
                    <Icon name='right arrow' />
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )

}

export default RegisterForm