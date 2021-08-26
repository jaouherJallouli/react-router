import "./App.css";
import MovieInfo from "./Components/MovieInfo/MovieInfo";
import MovieList from "./Components/MovieList/MovieList";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
	
	return (
		<BrowserRouter>
			<div className='App'>
				<MyNavBar />
				{/* <MovieList movies={movies}/> */}
				<Switch>
					<Route path='/MovieInfo/:movieId'>
						<MovieInfo />
					</Route>
					<Route path='/' component={MovieList} />
						
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
