import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import Arrow from "../../assets/rightArrow.png";
import Card from "../Elements/Card";
import Data from "../../data/cardClass";
import CheckBox from "../Elements/Card/inputcheckbox";
import Pagination from "../Elements/Card/Pagination";
import { useState } from "react";

const AllProduct = () => {
  const [selectedValue, setSelectedValue] = useState(`default`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Tampilkan 6 item per halaman

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const handleReset = () => {
    setSelectedValue(`default`);
    setCurrentPage(1);
  };

  // --- Logika Paginasi ---
  // Menghitung total halaman
  const totalPages = Math.ceil(Data.length / itemsPerPage);
  // Menghitung index item pertama dan terakhir untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Mengambil data untuk halaman saat ini menggunakan slice()
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col px-5 md:px-30 py-7 md:py-16 md:gap-9 gap-6 items-center">
      <div className="flex flex-col md:gap-8 gap-6">
        <TitleCollectionVideo />
        <div className="flex gap-10.5 ">
          {/* filter container */}
          <div className="rounded-[10px] bg-white border md:p-5 p-4 flex flex-col gap-4 border-[#3A35411F] w-90 md:max-h-[668px]">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-[18px] leading-[120%] font-poppins text-[#333333]">
                Filter
              </p>
              <button
                className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B] cursor-pointer"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
            <div className="rounded-[10px] bg-white border px-4 py-3 flex flex-col gap-4.5 border-[#3A35411F]">
              <div className="flex gap-4 cursor-pointer hover:text-[#3ECF4C] ">
                <img src="/Notebook.png" alt="notebook" />
                <button className="font-medium text-base leading-[140%] tracking-[0.2px] w-full text-left">
                  Bidang Studi
                </button>
                <img src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-3">
                <CheckBox name="Pemasaran" id="pemasaran" />
                <CheckBox name="Digital & Teknologi" id="digital-&-teknologi" />
                <CheckBox name="Pengembangan Diri" id="pengembangan-diri" />
                <CheckBox name="Bisnis Manajemen" id="bisnis-manajemen" />
              </div>
            </div>
            <div className="rounded-[10px] bg-white border px-4 py-3 flex flex-col gap-4.5 border-[#3A35411F]">
              <div className="flex gap-4 cursor-pointer hover:text-[#3ECF4C] ">
                <img src="/ShoppingBag.png" alt="notebook" />
                <button className="font-medium text-base leading-[140%] tracking-[0.2px] w-full text-left">
                  Harga
                </button>
                <img src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-3">
                <CheckBox name="Pemasaran" id="pemasaran-harga" />
                <CheckBox
                  name="Digital & Teknologi"
                  id="digital-&-teknologi-harga"
                />
                <CheckBox
                  name="Pengembangan Diri"
                  id="pengembangan-diri-harga"
                />
                <CheckBox name="Bisnis Manajemen" id="bisnis-manajemen-harga" />
              </div>
            </div>
            <div className="rounded-[10px] bg-white border px-4 py-3 flex flex-col gap-4.5 border-[#3A35411F]">
              <div className="flex gap-4 cursor-pointer hover:text-[#3ECF4C] ">
                <img src="/Clock.png" alt="notebook" />
                <button className="font-medium text-base leading-[140%] tracking-[0.2px] w-full text-left">
                  Durasi
                </button>
                <img src={Arrow} alt="arrow" />
              </div>
              <div className="flex flex-col gap-3">
                <CheckBox
                  name="Kurang Dari 4 Jam"
                  variant="rounded-full"
                  id="kurang-dari-4-jam"
                />
                <CheckBox name="4 - 8 Jam" id="4-8-jam" />
                <CheckBox name="Lebih Dari 8 Jam" id="lebih-dari-8-jam" />
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
                onChange={handleSelectChange}
                value={selectedValue}
              >
                <option value="default" disabled>
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
                  type="text"
                  name="cari"
                  id="cari"
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
              {currentItems.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>

            {/* Komponen Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
