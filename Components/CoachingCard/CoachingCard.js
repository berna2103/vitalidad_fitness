import React from "react";
import styles from "../../pages/coaching/coaching.module.css";
import { animated, useInView } from "@react-spring/web";

export default function CoachingCard({ index, title, description, imgUrl, link }) {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    }),
    {
      rootMargin: "-15% 0%",
    }
  );
  
  const isOdd = index % 2 !== 0;
  return (
    <>
      {isOdd ? 
       <animated.div ref={ref} style={springs}>
        <div className="row bg-light shadow-lg mb-4">
          <div className="col-lg-5 col-md-6 p-0 m-0">
            <img
              className={`${styles.imageContainer}`}
              src={imgUrl}
              alt={title}
            />
          </div>
          <div className="col-lg-7 col-md-6 p-5 my-auto card rounded-0 border-0">
            <h1 className="display-5 text-black">{title}</h1>
            <p className="lead mt-5">{description}</p>
            {!link ? <> </> : <a className="stretched-link" href={link}>{description}</a>}
          </div>
        </div>
      </animated.div>
      : 
      <animated.div ref={ref} style={springs}>
          <div className="row bg-light shadow-lg mb-4">
            <div className="col-lg-7 col-md-6 p-5 my-auto order-lg-first order-md-first order-sm-last order-2">
              <h1 className="display-5 text-dark">{title}</h1>
              <p className="lead mt-5">{description}</p>
            </div>
            <div className="col-lg-5 col-md-6 p-0 m-0 order-lg-last order-md-last order-sm-first order-1">
              <img
                className={`${styles.imageContainer}`}
                src={imgUrl}
                alt={title}
              />
            </div>
          </div>
      </animated.div>
      }
    </>
  );
}
