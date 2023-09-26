import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Jane Doe");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);
    
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
      navigate("/");
    })
  };

  return (
    <div className="create-blog">
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Jane Doe">Jane Doe</option>
          <option value="John Smith">John Smith</option>
        </select>
        { !isPending && <button>Create Blog</button> }
        { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
