import withLayout from '../src/comps/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import uuidv1 from 'uuid/v1'

const Index = (props) => (
  <>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={uuidv1()}>
          <Link as={`/p/${show.show.id}`} href={`/post?id=${show.show.id}`}>
            <a>{show.show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  console.log(data);

  return {
    shows: data
  }
}

export default Index