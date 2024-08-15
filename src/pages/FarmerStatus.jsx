import React ,{useEffect, useState,useContext} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import axios from "axios";
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from "../utils/config";


const FarmerStatus = () => {
    const { user } = useContext(AuthContext);
    const [farmers, setFarmers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5); 

    useEffect(() => {
        fetchFarmers();
    }, []);

    const fetchFarmers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/user/farmer`); // Update endpoint to fetch farmers
            const { data } = response;
            console.log(data)
            if (Array.isArray(data.farmers)) {
                setFarmers(data.farmers);
            } else {
                console.error('Invalid data format for farmers:', data);
            }
        } catch (error) {
            console.error('Error fetching farmers:', error);
        }
    };

    const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentfarmers = farmers.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
        <Header/>
        <div className="container-fluid page-header mb-1 wow fadeIn text-center" data-wow-delay="0.2s" style={{ fontSize: '25px' }}>
        <div className="container text-center">
          <h1 className="display-3 mb-2 animated slideInDown">Farmer Status</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a className="text-body" href="#">Home</a></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">Status</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-fluid py-5" style={{ fontSize: "20px", color: 'black' }}>
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table" style={{ color: 'black' }}>
                <thead>
                  <tr>
                    <th scope="col">Farmer ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {currentfarmers.map((farmer) => (
                    <tr key={farmer._id}>
                     <td>{farmer._id}</td>
                      <td> {farmer.name}</td>
                      <td> {farmer.contactDetails.address}</td>
                      <td>{farmer.status}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
      <div className="pagination justify-content-center">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(farmers.length / ordersPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>





        <Footer/>
    </div>
  )
}

export default FarmerStatus