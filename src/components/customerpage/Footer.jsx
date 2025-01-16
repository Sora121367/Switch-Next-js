import Image from "next/image"
import Link from "next/link"
export default function CustomerFooter(){
  return<footer className="flex justify-center ml-5 p-4 bg-gray-50 ">
    <div className="w-1/3">
      <h1 className="font-sans font-semibold">Shop with Switch</h1>
      <p>Customer Account</p>
    </div>
    <div className="w-1/3">
      <h1 className="font-sans font-semibold">Sell</h1>
      <p>Seller Account</p>
    </div>
    <div>
      <h1 className="font-sans font-semibold">Help</h1>
      <Link href="/customerpage/reportSeller" className="text-blue-400 underline">
            Report Abuse
      </Link>
      <p>Help Center</p>
      <p>Privacy Settings</p>
      <div className="flex gap-2">
        <Image src="/Facebook.svg" alt="FB-Logo" width={27} height={27}/>
        <Image src="/Instagram.svg" alt="IG-Logo" width={27} height={27}/>
      </div>
    </div>
  </footer>
}