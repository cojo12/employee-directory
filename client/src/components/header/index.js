import React from "react";
import { Header, Icon, Divider } from 'semantic-ui-react'

const HeaderUsers = () => (
  <div>
    <Divider hidden />
    <Header color='black'as='h2' icon textAlign='center'>
    <Icon circular inverted color='white' name='users'/>
    </Header>
    <Divider segment />
  </div>
)

export default HeaderUsers
