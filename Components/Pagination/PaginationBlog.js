import React, { useRef, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import BlogCard from "../BlogCard";
import styles from "./pagination.module.css";
import CoachingCard from "../CoachingCard/CoachingCard";

export default function PaginationBlog({ items }) {
  // Define the number of items to display per page
  const ITEMS_PER_PAGE = 6;
  // Calculate the total number of pages based on the total number of items
  const TOTAL_PAGES = Math.ceil(items.length / ITEMS_PER_PAGE);
  // State to track the currently active page
  const [activePage, setActivePage] = useState(1);
  // Create a reference to scroll to the top of the page
  const pageTopRef = useRef(null);

  // Function to handle page selection
  const handlePageSelect = (pageNumber) => {
    setActivePage(pageNumber);
    // Scroll to the top of the page when a new page is selected
    pageTopRef.current.scrollIntoView();
  };

  // Function to get the items to display on the current page
  const getPageItems = () => {
    const startIndex = (activePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items.slice(startIndex, endIndex);
  };

  return (
    <div id="top" ref={pageTopRef} className="container ms-auto mt-5">
      <div className="row g-3">
        {getPageItems().map((entry, index) => (
          <>
            {index === 0 && activePage === 1 ? (
              // Render a CoachingCard and a title for the first item on the first page
              <>
                <CoachingCard
                  index={index + 1}
                  title={entry.fields.title}
                  description={entry.fields.description}
                  imgUrl={entry.fields.imgUrl}
                  link={`/articulos/${entry.sys.id}`}
                />
                <h1>Articulos Recientes</h1>
              </>
            ) : (
              // Render BlogCards for other items
              <>
                <div key={index} className="col-lg-6 col-md-6 col-12">
                  <BlogCard
                    blogPost={entry.fields}
                    author={true}
                    link={`/articulos/${entry.sys.id}`}
                  />
                </div>
              </>
            )}
          </>
        ))}
      </div>

      <Pagination
        className={`mt-5 d-flex justify-content-center ${styles.custompagination}`}
      >
        <Pagination.First
          linkStyle={{ color: "black" }}
          onClick={() => handlePageSelect(1)}
        />
        {activePage > 1 && activePage < TOTAL_PAGES ? (
          <Pagination.Prev
            linkStyle={{ color: "black" }}
            key={activePage - 1}
            onClick={() => handlePageSelect(activePage - 1)}
          />
        ) : (
          <Pagination.Prev
            linkStyle={{ color: "black" }}
            onClick={() => handlePageSelect(TOTAL_PAGES)}
          />
        )}

        {[...Array(Math.ceil(items.length / ITEMS_PER_PAGE))].map(
          (_, index) => (
            <Pagination.Item
              linkStyle={
                index + 1 === activePage
                  ? { backgroundColor: "black", borderColor: "black" }
                  : { color: "black" }
              }
              key={index}
              active={index + 1 === activePage}
              onClick={() => handlePageSelect(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
        {activePage < TOTAL_PAGES ? (
          <Pagination.Next
            linkStyle={{ color: "black" }}
            key={activePage}
            onClick={() => handlePageSelect(activePage + 1)}
          />
        ) : (
          <Pagination.Next
            linkStyle={{ color: "black" }}
            onClick={() => handlePageSelect(1)}
          />
        )}
        <Pagination.Last
          linkStyle={{ color: "black" }}
          onClick={() => handlePageSelect(TOTAL_PAGES)}
        />
      </Pagination>
    </div>
  );
}
