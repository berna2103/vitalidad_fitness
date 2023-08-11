import React, { useState } from 'react';

const BlogPostFilter = ({ blogPosts }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    dateCreated: '',
    author: '',
    category: ''
  });

  const filteredPosts = blogPosts.filter(post => {
    return (
      (filterCriteria.dateCreated === '' || post.dateCreated === filterCriteria.dateCreated) &&
      (filterCriteria.author === '' || post.author === filterCriteria.author) &&
      (filterCriteria.category === '' || post.category === filterCriteria.category)
    );
  });

  return (
    <div>
      <div>
        <label>Fecha:</label>
        <input
          type="text"
          value={filterCriteria.dateCreated}
          onChange={event => setFilterCriteria({ ...filterCriteria, dateCreated: event.target.value })}
        />
      </div>
      <div>
        <label>Categoria:</label>
        <input
          type="text"
          value={filterCriteria.category}
          onChange={event => setFilterCriteria({ ...filterCriteria, category: event.target.value })}
        />
      </div>

      {/* Render the filtered blog posts */}
      {filteredPosts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostFilter;
