// Home.jsx (Server Component)

import ChannelSection from "@/components/seller-components/Home-seller/ChannelSection";
import StoreSection from "@/components/seller-components/Home-seller/StoreSection";
import ReportsSection from "@/components/seller-components/Home-seller/ReportSection";

const Home = () => {
  return (
    <div className="w-full h-full p-4 bg-[#FAFAFB]">
      <h1 className="text-xl font-semibold">Profile information & Report</h1>
     
      
      <div className="flex justify-center p-5">
        <ReportsSection />
      {/* <div className="flex flex-col  p-5">
        <ChannelSection />
        <StoreSection />
      </div> */}
      </div>
    </div>
  );
};

export default Home;
