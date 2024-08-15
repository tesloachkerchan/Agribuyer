import React from 'react';
import './ProfileEdit.css';
import ppg from '../../assets/img/ppg.jpg'
const ProfileEdit = ({ buyer, handleChange, handleSubmit, onCancel }) => {
    return <>
        {buyer &&
        <div className="profile-edit">
            <div className="cover-photo">
                <img src={ppg} alt="Cover" />
            </div>
            <div className="profile-info">
                <img src={buyer[0].photo} alt="Profile" className="profile-picture" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={buyer[0].name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={buyer[0].location} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={buyer[0].email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="contactDetails.phone" value={buyer[0].contactDetails.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" name="contactDetails.address" value={buyer[0].contactDetails.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Market:</label>
                        <input type="text" name="market" value={buyer[0].market} onChange={handleChange} />
                    </div>
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </form>
            </div>
            </div>
        }
    </>
};

export default ProfileEdit;
