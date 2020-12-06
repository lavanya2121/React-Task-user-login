// import React from 'react'
// import {Redirect,BrowserRouter,Route,Link} from 'react-router-dom'
// import axios from 'axios'
// import Home from '../components/Home'
// import {connect} from 'react-redux'

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//                 // users:[],
//                 password:'',
//                 email:'',
//                 status:false,
//                 err:''
//                 // btnValue:false
//         }
//     }

//     handleEmail = (e) =>{
//         this.setState({email:e.target.value})
//     }
//     handlepassword=(e)=>{
//         this.setState({password:e.target.value})
//     }

//     handleSubmit = (e) =>{
//         e.preventDefault()
       
//     }

//     // componentDidMount(){
//     //     axios.get(`https://jsonplaceholder.typicode.com/users`)
//     //     .then((response)=>{
//     //         this.setState({users:response.data})
//     //     })
//     //     .catch((err)=>{
//     //         console.log('err')
//     //     })
       
//     // }

//     handleBtn=()=>{
//         let value = this.props.users.find(user=>{
//             if(user.email == this.state.email && user.password==this.state.password){
//                 return user
//             }
//         })
        
//         if(value){
//             localStorage.setItem('id',value.id)
//             this.setState(prevState=>{
//                 return{
//                     status:!prevState.status
//                 }
//             })
//         }
//         else{
//             this.setState({err:this.state.email})
//         }

//     }

//     // handleBtn = () =>{
//     //     axios.get(`https://jsonplaceholder.typicode.com/users?email=${this.state.email}`)
//     //     .then((response)=>{
//     //         if(response.data.length > 0){
//     //         this.setState(prevState=>{
//     //             return{
//     //                 users:response.data,
//     //                 btnValue:!prevState.btnValue,
//     //                 err:''

//     //             }
//     //         })
//     //     }
//     //     else{
//     //         this.setState({err:'email not found'})
//     //     }
//     //     })
//     //     .catch((err)=>{
//     //         this.setState({err:'error message'})
//     //     })
//     // }
//     render(){
//         console.log(this.state.status)
//         if(this.state.status === true){
//             return <BrowserRouter><Link to="/home"></Link><Route to="/home" component={Home}/></BrowserRouter>
//         }
        
//         return(
//             <BrowserRouter>
//             <div align="center">
//                 <form onSubmit={this.handleSubmit} className="col-6" style={{marginTop:'15%',border:'1px solid black',height:250}} >
//                     <div className="form-group" className="col-sm-6">
//                 <h3>User's Login Form</h3><br/>
//                 <label htmlFor="email">UserName:    </label>
//                 <input type="email" id="email" className="form-control" placeholder="enter users email" onChange={this.handleEmail} value={this.state.email}/><br/>

//                 <label htmlFor="password">Password:    </label>
//                 <input type="password"  id="password" className="form-control" placeholder="enter users password" onChange={this.handlepassword} value={this.state.password}/><br/></div>

//                 <input type="button" value="Login" className="btn btn-primary" style={{width:120}} onClick={this.handleBtn}/>
//                 {/* {
//                     this.state.err.length > 0 &&  (this.state.err.includes('@') ? <h4>Email not found</h4> : <h4>Email doesn't contain '@' symbol</h4>)
//                 } */}
               
//                 </form>
//             </div>
            
            
//             </BrowserRouter>
            
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         users : state.usersData.users
//         // posts : state.usersData.posts
//     }
// }

// export default connect(mapStateToProps)(App)

import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from 'react-router-dom';
import '../../components/Login/Login.css'
// import { Header } from '../header/header';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: false,
            helperText: '',
            username: '',
            password: '',
            isAuthenticated: false
        }

        this.userRef = React.createRef()
        this.passRef = React.createRef()
    };

    handleAuth = () => {
        const user = 'hruday@gmail.com';
        const pass = 'hruday123';
        const { username, password } = this.state;
        if (username !== user && password !== pass) {
            this.setState({
                error: true,
                helperText: 'Incorrect Username and Password',
            })
        } else {
            this.setState({
                isAuthenticated: true
            })
            sessionStorage.setItem("access-token", 'XYZ');
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            username: this.userRef.current[0].value,
            password: this.userRef.current[1].value,
        }, () => {
            this.handleAuth();
        })
    }

    render() {
        const { isAuthenticated } = this.state;

        const CardRenderer = () => {
            const {
                error,
                helperText
            } = this.state;
            return (
                <Card>
                    <CardContent>
                        <div
                            style={{ height: '400px' }}
                            className='d-flex flex-column p-5 vh-75 justify-content-between'>
                            <Typography variant="h4" gutterBottom>
                                LOGIN
                            </Typography>
                            <form
                                method='post'
                                ref={this.userRef}
                                className='form-container'
                                onSubmit={this.handleSubmit}>
                                <TextField
                                    label="Username *"
                                    name='username'
                                    error={error}
                                />
                                <TextField
                                    label="Password *"
                                    name='password'
                                    error={error}
                                    helperText={helperText}
                                />
                                <Button
                                    className='w-25 d-inline'
                                    variant="contained"
                                    type='submit'
                                    color="primary">
                                    Login
                                </Button>
                            </form>
                        </div>
                    </CardContent>
                </Card>
            )
        }

        return (
            <Fragment>
                {/* <Header /> */}
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='d-flex justify-content-center align-items-center vh-100'>
                            <div className='login-container w-50'>
                                {isAuthenticated ? <Redirect to="/profile" /> : <CardRenderer />}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { Login };