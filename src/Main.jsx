import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllRoutes from './Routes';

const App = () => (
	<Router>
		<Routes>
			<Route path="*" element={<AllRoutes />} />
		</Routes>
	</Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
