import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import BlogSidebar from "../../components/blogsidebar/BlogSidebar";
import "./blogPage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Blog() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <BlogSidebar />
      </div>
      <Footer/>
    </>
  );
}
