function Fetch({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.id},{post.email}</li>
        ))}
      </ul>
    )
  }
  
  export async function getStaticProps() {
    try{
       const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    } 
    }
    catch(error){
        console.log('error')
    }
  }
  
  export default Fetch