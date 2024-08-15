import BlogSidebar from "../../components/blogsidebar/BlogSidebar";
import SinglePost from "../../components/singlePost/SinglePost";

import "./single.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Single() {
  return <>
    <Header/>
    <div className="single">
      <SinglePost />
      <BlogSidebar />
    </div>
    <Footer/>
  </>
}
