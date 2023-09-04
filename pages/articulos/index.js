import React, { useEffect, useState, Suspense } from "react";
import { createClient } from "contentful";
import BlogCard from "../../Components/BlogCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import Head from "next/head";
import PaginationBlog from "../../Components/Pagination/PaginationBlog";
import CoachingCard from "../../Components/CoachingCard/CoachingCard";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Blog({ title, description }) {
  const [posts, setPosts] = useState([]);
  const [heroPost, setHeroPost] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "fitnessBlog",
        order: "-sys.createdAt",
      })
      .then((response) => {
        setPosts(response.items);
        setHeroPost(posts[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <Head>
        {title ? (
          <title>Vitalidad Fitness - {description} </title>
        ) : (
          <title>Vitalidad Fitness - Blog</title>
        )}
        <meta
          name="description"
          content=" Encuentra todo lo que necesitas para alcanzar tus objetivos de fitness,
        como rutinas de entrenamiento, planes de entrenamiento, videos de
        ejercicios gratuitos, consejos de fitness, tendencias de ejercicios,
        listas de reproducción para entrenar, equipamiento, ropa y más."
        ></meta>
      </Head>
      {title ? <h1>{title}</h1> : <h1 className="mt-3">Blog</h1>}
      {!posts ? <LoadingSpinner /> : <>{console.log(posts[0])}</>}
      <div className="row mb-5">
        <div className="col order-lg-0 order-1">
          {!posts ? <></> : console.log(posts.length)}
          <Suspense fallback={<LoadingSpinner />}>
            {!posts ? <></> : <PaginationBlog items={posts} />}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
