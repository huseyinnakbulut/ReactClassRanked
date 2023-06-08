import React, { Component } from 'react'
import './Deneme.css'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default class Login extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              id="icon"
              alt="User Icon"
              style={{
                borderRadius: '70%',
                height: '150px',
                width: '150px',
                marginBottom: '10px',
                marginTop: '30px',
              }}
            />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input
              type="submit"
              className="fadeIn fourth"
              defaultValue="deneme"
              placeholder="denem"
            />
          </form>
          <Button style={{ marginBottom: '10px' }} className="fadeIn fifth">
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/register'}
            >
              Hesabınız Yok mu?
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}
