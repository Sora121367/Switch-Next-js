import React, { useEffect, useState } from "react";

const Pickup = ({ formData, setFormData }) => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [selectedPayment, setSelectedPayment] = useState(""); // State to store the selected bank
  const [bankQuantity, setBankQuantity] = useState(); // State to store the number of banks

  useEffect(() => {
    // Ensure the formData includes the selected banks on load
    if (!formData.method_payment) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        method_payment: "", // Initialize method_payment as an empty string if undefined
      }));
    }
  }, [formData.method_payment, setFormData]);

  const togglePayment = (bank) => {
    let updatedPayment = formData.method_payment;

    if (updatedPayment.includes(bank)) {
      // If bank is already selected, show the popup to update quantity
      setSelectedPayment(bank);
      setShowPopup(true);
    } else {
      // If bank is not selected, add it and show the popup
      updatedPayment = updatedPayment ? `${updatedPayment}, ${bank}:${bankQuantity}` : `${bank}:${bankQuantity}`;
      setFormData((prevFormData) => ({
        ...prevFormData,
        method_payment: updatedPayment,
      }));
      setSelectedPayment(bank);
      setShowPopup(true);
    }
  };

  const handleQuantityChange = (event) => {
    setBankQuantity(event.target.value);
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  const handleConfirmQuantity = () => {
    // Update formData with the quantity of the selected bank
    let updatedPayment = formData.method_payment.split(", ");
    updatedPayment = updatedPayment.map((payment) => {
      if (payment.includes(selectedPayment)) {
        return `${selectedPayment}:${bankQuantity}`; // Update quantity for the selected bank
      }
      return payment;
    }).join(", ");

    setFormData((prevFormData) => ({
      ...prevFormData,
      method_payment: updatedPayment, // Store as a string with quantity
    }));

    setShowPopup(false); // Close the popup after confirming
  };

  return (
    <div className="relative w-full h-[100vh]">
      <div className="p-5">
        <div className="flex flex-col gap-10">
          {/* Weight and Dimension Input */}
          <div className="flex flex-col w-1/3">
            <label htmlFor="upc" className="block text-sm font-bold text-gray-700">
              Weight and Dimension
            </label>
            <input
              id="upc"
              placeholder="Enter weight and dimension"
              className="mt-1 p-1 w-full h-10 border border-black rounded text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Inline Dimension Inputs */}
          <div className="flex flex-1 items-center gap-3">
            <div className="flex flex-col w-1/4">
              <label htmlFor="length" className="block text-xs text-gray-500">
                Length (cm)
              </label>
              <input
                type="number"
                id="length"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>

            <div className="flex flex-col w-1/4">
              <label htmlFor="width" className="block text-xs text-gray-500">
                Width (cm)
              </label>
              <input
                type="number"
                id="width"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>

            <div className="flex flex-col w-1/4">
              <label htmlFor="height" className="block text-xs text-gray-500">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                placeholder="00.00"
                className="mt-1 w-full h-10 border border-gray-300 rounded-lg px-2 text-gray-800 placeholder-gray-400 text-center text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="w-[90%] py-10 px-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="block text-lg font-bold text-gray-700">Payment method</h1>
            <p className="text-sm text-gray-600">
              Add or remove your payment method that can only accept with your Pay
            </p>
          </div>
        </div>

        <ul className="mt-4 flex gap-4 flex-wrap">
          {["/ABA.png", "/Acleda.png", "/Wing.png"].map((bank) => (
            <li
              key={bank}
              className={`flex items-center justify-center text-sm border-2 border-dashed rounded-lg cursor-pointer ${
                formData.method_payment.includes(bank)
                  ? "border-green-400 bg-green-100"
                  : "border-gray-400 bg-white"
              } relative`}
              onClick={() => togglePayment(bank)}
            >
              <img src={bank} alt={bank.split("/")[1].split(".")[0]} className="w-full p-1" />
              <button
                className={`absolute -top-2 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full ${
                  formData.method_payment.includes(bank)
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {formData.method_payment.includes(bank) ? "−" : "+"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup for selecting bank quantity */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-80">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Enter the number of {selectedPayment.split("/")[1].split(".")[0]} method_payment
            </h2>
            <input
              type="number"
              value={bankQuantity}
              onChange={handleQuantityChange}
              className="w-full h-10 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 text-center text-sm mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-300 text-sm rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmQuantity}
                className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pickup;
