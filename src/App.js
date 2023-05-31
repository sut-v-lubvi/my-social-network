import './App.css';
import Header from './js_components/Header';
import NavMeny from './js_components/NavMeny';
import Profile from './js_components/Profile';

function App() {
  return (
	<div className='about'>
			<div className='header'><Header/></div>
			<nav className='Nav_meny'><NavMeny/></nav>
			<div className='Content_block'><Profile/></div>
	</div>
  );
}

export default App;
