import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'semantic-ui-react'
import Layout from '../components/layout'
import Image from '../components/image'

const ButtonExampleButton = () => <Button>Click Here</Button>

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <ButtonExampleButton />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
