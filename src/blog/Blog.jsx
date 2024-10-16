

const Blog = ({blog,handleAddToCart}) => {
    const {title, cover,author_img,author,posted_date,reading_time} = blog;
    return (
        <div className="w-96 mx-auto ">
            <div><img className="h-80 w-96" src={cover} alt="" /></div>
            <h2 className=" font-semibold text-blue-500">{title}</h2>
            <div  className="flex gap-2 items-center">
            <img className="h-8 rounded-full" src={author_img} alt="" />
            <h2 className="text-black font-semibold">{author}</h2>
            <h3 className="text-orange-600 text-xs">posted Date: {posted_date}</h3>
            </div>
            <button onClick={()=>handleAddToCart(blog)} className="rounded-lg px-3 py-1 bg-green-600 text-white font-semibold">Mark as Read Read</button>
            
        </div>
    );
};

export default Blog;