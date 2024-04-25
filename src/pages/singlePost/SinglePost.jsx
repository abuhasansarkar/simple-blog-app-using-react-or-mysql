import { PostSidebar } from "../../components/postSidebar/PostSidebar";
import "./singlePost.scss";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="postArea">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/221159/pexels-photo-221159.jpeg"
            alt=""
          />
        </div>
        <div className="content">
          <div className="userInfo">
            <div className="user">
              <img src="../../../src/assets/user.png" alt="userImg" />
              <div className="info">
                <span>AbuHasan</span>
                <p>posted 5 days ago</p>
              </div>
            </div>
            <div className="postInfo">
              <img src="../../../src/assets/pen.png" alt="penIcon" />
              <img src="../../../src/assets/delete.png" alt="deleteIcon" />
            </div>
          </div>
          <hr />
          <div className="postContent">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              recusandae error non!
            </h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus illo harum perspiciatis illum nemo, adipisci odio
              voluptates, nostrum porro deleniti consectetur exercitationem iste
              eveniet itaque vitae at alias quam expedita. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Dolores, rerum exercitationem
              ipsam eligendi minus incidunt totam nobis consequatur harum autem
              voluptatem eum vel earum ad,
              <br />
              <br />
              dolore, fugit repudiandae natus. Quia labore illum dolores cumque
              a debitis perspiciatis numquam expedita suscipit voluptatum
              praesentium, assumenda repellendus odit placeat quibusdam quis
              esse ratione soluta id temporibus illo minus animi natus
              reprehenderit! Quod, quia praesentium sequi minima laborum
              consequuntur officiis eum voluptatum tempora et explicabo
              blanditiis non doloremque ipsa aut.
              <br />
              <br />
              consequatur ratione temporibus architecto dignissimos quis sit
              libero rerum magni. Fuga nesciunt distinctio delectus nostrum
              fugit voluptatibus explicabo! Temporibus, fuga. Eos aliquam
              accusantium nesciunt.
            </p>
          </div>
        </div>
      </div>

      <div className="postSidebar">
        <PostSidebar />
      </div>
    </div>
  );
};
