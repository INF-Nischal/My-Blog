import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title }) => {
  return (
    <div className="BlogLists">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="Link" >
            <h2>{blog.title}</h2>
          </Link>
          <p className="blog-author">Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
