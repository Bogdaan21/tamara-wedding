import React from "react";
import { Link } from "react-router-dom";
import gl1 from "../../images/blog/img-3.jpg";
import gl2 from "../../images/blog/img-2.jpg";
import blogs from "../../api/blogs";
import { useParams } from "react-router-dom";

const BlogSingle = (props) => {
  const { id } = useParams();

  const BlogDetails = blogs.find((item) => item.id === id);

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-12 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={BlogDetails.blogSingleImg} alt="" />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By <Link to="/blog-single/1">{BlogDetails.author}</Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i> {BlogDetails.create_at}
                    </li>
                  </ul>
                </div>
                <h2>{BlogDetails.title}</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful.
                </p>
                <blockquote>
                  Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The
                  generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
                  words etc.
                </blockquote>
                <p>
                  I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                  I will give you a complete account of the system, and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
                  pleasure itself,
                </p>

                <div className="gallery">
                  <div>
                    <img src={gl1} alt="" />
                  </div>
                  <div>
                    <img src={gl2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
