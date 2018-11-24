import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <form name="test-form" method="POST" data-netlify="true">
      <label>
        Name:
      </label>
      <input name="name" type="text" />
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
