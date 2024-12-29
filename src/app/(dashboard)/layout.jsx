import Header from "@/components/seller-components/Header";
import Sidebar from "@/components/seller-components/Sidebar";
import { FaStoreAlt } from "react-icons/fa";
export default function DashboardLayout({ children }) {
  return (
    <>
    <Header/>
    <div className="h-screen flex">
      <div className="shadow-lg w-[20%] bg-white">
        <Sidebar/>
        <span className="mt-2 mx-2">Your channel</span>
        <div className="relative mt-2 mx-2">
          <select
            id="channel-select"
            name="channel"
            className="w-full p-2 px-8 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="online-store">Online Store</option>
            <option value="blog-posts">Blog Posts</option>
            <option value="pages">Pages</option>
            <option value="navigation">Navigation</option>
            <option value="preference">Preference</option>
          </select>
          <FaStoreAlt className="absolute top-1/2 transform -translate-y-1/2 left-1 text-lg text-gray-400 pointer-events-none" />
        </div>
      </div>
      <div className="w-[80%] overflow-scroll">
        {children}
      </div>
    </div>
    </>
  );
}