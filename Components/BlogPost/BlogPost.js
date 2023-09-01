import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Head from 'next/head'
import { useRouter } from "next/router";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  EmailIcon,
  TwitterIcon,
  PinterestIcon,
} from "react-share";

import BlogAuthor from "../BlogAuthor/BlogAuthor";
import BlogCard from "../BlogCard";
import BlogPostWithRichText from "../BlogPostWithRichText/BlogPostWithRichText";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function BlogPost2() {
  const router = useRouter();
  const [post, setPost] = useState({});
  const [morePosts, setMorePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setLoading(true);
      client
        .getEntry(router.query.slug[1])
        .then((response) => {
          setPost(response.fields);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [router]);

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
        {!post ? <title>Vitalidad Fitness</title> :  <title>Vitalidad Fitness - {post.title}</title>}
        {!post ? <> </> : <meta name="description" content={post.title}></meta>}
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
                <BlogPostWithRichText content={post.workoutDetails} />
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
                          author={true}
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
