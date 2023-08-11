import React from "react";
import { useRouter } from "next/navigation";
import BlogAuthor from "../BlogAuthor/BlogAuthor";
import styles from "./blogcard.module.css";

export default function BlogCard({ blogPost, link, author }) {
  const router = useRouter();

  const { title, blogAuthor, imgUrl, dateCreated } = blogPost;
  return (
    <div className="card blogcard">
      <img className="img-fluid imgcard" src={imgUrl} alt={title}></img>
      <div className="card-body p-4 ">
        <a
          onClick={() => {
            router.push(link);
          }}
          className={`blogcardlink ${styles.truncatetext} stretched-link`}
        >
          {title}
        </a>
        {/* {!description ? <></> : <p className="text-muted">{description}</p>} */}
        {!dateCreated ? (
          <></>
        ) : (
          <p className="text-muted mt-2">
            <i className="bi bi-calendar-event"></i> {dateCreated}
          </p>
        )}

        {!author ? <></> : <BlogAuthor authorInfo={blogAuthor.fields} />}
      </div>
    </div>
  );
}
