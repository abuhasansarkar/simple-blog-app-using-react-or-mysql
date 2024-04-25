import "./home.scss";
import { Link } from 'react-router-dom';

export const Home = () => {
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
    <div className="home">
      <div className="hero">
        <h1>Welcome to our Blog Website</h1>
     </div>
        <div className="postsArea">
          {posts.map(post => (
            <div className="posts"  key={post.id}>
              <div className="img">
                <img src={post.img} alt="img" />
              </div>
              <div className="postText">
                <h2> {post.title}</h2>
                <p>{post.desc}</p>
                
                <Link to="/post/545" >Learn More</Link>
              </div>
            </div>
          ))}
        </div>
  
    </div>
  );
};
