import logo from "../assets/logo.webp";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
export default function Header() {
  return (
    <div className="w-full max-w-[480px] bg-white fixed z-50 px-3 py-3 space-y-2">
      <div className="w-full flex items-center justify-between">
        <Image height={32} src={logo} alt="Dusdusan.com" />
        <div className=" space-x-1">
          <button className="border border-[#ffad00] hover:bg-[#ffad00] px-3 py-1 hover:transition-all hover:ease-cubic-bezier(0.645, 0.045, 0.355, 1) hover:durarion-300 text-[#ffad00] hover:text-white rounded">
            <p className="font-medium text-sm">Masuk</p>
          </button>
          <button className="border border-[#ffad00] bg-[#ffad00] hover:bg-white px-3 py-1 hover:transition-all hover:ease-cubic-bezier(0.645, 0.045, 0.355, 1) hover:durarion-300 text-white hover:text-[#ffad00] rounded">
            <p className="font-medium text-sm">Daftar</p>
          </button>
        </div>
      </div>
      <div className="w-full flex items-center space-x-2 border px-3 py-1 rounded">
        <IoSearchOutline className="text-slate-200" />
        <input
          type="text"
          placeholder="Cari barang kamu disini..."
          className="w-full focus:outline-none text-sm"
        />
      </div>
    </div>
  );
}
