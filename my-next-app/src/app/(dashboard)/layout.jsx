import Header from "../sellerdashboard/seller-components/Header";
import Sb from "@/components/seller-components/Sb";
export default function DashboardLayout({ children }) {
  return (
    <>
    <Header/>
    <div className="h-screen flex">
      <div className="shadow-lg w-[20%] bg-white">
        <Sb/>
      </div>
      <div className="w-[80%] bg-blue-400 overflow-scroll">
        {children}
      </div>
    </div>
    </>
  );
}