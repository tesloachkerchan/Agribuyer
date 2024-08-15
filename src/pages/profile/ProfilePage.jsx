import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDisplay from './Profile';
import ProfileEdit from './EditProfile';
import { useParams } from 'react-router-dom';
import './profilePage.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BASE_URL } from '../../utils/config';

const ProfilePage = () => {
    const [buyer, setBuyer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetchBuyer();
    }, [id]);

    const fetchBuyer = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/user/buyer/profile/${id}`);
            const { data } = response;
            console.log("Data received from server:", data); // Log received data
            if (data && data.buyer) {
                setBuyer(data.buyer);
            } else {
                console.error('Invalid data format for buyer:', data);
            }
        } catch (error) {
            console.error('Error fetching farmer data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('contactDetails.')) {
            const contactDetails = { ...buyer.contactDetails, [name.split('.')[1]]: value };
            setBuyer(prevState => ({
                ...prevState,
                contactDetails
            }));
        } else {
            setBuyer(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/api/v1/user/buyer/${id}`, buyer)
            .then(response => {
                setBuyer(response.data.buyer);
                setIsEditing(false);
                alert('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <>
            <Header />
            {buyer && (
                <div className="profile-container">
                    {isEditing ? (
                        <ProfileEdit
                        buyer={buyer}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <ProfileDisplay
                        buyer={buyer}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            )}
            <Footer/>
        </>
    );
};

export default ProfilePage;
