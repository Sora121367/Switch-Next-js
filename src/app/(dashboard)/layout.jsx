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
      </div>
      <div className="w-[80%] overflow-scroll">
        {children}
      </div>
    </div>
    </>
  );
}