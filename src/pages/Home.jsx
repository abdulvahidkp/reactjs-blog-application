import React from 'react'
import Feed from '../components/Feed'

function Home({posts}) {
  return (
    <main className='grid sm:grid-cols-2 xl:grid-cols-3'>
      {posts.length?(
        <Feed posts={posts}/>
      ):(
        <p style={{marginTop:"2rem"}}> No posts to display</p>
      )}
    </main>
  )
}

export default Home;