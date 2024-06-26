import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author,setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then( () => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <label htmlFor="">Blog Body:</label>
                <textarea
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    required
                ></textarea>
                <label htmlFor="">Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                {!isPending && <button>Add Button</button>}
                {isPending && <button>Add Button</button>}

            </form>
        </div>
    );
}

export default Create;