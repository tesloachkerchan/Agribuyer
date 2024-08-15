import React from 'react';
import './profile.css';
import ppg from '../../assets/img/ppg.jpg'

const ProfileDisplay = ({ buyer, onEdit }) => {
    return (
        <>
            {buyer[0] &&
            <div className="profile-display bg-light">
                <div className="cover-photo">
                    <img src={ppg} alt="Cover" />
                </div>
                <div className="profile-info">
                    <img src={buyer[0].photo} alt="Profile" className="profile-picture" />
                    <div className="info-section">
                        <h2>{buyer[0].name}</h2>
                        <p><strong>Location:</strong> {buyer[0].location}</p>
                        <p><strong>Email:</strong> {buyer[0].email}</p>
                        <p><strong>Phone:</strong> {buyer[0].contactDetails ? buyer[0].contactDetails.phone : ''}</p>
                         <p><strong>Address:</strong> {buyer[0].contactDetails ? buyer[0].contactDetails.address : ''}</p>
                        {/* <p><strong>Market:</strong> {buyer[0].market}</p> */}
                        <button onClick={onEdit}>Edit Profile</button>
                    </div>
                </div>
                </div>
            }
        </>
    );
};

export default ProfileDisplay;
