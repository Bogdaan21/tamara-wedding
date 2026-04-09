import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../../data/blog.json";

const BlogSingle = (props) => {
  const { id } = useParams();

  const BlogDetails = blogs.find(
    (item) => String(item.id) === String(id)
  );

  if (!BlogDetails) {
    return <h2>Blog not found</h2>;
  }

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-12 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">

                <div className="entry-media">
                  <img src={BlogDetails.image} alt={BlogDetails.title} />
                </div>

                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link to={`/blog-single/${BlogDetails.id}`}>
                        {BlogDetails.author}
                      </Link>
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i> {BlogDetails.date}
                    </li>
                  </ul>
                </div>

                <h2>{BlogDetails.title}</h2>

                <p>{BlogDetails.content1}</p>

                <blockquote>{BlogDetails.quote}</blockquote>

                <p>{BlogDetails.content2}</p>

                <div className="gallery">
                  {BlogDetails.gallery?.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
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