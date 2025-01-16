import Image from "next/image"
export default function NavBar(){
  return <div className="bg-[#162623] ">
    <Image className="pl-5" src="/NewLogo.svg" alt="logo" width={150} height={100}/>
  </div>
}