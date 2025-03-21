import PostOne from "@/components/content/PostOne";
import "./blog.css";
import Contact from "@/components/Contact";

function Blog() {
  return (
    <section className="blog-container">
      <div className="content">
        <PostOne />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </section>
  );
}

export default Blog;
