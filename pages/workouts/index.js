import React, { useEffect, useState, Suspense } from "react";
import { createClient } from "contentful";
import BlogCard from "../../Components/BlogCard";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PageTitleBannerImage from "../../Components/PageTitleBannerImage/PageTitleBannerImage";
import Head from 'next/head'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Programs({ show, title, description }) {
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
      <Head>
        <title>Vitalidad Fitness - Workouts Gratis!</title>
        <meta name='description' content='Prepárate para transformar tu cuerpo. ¡Comienza tu viaje hoy mismo hacia una versión más fuerte y musculosa de ti!'></meta>
        <meta name='keywords' content='Rutinas de ejercicio, workouts, musculo, entrenamientos gratis'></meta>
      </Head>
      {!show ? (
        <></>
      ) : (
        <PageTitleBannerImage
          imgUrl="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
          alt="coaching"
        />
      )}

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
                      <div key={index} className="col-lg-4 col-md-6 col-12">
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
