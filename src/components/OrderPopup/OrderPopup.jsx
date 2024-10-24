import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {" "}
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1>Order Your Book</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer "
                  onClick={() => setOrderPopup(false)}
                />
              </div>
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;

// import React, { useContext } from 'react';
// import { IoCloseOutline } from 'react-icons/io5';
// import { CartContext } from '../CartContext/Cart'; // Import CartContext

// const OrderPopup = ({ orderPopup, setOrderPopup }) => {
//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     address: '',
//   });
//   const { addToCart } = useContext(CartContext); // Access addToCart

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addToCart(formData); // Add form data to cart
    // setOrderPopup(false); // Close the popup
    // You might want to reset the form here: setFormData({ name: '', email: '', address: '' });
    // And potentially display a success message to the user
  // };

//   return (
//     <>
//       {orderPopup && (
//         <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
//           <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1>Order Your Book</h1>
//               </div>
//               <div>
//                 <IoCloseOutline
//                   className="text-2xl cursor-pointer "
//                   onClick={() => setOrderPopup(false)}
//                 />
//               </div>
//             </div>
//             <form onSubmit={handleSubmit} className="mt-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name" // Add name attribute
//                 value={formData.name} // Bind input value to state
//                 onChange={handleChange} // Handle input change
//                 className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
//               />
//               {/* Repeat for email and address */}
//               <div className="flex justify-center">
//                 <button
//                   type="submit" // Change type to "submit"
//                   className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OrderPopup;

