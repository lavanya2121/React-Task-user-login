// import React from 'react'
// import Login from '../components/Login'
// import {Redirect,BrowserRouter,Route,Link} from 'react-router-dom'
// import axios from 'axios'
// import {connect} from 'react-redux'
// import data from '../data.json'

// class UserHome extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             status:false,
//             // user:{},
//             // posts:[]
//         }
//     }

//     handleLogout=()=>{
//         localStorage.clear('id')
//         this.setState(prevState=>{
//             return{
//                 status:!prevState.status
//             }
//         })
//     }

//     // componentDidMount(){
//     //     const id = localStorage.getItem('id')
//     //     console.log(id)
//     //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//     //     .then((response)=>{
//     //         this.setState({user:response.data})
//     //     })
//     //     .catch((err)=>{
//     //         console.log('err')
//     //     })
//     //     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//     //     .then((response)=>{
//     //         this.setState({posts:response.data})
//     //     })
//     //     .catch((err)=>{
//     //         console.log('err')
//     //     })

//     // }

//     render(){
//         console.log(this.state.user)
//         if(this.state.status === true){
//             return <BrowserRouter><Link to="/"></Link><Route to="/" component={Login}/></BrowserRouter>
//         }
//         return(
//             <BrowserRouter>
//             <div align="center">
//             <div className="col-10">
//                 <div className="row"> 
//                     <div className="col"><h4 align="left">user's blog</h4></div>
                
//                <div className="col" align="right"><Link onClick={this.handleLogout}  align="right"><h4>Logout</h4></Link></div>
//                 </div> <hr/>
//                      {this.props.posts.length > 0 ?(<div align="left"><h2>users information</h2><h6 className="display-4">NAME-{this.props.user.name}</h6><h6 className="display-4">Contact no - {this.props.user.phone}</h6><hr/>
//                      <ul className="list-group">
//                     {
//                         this.props.posts.map((post,i)=>{
//                         return <li key={i} className="list-group-item"><h4><small>{post.title}</small></h4></li>
//                         })
//                     }</ul></div>) : <h4>Loading.......</h4>}
                
//             </div>
//             </div>
//             </BrowserRouter>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         user:state.usersData.users.find(user=>user.id==localStorage.getItem('id')),
//         posts:state.usersData.posts.filter(post=>post.userId==localStorage.getItem('id'))
//     }
// }

// export default connect(mapStateToProps)(UserHome)

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Sample from '../../assets/images/sample.jpeg';
import AvatarImg from '../../assets/images/avatar.jpg';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../components/Home/Home.css'
// import { mockData } from '../../mock-data';
import { mockData } from '../../components/Home/mock-data-1';
import axios from 'axios';

const accessToken = `IGQVJXMDFOSnJHMGlCNXJJMDdQdW5WbFQ2VGlTU3BoOGVXUGVoXzZALcWtrN3ZAUajFILTlVX1dfNWJma3V6LW5ubEsxclpfNk1WZA3E4dzZAwUVlkdWw1b3pzbl9JX3JHT1ViQ3dLNXY0V18takJzQWZAUU0NmdEhSSEN4OVJ3`

class Home extends Component {

    constructor (props) {
        super(props)

        this.state = {
            newsFeedData: []
        };
    }

    componentDidMount () {
        const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`;

        axios.get('https://akshatsoni.com/').then((data) => {
            const allImageData = mockData.data;
            // let caption = ''
            if (allImageData && Array.isArray(allImageData) && allImageData.length > 0) {
                for (let i = 0; i < 2; i++) {
                    // caption = allImageData[i].caption;
                    axios.get(`https://graph.instagram.com/${allImageData[i].id}?fields=id,media_type,media_url,username,timestamp,caption&access_token=${accessToken}`)
                    .then((imageAttributes) => {
                        imageAttributes.data && this.setState((state) => {
                            const newsFeedData = state.newsFeedData.concat(imageAttributes.data)
                                return {
                                    newsFeedData
                                }
                            })
                    })
                }
            }
        });
    }

    render () {

        const { newsFeedData } = this.state;

        const NewsFeedRenderer = () => {
            return newsFeedData.map(
                (newsFeedImages) => (
                    <Card className='w-40 vh-50 m-4'>
                        <CardContent>
                            <div className='card-header-logo'>
                                <Avatar alt="Remy Sharp" src={AvatarImg} />
                                <div className='card-header-label'>
                                    <span>upgrad_sde</span>
                                    <span>30/11/2020 13:00</span>
                                </div>
                            </div>
                            <img className='w-100' src={newsFeedImages.media_url} alt='sample' />
                            <Divider className='my-2' />
                            <span>Team of great people at upgrad</span>
                            <div>
                                <TextField className='comment-input' id="standard-basic" label="Add a comment" />
                                <Button className='comment-add-btn' variant="contained" color="primary">
                                    Add
                            </Button>
                            </div>
                        </CardContent>
                    </Card>
            ))
        }

        return (
            <div className='newsfeed-container'>
                { Array.isArray(newsFeedData) && newsFeedData.length > 0 ? NewsFeedRenderer() : <CircularProgress />}
            </div>
        )
    }

}

export { Home }