import { IoSearchOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io";
import logo from "./assets/logo.webp";
import Image from "next/image";

export default function Home() {
  const menu = [
    "Promo",
    "Kategori",
    "Terpilih",
    "Terlaris",
    "Terpopuler",
    "Terbaru",
  ];
  const image = [
    {
      image: "1",
      src: "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg",
    },
  ];
  const promoImage = [
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg",
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg",
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="px-3 py-3 space-y-2">
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
      <div className="bg-[#00b0b9]">
        <ul className="flex items-center justify-between px-3">
          {menu.map((info, index) => (
            <li key={index} className="p-2.5">
              <a href="" className="text-vsm text-white font-bold uppercase">
                {info}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        {image.map((data, index) => (
          <Image
            key={index}
            src={data.src}
            alt={data.image}
            objectFit="true"
            width={1000}
            height={500}
            className="w-full"
          />
        ))}
      </div>
      {/* <ul className="w-full flex items-center justify-center gap-1 absolute bottom-1 text-center">
		<li href="" className="relative"><button className=" w-6 h-2.5 p-1 bg-gray-400 opacity-50 block hover:bg-white hover:opacity-100 focus:bg-[#00b0b9] focus:opacity-100 border-0 focus:outline-none focus:ring focus:ring-white rounded-full"></button></li>
		<li href="" className="relative"><button className="w-6 h-3 bg-slate-200 opacity-50 hover:bg-white rounded-lg"></button></li>
		<li href="" className="relative"><button className="w-6 h-3 bg-slate-200 opacity-50 hover:bg-white rounded-lg"></button></li>
		<li href="" className="relative"><button className="w-6 h-3 bg-slate-200 opacity-50 hover:bg-white rounded-lg"></button></li>
		<li href="" className="relative"><button className="w-6 h-3 bg-slate-200 opacity-50 hover:bg-white rounded-lg"></button></li>
	</ul> */}
      <div className="pt-5">
        <div className="flex items-center justify-between px-3">
          <p className="text-[#282828] text-[15px] font-bold">Promo</p>
          <button className="bg-[#ffad00] px-3 py-1 text-white rounded flex items-center">
            <p className="font-medium text-vsm">Lihat Semua</p>
            <IoIosArrowForward className="text-vsm" />
          </button>
        </div>
        <div className="relative">
          <div className="w-full inline-flex items-center">
            {promoImage.map((img, index) => (
              <div key={index} className="w-full py-2.5 px-1">
                <a href="">
                  <Image
                    src={img.src}
                    alt={img.image}
                    key={index}
                    objectFit="true"
                    width={500}
                    height={200}
                    className="w-full"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
