import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import Arrow from "../../assets/rightArrow.png";
import Card from "../Elements/Card";
import Data from "../../data/cardClass";

const AllProduct = () => {
  return (
    <div className="flex flex-col px-5 md:px-30 py-7 md:py-16 md:gap-16 gap-6 items-center">
      <TitleCollectionVideo />
      <div className="flex gap-10.5">
        {/* filter container */}
        <div className="rounded-[10px] bg-white border md:p-5 p-4 flex flex-col gap-4 border-[#3A35411F] w-90 md:max-h-[668px]">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[18px] leading-[120%] font-poppins text-[#333333]">
              Filter
            </p>
            <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B] cursor-pointer">
              Reset
            </button>
          </div>
          <div className="rounded-[10px] bg-white border px-4 py-3 flex flex-col gap-4.5 border-[#3A35411F]">
            <div className="flex justify-between cursor-pointer hover:text-[#3ECF4C] ">
              <button className="font-medium text-base leading-[140%] tracking-[0.2px] ">
                Bidang Studi
              </button>
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="flex flex-col gap-3">
              <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333] cursor-pointer">
                Pemasaran
              </button>
              <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333] cursor-pointer">
                Digital & Teknologi
              </button>
              <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333] cursor-pointer">
                Pengembangan Diri
              </button>
              <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333] cursor-pointer">
                Bisnis Manajemen
              </button>
            </div>
          </div>
        </div>

        {/* product container */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 justify-end">
            <select
              name="urutkan"
              id="urutkan"
              className="rounded-[10px] bg-white border px-3 border-[#3A35411F] cursor-pointer"
            >
              <option value="default" disabled selected>
                Urutkan
              </option>
              <option value="harga_terendah" className="rounded-[10px]">
                Harga Terendah
              </option>
              <option value="harga_tertinggi">Harga Tertinggi</option>
              <option value="A to Z">A to Z</option>
              <option value="Z to A">Z to A</option>
              <option value="rating_tertinggi">Rating Tertinggi</option>
              <option value="rating_terendah">Rating Terendah</option>
            </select>
            <div className="relative">
              <input
                className="rounded-[10px] bg-white border px-3 py-3 border-[#3A35411F] cursor-pointer flex w-55 justify-between"
                placeholder="Cari Kelas"
              />
              <img
                src="/carikelas.png"
                alt=""
                className="absolute right-3 top-3 "
              />
            </div>
          </div>

          {/*course section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {Data.slice(0, 6).map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
