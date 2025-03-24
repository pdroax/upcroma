import PostOne from "@/components/content/PostOne";
import "./blog.css";
import Contact from "@/components/Contact";
import { Html, Head } from "next/document";

function Blog() {
  return (
    <Html>
      <Head>
        {/* Google tag (gtag.js) --> */} 
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-737613236"></script> 
        <script  
              dangerouslySetInnerHTML={{
              __html: 
                `window.dataLayer = window.dataLayer || []; 
                function gtag(){
                  dataLayer.push(arguments);
                } gtag('js', new Date()); 
                gtag('config', 'AW-737613236');`,}}
        />

      </Head>
      <section className="blog-container">
        <div className="content">
          <PostOne />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </section>

    </Html>
  );
}

export default Blog;
