import React, { useEffect, useState, Suspense } from "react";
import { createClient } from "contentful";
import BlogCard from "../../Components/BlogCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "fitnessBlog",
      })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-3 mb-4">Articulos</h1>
      <h4>
        Encuentra todo lo que necesitas para alcanzar tus objetivos de fitness,
        como rutinas de entrenamiento, planes de entrenamiento, videos de
        ejercicios gratuitos, consejos de fitness, tendencias de ejercicios,
        listas de reproducción para entrenar, equipamiento, ropa y más.
      </h4>

      <div className="row mb-5 mt-5">
        <div className="col order-lg-0 order-1">
          <Suspense fallback={<LoadingSpinner />}>
            <div className="row g-3">
              {posts &&
                posts.map((post, index) => {
                  return (
                    <div key={index} className="col-lg-4 col-md-4 col-12">
                      {" "}
                      <BlogCard
                        blogPost={post.fields}
                        author={true}
                        link={`/articulos/${post.sys.id}`}
                      />
                    </div>
                  );
                })}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
