import React, { useEffect, useState, Suspense } from "react";
import { createClient } from "contentful";
import BlogCard from "../../Components/BlogCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Programs() {
  const [workoutCategories, setWorkoutCategories] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "workoutCategory",
      })
      .then((response) => {
        setWorkoutCategories(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <img
        className={`imagehero`}
        src="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
        alt="coaching"
      />
      <div className="container">
        <h1 className="display-6 mt-3">Rutinas de Ejercicio</h1>
        <h3>
          No hay excusa, todas nuestras rutinas de ejercicio son gratuitas y hay
          para todos los niveles!
        </h3>
        <div className="row mb-5 mt-5">
          <div className="col order-lg-0 order-1">
            <Suspense fallback={<LoadingSpinner />}>
              <div className="row g-3">
                {workoutCategories &&
                  workoutCategories.map((post, index) => {
                    return (
                      <div key={index} className="col-lg-4 col-md-4 col-12">
                        {" "}
                        <BlogCard
                          blogPost={post.fields}
                          link={`/workouts/${post.sys.id}`}
                        />
                      </div>
                    );
                  })}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
