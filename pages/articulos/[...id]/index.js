import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import BlogPostWithRichText from "../../../Components/BlogPostWithRichText/BlogPostWithRichText";
import { useSearchParams } from "next/navigation";
import BlogCard from "../../../Components/BlogCard";
import BlogAuthor from "../../../Components/BlogAuthor/BlogAuthor";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import Image from "next/image";
import Head from "next/head";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Pid() {
  const Id = useSearchParams().toString().slice(3);
  const router = useRouter();
  const [post, setPost] = useState({});
  const [morePosts, setMorePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .getEntry(Id)
      .then((response) => {
        setPost(response.fields);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [Id]);

  useEffect(() => {
    if (post.blogAuthor) {
      const authorId = post.blogAuthor.sys.id;
      client
        .getEntries({
          content_type: "fitnessBlog",
          "fields.blogAuthor.sys.id": authorId,
          order: "-fields.dateCreated",
          limit: 3,
        })
        .then((response) => {
          setMorePosts(response.items);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [loading]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-fluid g-0">
      <Head>
        {post ? (
          <title>Vitalidad Fitness - {post.title} </title>
        ) : (
          <title>Vitalidad Fitness - Blog</title>
        )}
        <meta
          name="description"
          content={post.title}
        ></meta>
      </Head>
      {!post ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Image
            className="imagehero"
            priority={true}
            width={100}
            height={100}
            src={post.imgUrl}
            alt={post.title}
          />
          {/* <img className="imagehero" src={post.imgUrl} alt={post.title}></img> */}
          <p className="text-muted mx-4">Image source: {post.imgUrlSource}</p>
          <div className="container">
            <div className="row p-4">
              <div className="col-lg-8 col-sm-12">
                {" "}
                <h1 className="mt-3 mb-4">{post.title}</h1>
                {!post.blogAuthor ? (
                  <LoadingSpinner />
                ) : (
                  <div>
                    <div className="row">
                      <div className="col">
                        <BlogAuthor authorInfo={post.blogAuthor.fields} />{" "}
                      </div>

                      <div className="my-auto col text-end">
                        <span className="fw-bold">Comparte: </span>
                        <EmailShareButton
                          subject={post.title}
                          body={post.workoutDetails}
                          url={`vitalidadfitness.com/${router.asPath}`}
                        >
                          <EmailIcon size={32} round={true} />
                        </EmailShareButton>{" "}
                        <FacebookShareButton
                          url={`vitalidadfitness.com/${router.asPath}`}
                        >
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>{" "}
                        <TwitterShareButton
                          url={`vitalidadfitness.com/${router.asPath}`}
                        >
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>{" "}
                        <PinterestShareButton
                          media={post.imgUrl}
                          url={`vitalidadfitness.com/${router.asPath}`}
                        >
                          <PinterestIcon size={32} round={true} />
                        </PinterestShareButton>
                      </div>
                    </div>
                  </div>
                )}
                <hr></hr>
                <BlogPostWithRichText content={post.post} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container p-4">
        <hr></hr>
        {!post.blogAuthor ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            <h1>
              Mas articulos de{" "}
              <span className="text-danger">{post.blogAuthor.fields.name}</span>
            </h1>
            <div className="container">
              <div className="row g-2">
                {morePosts &&
                  morePosts.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-4 col-md-4 col-12">
                        {" "}
                        <BlogCard
                          blogPost={item.fields}
                          link={`/articulos/${item.sys.id}`}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
