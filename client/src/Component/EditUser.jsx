import { useState, useEffect} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";

const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
  margin-top: 20px;
}
`

const intialValue = {
  name: '',
  userName: '',
  email: '',
  phone: '',
}

const EditUser = () => {
  const [user, setUser] = useState(intialValue);

  const onValueChange = (e)  => {
    setUser({...user, [e.target.name]: e.target.value});
  }
  return (
    <Container>
      <Typography variant="h3">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="userName" value={user.userName}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Pnone Number</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button  variant="contained">Edit User</Button>
        {/* onClick={() => addUserDetails()} */}
      </FormControl>
    </Container>
  )
}

export default EditUser;