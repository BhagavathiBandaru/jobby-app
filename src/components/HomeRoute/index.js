import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const HomeRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-description">
            Millions of people are searching for jobs,salary,company
            reviews.Find the job that fits your abilities and skills.
          </p>
          <Link to="/">
            <button type="button" className="get-the-button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeRoute
