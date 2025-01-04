import Image from "next/image";

// Data for both weeks and months
const ProductData = {
  months: [
    {
      icon: "./Icon1.svg",
      amt: "200",
      title: "Total Products",
      dis: "+2.2%",
      style: "bg-green-200",
    },
    {
      icon: "./Icon2.svg",
      amt: "300",
      title: "Total Sales",
      dis: "+5%",
      style: "bg-[#ffcc99]",
    },
    {
      icon: "./Icon3.svg",
      amt: "100",
      title: "Total Users",
      dis: "+0.5%",
      style: "bg-[#DCBCFF]",
    },
  ],
  weeks: [
    {
      icon: "./Icon1.svg",
      amt: "45",
      title: "Total Products",
      dis: "+1.5%",
      style: "bg-green-200",
    },
    {
      icon: "./Icon2.svg",
      amt: "60",
      title: "Total Sales",
      dis: "+3.1%",
      style: "bg-[#ffcc99]",
    },
    {
      icon: "./Icon3.svg",
      amt: "30",
      title: "Total Users",
      dis: "+0.7%",
      style: "bg-[#DCBCFF]",
    },
  ],
};

export default function ShowData({ name, timeRange }) {
  // Select data based on timeRange (months or weeks)
  const data = ProductData[timeRange];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4 mt-4 lg:flex-row ">
        {data.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col flex-1 p-4 rounded-2xl ${product.style}`}
          >
            <Image src={product.icon} alt="" width={27} height={27} />
            <span className="font-bold text-gray-800 text-2xl">{product.amt}</span>
            <span className="font-sans">{product.title}</span>
            <span className="text-blue-600">{product.dis} from yesterday</span>
          </div>
        ))}
      </div>
    </div>
  );
}
