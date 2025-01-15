import React from 'react';

const Checkoutpage = () => {
  return (
    <div className="w-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Shopping Cart Section */}
        <div className="w-full p-6 flex flex-col items-center mb-6 ">
          <h2 className="text-xl font-bold mb-4 text-left">Shopping Cart</h2>
          <div className="space-y-6 w-full">
            {/* Item 1 */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirt.png"
                  alt="Vintage T-Shirt"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Vintage T-Shirts:</h3>
                  <p className="text-sm text-gray-500">A Timeless Retro Look</p>
                  <p className="text-base text-green-900 font-bold mt-2">$10.00</p>
                  <p className="text-sm font-bold text-black">Size: M</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirtg.png"
                  alt="Flower T-Shirt"
                  className="w-22 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Flower T-Shirts:</h3>
                  <p className="text-sm text-gray-500">The Real Man</p>
                  <p className="text-base text-green-900 font-bold mt-2">$20.00</p>
                  <p className="text-sm font-bold text-black">Size: L</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img
                  src="/shirto.png"
                  alt="Swag 1999 T-Shirt"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="text-left">
                  <h3 className="text-sm font-semibold">Swag 1999</h3>
                  <p className="text-sm text-gray-500">Timeless Retro Look</p>
                  <p className="text-base font-bold text-green-900 mt-2">$15.00</p>
                  <p className="text-sm font-bold text-black">Size: XL</p>
                  <p className="text-sm text-green-900">Quantity: 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Totals */}
            <div className="border-t-2 flex justify-between mt-2 w-full">
              <p className="text-lg font-bold">TOTAL</p>
              <p className="text-lg font-bold">$46.25</p>
            </div>
        </div>

        {/* Checkout Section */}
        <div className="w-full p-6">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="menglyung44@gmail.com"
              />
            </div>

            <div>
              <p className="block text-sm font-medium text-gray-700 mb-2">Payment Information</p>
              <div className=" grid grid-cols-3 gap-4 w-30 h-20">
                {[
                  { name: 'ABA Bank', logo: '/aba.png' },
                  { name: 'Visa Card', logo: '/visa.png' },
                  { name: 'ACLEDA Bank', logo: '/acleda.png' },
                  { name: 'Wing Bank', logo: '/wing.png' },
                  { name: 'Master Card', logo: '/mastercard.png' },
                  { name: 'ChipMong Bank', logo: '/chipmong.png' },
                  { name: 'Bank Transfer', logo: '/banktransfer.png' },
                ].map((method, idx) => (
                  <div
                    key={idx}
                    className="border bg-gray-200 rounded-lg p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  >
                    <img src={method.logo} alt={method.name} className="w-10 h-10 rounded-md" />
                    <span className="text-sm font-medium">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className=" mt-44 block text-base font-bold text-gray-700">
                Any special requests on your order?
              </label>
              <textarea
                id="special-requests"
                rows="3"
                className="mt-1 block w-full rounded-md border-2 border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-950 text-white py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Place Order
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
export default Checkoutpage;
