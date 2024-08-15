import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./blogsidebar.css";
import asset from '../../assets/img/Asset 1.png';

export default function BlogSidebar() {
  return (
    <div className="blogsidebar">
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">Articles</span>
        <img
          src={asset}
          alt=""
        />
        <p>
        This is One ገበያ to discover the range of services we offer to support your agricultural needs.
        </p>
      </div>
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">CATEGORIES</span>
        <ul className="blogsidebarList">
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="blogsidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li> 
        </ul>
      </div>
      <div className="blogsidebarItem">
        <span className="blogsidebarTitle">FOLLOW US</span>
        <div className="blogsidebarSocial">
          <i className="blogsidebarIcon fab fa-facebook-square"></i>
          <i className="blogsidebarIcon fab fa-instagram-square"></i>
          <i className="blogsidebarIcon fab fa-pinterest-square"></i>
          <i className="blogsidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
