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
    <div className="relative w-full h-auto">
      <div className="p-5">
        <div className="flex flex-col gap-10">
          {/* Weight and Dimension Input */}
          <div className="flex flex-col w-full sm:w-1/3">
            <label
              htmlFor="upc"
              className="block text-sm font-bold text-gray-700"
            >
              Weight and Dimension
            </label>
            <input
              id="upc"
              placeholder="Enter weight and dimension"
              className="mt-1 p-1 w-full h-10 border border-black rounded text-gray-800 placeholder-gray-400 text-sm"
            />
          </div>

          {/* Inline Dimension Inputs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-col w-full sm:w-1/4">
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

            <div className="flex flex-col w-full sm:w-1/4">
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

            <div className="flex flex-col w-full sm:w-1/4">
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
      <div className="w-full sm:w-[90%] py-10 px-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-y-2">
            <h1 className="block text-lg font-bold text-gray-700">Payment method</h1>
            <p className="text-sm text-gray-600">
              Add or remove your payment method that can only accept with your Pay
            </p>
          </div>
          <button className="w-36 h-10 rounded-full bg-black text-white hover:bg-black/90 transition-all">
            Remove bank
          </button>
        </div>

        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <img src="/ABA.png" alt="ABA Bank" className="w-6" />
            <span>ABA Bank</span>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <img src="/Acleda.png" alt="ACleda Bank" className="w-6" />
            <span>ACleda Bank</span>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
            <img src="/Wing.png" alt="Wing Bank" className="w-6" />
            <span>Wing Bank</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup;
