import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(
      () => {
        console.log("Blog Deleted");
        navigate("/");
      }
    )
  }

  return (
    <div className="blog-details">
      {error && <div className="BlogLists">{error}</div>}
      {isPending && <div className="BlogLists">Loading...</div>}
      {data && 
        <article className="blog-preview">
            <h2>{data.title}</h2>
            <p className="blog-body">{data.body}</p>
            <p className="blog-author">Written by {data.author}</p>
            <button onClick={handleDelete} className="delete">Delete</button>
        </article>}
    </div>
  );
};

export default BlogDetails;
