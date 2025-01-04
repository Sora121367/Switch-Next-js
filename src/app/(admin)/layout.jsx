import Header from "@/components/seller-components/Header";
import AdminSideBar from "@/components/Admin/AdminSideBar";
export default function AdminDashboardLayout({ children }) {
  return (
    <>
    <Header/>
    <div className="h-screen flex">
      <div className="shadow-lg w-[20%] bg-white">
        <AdminSideBar/>
      </div>
      <div className="w-[80%] overflow-scroll">
        {children}
      </div>
    </div>
    </>
  );
}