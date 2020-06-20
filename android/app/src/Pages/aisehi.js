
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { render } from "@testing-library/react";
import { Link } from "react-router";
import axios from 'axios';


const usestyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class CheckBalance  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      AccountNo: '',
      
    };
  }
  
  ChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = e => {

    e.preventDefault()
    const var1 = this.state.AccountNo;
    console.log(var1)
     console.log(this.state)
   
    axios
      .get('http://192.168.43.9:8080/api/v1/account_detail/'+var1)
      .then(response => {
        console.log(response)
        alert("Sucessfully Registered")
        alert(response.data.amount)
      })
      .catch(error => {
        console.log(error)
        alert("not Registered")
      })

  }



 render() { 
   const { AccountNo } = this.state 
     return (
    <Grid container component="main" className={usestyles.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={usestyles.paper}>
          <Avatar className={usestyles.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            CheckBalance
          </Typography>
             <form className={usestyles.form} onSubmit={this.submitHandler} >
            <TextField
              type="text"
              variant="outlined"
              margin="normal"
               required
              fullWidth
              id="account"
              label="Account Number"
              name="AccountNo"
              value={AccountNo}
               onChange={this.ChangeHandler} 
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={usestyles.submit}
            >
              Check Balance
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )   
}
}