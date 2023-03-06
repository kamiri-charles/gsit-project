import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home';
import './App.scss'

function App() {
  return (
    <div className="App">
		<Router basename='gsit-project'>
			<Routes>
				<Route exact path='/' element={ <Home />} />
				<Route path='/sign-in' element={ <SignIn /> } />
				<Route path='/sign-up' element={ <SignUp /> } />
			</Routes>
		</Router>
    </div>
  );
}

export default App;