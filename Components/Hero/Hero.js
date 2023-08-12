import { Carousel } from "react-bootstrap";
import styles from "./hero.module.css";
import { createClient } from "contentful";
import { useEffect, useState } from "react";
import Image from "next/image";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export default function Hero() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .getEntries({
        content_type: "fitnessBlog",
        limit: 8,
      })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className={styles.carouselindicators}>
        <Carousel fade touch={true} indicators={false}>
          {posts &&
            posts.map((item, index) => (
              <Carousel.Item key={index} className={styles.carousel}>
                <Image
                  className={styles.carouselitemimg}
                  src={item.fields.imgUrl}
                  alt={item.fields.title}
                  priority={true}
                  width={100}
                  height={100}
                />
                <Carousel.Caption className={` ${styles.carouselcaption}`}>
                  <div className={`card border-0 ${styles.caption}`}>
                    <h1>{item.fields.title}</h1>
                    <p className="text-uppercase fw-bold">
                      {item.fields.category}
                    </p>
                    <a
                      href={`/articulos/${item.sys.id}`}
                      className="stretched-link"
                    ></a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
