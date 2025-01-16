import NavBar from "@/components/ShopOwnerVerify/NavBar";

export default function ShopOwnerVerification() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Verify Your Identity
          </h1>
          <div className="mb-4">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="Enter phone number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <div className="flex gap-4">
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              placeholder="Cambodia"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City/Province
            </label>
            <input
              id="city"
              type="text"
              placeholder="City/Province"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          </div>
          <div>
              <div className="mb-6">
                <label
                  htmlFor="product-type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What type of products will you sell?
                </label>
                <input
                  id="product-type"
                  type="text"
                  placeholder="Your category for sell"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="store-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Store Name
                </label>
                <input
                  id="store-name"
                  type="text"
                  placeholder="Your Store Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
                />
              </div>
          </div>
          <button className="w-full py-2 text-white bg-[#2a4f48] rounded hover:bg-slate-500 transition duration-200">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
