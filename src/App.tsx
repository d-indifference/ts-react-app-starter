import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

export const App: React.FC = () => {
	return (
		<div className={ 'App' }>
			<header className={ 'App-header' }>
				<img src={ logo } className={ 'App-logo' } alt={ 'logo' } />

				<Router>
					<Routes>
						<Route
							path={ '/' }
							element={
								<>
									<p>
										Edit <code>src/App.tsx</code> and save to reload.
									</p>
									<a
										className={ 'App-link' }
										href={ 'https://github.com/d-indifference?tab=repositories' }
										target={ '_blank' }
										rel={ 'noopener noreferrer' }
									>
										See other repositories
									</a>
								</>
							}
						/>

						<Route path={ '*' } element={ <p>Not found :(</p> } />
					</Routes>
				</Router>
			</header>
		</div>
	);
};
