import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import Article from './components/Article/Article'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/articles/:id' element={<Article />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
