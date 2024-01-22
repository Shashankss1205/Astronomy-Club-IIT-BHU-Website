import React from 'react';
import blog_data from './data';
import BlogCard from '@/app/Components/BlogCard';

const containerStyle = {
  margin: '60px 100px', // Set margin-top to the height of your navbar
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  margin: '50px',
  color: 'white',
  fontSize: '48px', // Set the desired font size
};

const Blogs = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Blogs</h1>
      <div className='flex flex-wrap justify-center gap-x-10 gap-y-10'>
        {blog_data.map((blog) => (
          <BlogCard
            title={blog.title}
            author={blog.author}
            slug={blog.slug}
            description={blog.description}
            date={blog.date}
            category={blog.category}
            image={blog.image}
            writer={blog.writer}
            heading={blog.heading}
            text={blog.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
