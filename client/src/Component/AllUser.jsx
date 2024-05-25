import { useEffect, useState } from "react";

import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
  background:#000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`
const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`

const AllUser = () => {
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          // users.map(user => (
            <Tbody>
              {/* <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell> */}
              <TableCell>
                <Button variant="contained" style={{marginRight: 10}}>Edit</Button>
                <Button variant="contained"color="secondary">Delete</Button>
              </TableCell>
            </Tbody>
          // ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUser;