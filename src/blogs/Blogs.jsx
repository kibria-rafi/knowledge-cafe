import { useState } from "react";
import { useEffect } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (blog) => {
        const newCart = [...cart, blog];
        console.log(newCart);
        setCart(newCart);
        
    }
    const[blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("Data.json")
        .then(response=> response.json())
        .then(data=> setBlogs(data))
    },[])
    
    return (
        <div>
            <h2 className="text-center font-bold py-3">This is Our blog:</h2>
            <h2 className="text-center font-bold py-3">Total Read {cart.length}</h2>
            <div  className="grid grid-cols-3 gap-y-4 mb-10">
            {
                blogs.map(blog=><Blog key={blog.id}  handleAddToCart={handleAddToCart} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;