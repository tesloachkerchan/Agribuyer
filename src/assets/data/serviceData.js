import React from 'react';
import { FaTruck, FaRedoAlt, FaLock, FaMoneyBillAlt } from 'react-icons/fa'; // Import icons from FontAwesome

const serviceData = [
  {
    icon: <FaTruck className="text-dark fa-1x" />, // Use FaTruck component
    title: "Facilitating Shipping",
    subtitle: "From Cart to Doorstep.",
    bg: "#fdefe6",
  },
  {
    icon: <FaRedoAlt className="text-dark fa-1x" />, // Use FaRedoAlt component
    title: "Easy Returns",
    subtitle: "we will return easily.",
    bg: "#ceebe9",
  },
  {
    icon: <FaLock className="text-dark fa-1x" />, // Use FaLock component
    title: "Secure Payment",
    subtitle: "Shop and pay with security..",
    bg: "#e2f2b2",
  },
  {
    icon: <FaMoneyBillAlt className="text-dark fa-1x" />, // Use FaMoneyBillAlt component
    title: "24/7 Support",
    subtitle: "Support every time fast",
    bg: "#d6e5fb",
  },
];

export default serviceData;
