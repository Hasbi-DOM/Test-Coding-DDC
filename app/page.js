"use client";
import { IoIosArrowForward } from "react-icons/io";
import otherIcon from "./assets/other.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import recommendedIcon from "./assets/recommend_icon.svg";
import Header from "./components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataCategoryProduct, setDataCategoryProduk] = useState([]);
  const menu = [
    "Promo",
    "Kategori",
    "Terpilih",
    "Terlaris",
    "Terpopuler",
    "Terbaru"
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return '<span class="' + className + '">' + "</span>";
    }
  };
  const image = [
    {
      image: "1",
      src: "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg"
    }
  ];
  const promoImage = [
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg"
    }
  ];
  const kategoriProdukImg = [
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Persiapan Jualan"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Ibu dan Bayi"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Muslim"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Rumah Tangga"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Elektronik"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Textile"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Kesehatan dan Kecantikan"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Hobi dan Olahraga"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Stationary"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Dapur"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png",
      title: "Makanan dan Minuman"
    }
  ];

  const listPromo = [
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    },
    {
      image: "1",
      src: "https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg",
      description:
        "Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!",
      date: "10 Jun 2024"
    }
  ];

  useEffect(() => {
    const fetchKategoriProduk = async () => {
      const kategoriProduk = await fetch(
        "https://apigateway.dusdusan.com/trendingProductCategory?limit=11&type=homepage"
      );
      const res = await kategoriProduk.json();
      setDataCategoryProduk(res.data);
    };
    fetchKategoriProduk();
  }, []);
  return (
    <div className="w-full relative">
      <Header />
      <div className="pt-[95px]">
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
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={pagination}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {image.map((data, index) => (
              <SwiperSlide key={index}>
                <Image
                  key={index}
                  src={data.src}
                  alt={data.image}
                  objectFit="true"
                  width={1000}
                  height={500}
                  className="w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-y-[15px] pt-[15px]">
          <div className="w-full">
            <div className="flex items-center justify-between px-3">
              <p className="text-[#282828] text-[15px] font-bold">Promo</p>
              <button className="bg-[#ffad00] px-3 py-1 text-white rounded flex items-center">
                <p className="font-medium text-vsm">Lihat Semua</p>
                <IoIosArrowForward className="text-vsm" />
              </button>
            </div>
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
          <div className="bg-gradient-to-tr from-orange-400 via-orange-400 to-white px-5 space-y-[15px]">
            <p className="text-white font-bold text-[15px] pt-[15px]">
              Kategori Produk
            </p>
            <div className="w-full flex flex-wrap gap-4">
              {dataCategoryProduct.map((data, index) => (
                <div
                  key={index}
                  className="w-[60px] overflow-hidden whitespace-nowrap flex flex-col items-center"
                >
                  <div
                    className="bg-white object-cover object-center rounded-md"
                    style={{
                      width: "60px",
                      height: "65px",
                      backgroundImage: `url(${data.image})`,
                      backgroundPositionX: "50%",
                      backgroundPositionY: "50%",
                      backgroundSize: "70%",
                      backgroundAttachment: "initial",
                      backgroundOrigin: "initial",
                      backgroundRepeat: "no-repeat",
                      backgroundClip: "initial",
                      backgroundColor: "rgb(255, 255, 255)"
                    }}
                  />
                  <p className="text-white text-xs text-ellipsis max-w-[60px] overflow-hidden">
                    {data.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="px-[15px] flex items-center justify-between">
            <div className="flex h-[22px] space-x-3">
              <Image src={recommendedIcon} alt="like" className="w-[22px]" />
              <p className="text-[15px] font-bold pt-0.5">
                Menarik untuk disimak
              </p>
            </div>
            <button className="bg-[#ffad00] px-3 py-1 text-white rounded flex items-center">
              <p className="font-medium text-vsm">Lihat Semua</p>
              <IoIosArrowForward className="text-vsm" />
            </button>
          </div>
          <div>
            {listPromo.map((data, index) => (
              <div
                key={index}
                className="w-full border-b border-solid border-[#eee] py-[10px]"
              >
                <div className="flex px-[15px] gap-4">
                  <div className="w-fit">
                    <Image
                      src="https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg"
                      alt="product"
                      width={97}
                      height={97}
                      className="rounded-md h-[97px] w-[150px]"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-xs ">Info Promo</p>
                      <p className="font-medium text-base leading-5">
                        {data.description}
                      </p>
                    </div>
                    <p className="font-medium text-sm text-[#ffad00]">
                      {data.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
