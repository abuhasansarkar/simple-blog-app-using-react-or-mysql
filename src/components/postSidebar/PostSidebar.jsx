import "./postSidebar.scss";
import { Link } from "react-router-dom";

export const PostSidebar = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut quam tempora",
      desc: " consectetur adipisicing elit. Lorem ipsum dolor sit amet Est aut quam tempora  consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut quam tempora",
      desc: " consectetur adipisicing elit. Lorem ipsum dolor sit amet Est aut quam tempora  consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut quam tempora",
      desc: " consectetur adipisicing elit. Lorem ipsum dolor sit amet Est aut quam tempora  consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut quam tempora",
      desc: " consectetur adipisicing elit. Lorem ipsum dolor sit amet Est aut quam tempora  consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut quam tempora",
      desc: " consectetur adipisicing elit. Lorem ipsum dolor sit amet Est aut quam tempora  consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg",
    },
  ];
  return (
    <div className="postSidebar">
      <h2>Other posts you may like...</h2>
      {posts.map(post => (
        <div key={post.id} className="postCard">
          <img src={post.img} alt="postImg" />
          <h3>{post.title}</h3>
          <Link to="/post/65456"> Read More</Link>
        </div>
      ))}
    </div>
  );
};
