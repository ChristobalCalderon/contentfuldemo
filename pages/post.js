import { withRouter } from 'next/router'
import withLayout from '../src/comps/MyLayout.js'

const Content = withRouter(props => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  ))
  
const Page = withRouter(props => (
    <>
      <Content />
    </>
  ))

  export default withLayout(Page)