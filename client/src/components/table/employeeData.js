import React, { useState, useEffect } from "react";
import SearchEmployees from '../search/index';
import API from "../../util/api";
import { Table, Divider } from 'semantic-ui-react';
import Moment from 'react-moment';

const EmployeeTable = () => {
  const [personInfo, setpersonalInfo] = useState({users: ""});
  useEffect(() => {
    API.getUsers().then((dataReturn) => {
      setpersonalInfo({
        users: dataReturn.data.results,
        filteredUsers: dataReturn.data.results,
      });
    });
  }, []);
  const inputChange = (e) => {
    const filter = e.target.value;
    const tempUserState = personInfo.users;
    const filteredList = personInfo.users.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    setpersonalInfo({ filteredUsers: filteredList, users: tempUserState });
  };
  const headings = [
    {
      name: "Image",
      width: "10%",
    },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%"},
    {name: "Email", width: "20%"},
    {name: "DOB", width: "10%"}
  ];
  return (
    <div>
      <SearchEmployees inputChange={inputChange} />
      <Divider hidden />
      <Table basic='very'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>DOB</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      
      {personInfo.users[0] !== undefined && personInfo.users[0].name !== undefined ? (
                personInfo.filteredUsers.map(({login, name, picture, phone, email, dob}) => {
                    return (
                        <Table.Row key = {login.uuid}>
                            <Table.Cell data-th = "image">
                                <img src={picture.medium} alt={name.first}/>
                            </Table.Cell>
                            <Table.Cell>
                                {name.first} {name.last}
                            </Table.Cell>
                            <Table.Cell>
                                {phone}
                            </Table.Cell>
                            <Table.Cell>
                                {email}
                            </Table.Cell>
                            <Table.Cell>
                              <Moment format="MMM-DD-YYYY">
                                {dob.date}
                              </Moment>
                            </Table.Cell>
                        </Table.Row>
                    )
                })
            ): (<></>)}
      </Table.Body>
      </Table>
    </div>
  );
};
export default EmployeeTable;