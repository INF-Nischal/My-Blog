import BlogsList from "./BlogsList";
import useFetch from "../customHooks/useFetch";

const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="Home">
      {error && <div className="BlogLists">{error}</div>}
      {isPending && <div className="BlogLists">Loading...</div>}
      {data && <BlogsList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
