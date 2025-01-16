import NavBar from "@/components/ShopOwnerVerify/NavBar";

export default function ShopOwnerSetUpLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-[10%]">
        <div className="w-full flex-1">{children}</div>
      </div>
    </>
  );
}
