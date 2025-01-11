
import React, { useState } from 'react';
import Notification from './Notification';
const Mainpart = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const handleCloseNotification = () => {
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 w-full max-w-md">
        {submitted && (
          <Notification
            message="Thank you for letting us know.We will update and warn the seller."
            onClose={handleCloseNotification}
          />
        )}
        <h1 className="text-2xl font-bold mb-4 text-center">Report Seller</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Received Damaged Product
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Product Not as Described
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Late Delivery
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Wrong Item Delivered
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Counterfeit or Fake Product
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Seller Not Responding to Messages
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Fraudulent Pricing or Offers
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Report Something Else</label>
            <textarea className="w-full p-2 border rounded-lg" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-green-950 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mainpart;
