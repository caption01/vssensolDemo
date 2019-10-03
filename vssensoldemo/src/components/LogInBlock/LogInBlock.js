import React from 'react'
import { Button, Divider, Form, Grid, Segment, Popup } from 'semantic-ui-react'

const LogInBlock = () => {
  
  return (
    <div className='ui centered grid'>
      <Segment placeholder style={{"width": "50%", "marginTop": "10%"}} >
        <Grid columns={2} relaxed='very' stackable centered>
          <Grid.Column>
            <Form>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
              />

              <Button content='Login' basic color='grey' />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Popup wide trigger={<Button content='visitor' icon='user outline' />} on='click'>
              <Grid divided columns='equal'>
                <Grid.Column>
                  <Popup
                    trigger={<Button basic color='grey' content='go inside' fluid />}
                    content='Look our business'
                    position='top center'
                    size='tiny'
                    inverted
                  />
                </Grid.Column>
                <Grid.Column>
                  <Popup
                    trigger={<Button basic color='grey' content='register' fluid />}
                    content='Be partner'
                    position='top center'
                    size='tiny'
                    inverted
                  />
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </div>
  )

}

export default LogInBlock