import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form name="test-form" method="POST" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="test-form" />
      <label>
        Name:
      </label>
      <input name="name" type="text" />
      <button type="submit">Send</button>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
