import Link from 'next/link';

function Role() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-sans font-semibold">
        Tell us what you want?
      </h1>
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
        <h2 className="text-center font-semibold mb-4">
          You created this account for:
        </h2>
        <ul className="my-2">
          <li>Choose To Be a Seller (To list and sell your products)</li>
          <li>Choose To Be a Customer (To shop for products)</li>
        </ul>
        <div className="flex w-full gap-5">
          <Link href="/home" className="w-1/2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-l-md hover:bg-blue-600 transition font-semibold"
            >
              Seller
            </button>
          </Link>
          <Link href="/customerpage" className="w-1/2">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-r-md hover:bg-green-600 transition font-semibold"
            >
              Customer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Role;
