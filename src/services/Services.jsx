import React from 'react';
import './services.css';

import serviceData from '../assets/data/serviceData';

const Services = () => {
    return (
        <section className="services" >
            <div className="container">
                <div className="row">
                    {serviceData.map((item, index) => (
                        <div className="col-lg-3 col-md-4" key={index}>
                            <div
                                whileHover={{ scale: 1.1 }}
                                className="service__item"
                                style={{ background: `${item.bg}` }}
                            >
                                <span >
                                {item.icon}
                                </span>
                                <div>
                                    <h3 style={{fontSize:'18px',color:'black'}}>{item.title}</h3>
                                    <p style={{fontSize:'15px',color:'black'}}>{item.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
