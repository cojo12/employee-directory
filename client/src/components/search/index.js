import React from "react";
import { Form, Container, Divider } from 'semantic-ui-react'

const SearchUsers = (props) => {
  return (
    <Container>
      <Form>
        <Form.Group inline>
          <Form.Field>
            <label for="employeeSearch"></label>
            <Form.Input
            type="search"
            name="search"
            id="employeeSearch"
            placeholder="search employees ... "
            icon="search"
            onChange={(e) => {props.inputChange(e)}}
            />
          </Form.Field>
        </Form.Group>
        </Form>
      <Divider hidden/>
    </Container>
  );
}

export default SearchUsers;