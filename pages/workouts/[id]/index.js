import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import BlogPostWithRichText from "../../../Components/BlogPostWithRichText/BlogPostWithRichText";
import BlogCard from "../../../Components/BlogCard";
import { useRouter } from "next/router";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import Jumbotron from "../../../Components/Jumbotron/Jumbotron";
import Head from 'next/head'

// Create a Contentful client instance
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Workouts() {
  const router = useRouter();
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the route has changed
    if (router.asPath !== router.route) {
      // Set loading state to true
      setLoading(true);

      // Fetch workout data from Contentful
      client
        .getEntry(router.query.id)
        .then((response) => {
          setWorkout(response.fields);
          setLoading(false); // Set loading state to false
        })
        .catch((error) => {
          setLoading(false); // Set loading state to false
        });
    }
  }, [router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Head >
        {workout ? <title>Vitalidad Fitness - {workout.title}</title> : <></>}
        {workout ? <meta name="description" content={workout.title}></meta> : <></>}
        {console.log(workout)}
      </Head>
      {workout ? ( // Check if workout data is available
        <div>
          <img
            className="imagehero"
            src={workout.imgUrl}
            alt={workout.title}
          ></img>
          <p className="text-muted mx-4">
            Image source: {workout.imgUrlSource}
          </p>
          <div className="container">
            <div className="row p-4">
              <div className="col-lg-12 col-sm-12">
                <h1 className="mt-3 mb-4">{workout.title}</h1>
                {!workout.description ? (
                  <></>
                ) : (
                  <div className="border-start border-dark">
                    <div className="mx-4">
                      <BlogPostWithRichText content={workout.description} />
                    </div>{" "}
                  </div>
                )}
                {workout.workouts ? (
                  <div className="row g-3 mt-5">
                    {workout.workouts.map((workout, index) => (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <BlogCard
                          blogPost={workout.fields}
                          author={false}
                          link={`/workouts/${workout.sys.id}/${workout.fields.title}/${workout.sys.id}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Jumbotron />
                )}
                {/* <hr></hr> */}
                {/* <BlogPostWithRichText content={workout.description} /> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
