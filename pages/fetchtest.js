//buat percobaan manggil public API 

function Fetchtest({ posts }) {
    return (
      <div className="text-center mt-20">
        <div className="font-bold"> Testing Fetch API using Dummy data from internet</div>
        {posts.map((post) => (
          <div>{post.id},{post.email}</div>
        ))}
      </div>
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
  
  export default Fetchtest;