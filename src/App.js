import React from 'react'
import HomePage from './pages/homepage/homepage.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

//connect is bridge b/w reducer and react
import {connect} from 'react-redux'

import { Switch, Route,Redirect } from 'react-router-dom'

import Header from './components/header/header.component';

import './App.css'
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component'



import {setCurrentUser} from './redux/user/user.actions'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
	
	componentDidMount(){
		//console.log(this.props)
		const {setCurrentUser} = this.props

		//whenever an authentication state gets changed we are going to get the details of authentication details and 
		//store it our app
		
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
		
			//sign up
			if(user){
				const userRef = await createUserProfileDocument(user)

				userRef.onSnapshot( snapshot => {
					const user = {
						//user parameter
							id: snapshot.id,
							...snapshot.data()
					}
					//calling function
					setCurrentUser(user)
					
				})
				
			}

			//Google sign in method and manual signin

			//this.setState({currentUser:user})
			//console.log(this.state)
		})
	}


	//unmounting the component state
	componentWillUnmount(){
		this.unsubscribeFromAuth()
	}

render(){
	const {currentUser} = this.props
	return(
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/shop' component={ShopPage}/>
				<Route 
					exact 
					path='/signin' 
					render = {
						() => currentUser ?
						(<Redirect to='/'/>)
						:
						(<SignInAndSignUpPage/>)
					}
					/>
					<Route exact path='/checkout' component={CheckOutPage}/>
			</Switch>
		</div>
		);
	}
}



const mapDispatchToProps = dispatch => (
	{
		//key          : call Back function -> user =>dispatch(setCurrentUser(user))
		setCurrentUser : function(user){
			dispatch(setCurrentUser(user))

		}
	}
)
const mapStateToProps = ({user}) =>(
	{
		currentUser:
		user.currentUser
	}
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
//high order component
//connect - HOC, it take 2 parameters
//1.mapStateToProps => subscribe the data from the store
//2.mapDispatchToProps => DIspatching Actions and Payload[data] to the reducer
//2.1 =>Takes an object as parameter with multiple actions can be dispatched
//	  => user =>dispatch(setCurrentUser(user))