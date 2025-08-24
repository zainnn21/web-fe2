import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import Filter from "../Elements/Card/filter";
import Card from "../Elements/Card";
import Data from "../../data/cardClass";
import Pagination from "../Elements/Card/Pagination";
import { useEffect, useState } from "react";

const AllProduct = () => {
  //Filter Product
  const [filteredData, setFilteredData] = useState("all");
  const classFiltered =
    filteredData === "all"
      ? Data
      : Data.filter((item) => item.category === filteredData);
  const [dataToRender, setDataToRender] = useState(classFiltered);
  console.log(filteredData);
  // Sort Product Option
  const [selectedValue, setSelectedValue] = useState(`default`);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  // Reset Button
  const handleReset = () => {
    setSelectedValue(`default`);
    setCurrentPage(1);
    setFilteredData("all");
  };

  useEffect(() => {
    const sortedAndFilteredData = [...classFiltered];
    setDataToRender(sortedAndFilteredData);
    setCurrentPage(1);
  }, [filteredData, selectedValue]);

  // --- Logika Paginasi ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Tampilkan 6 item per halaman
  // Menghitung total halaman
  const totalPages = Math.ceil(Data.length / itemsPerPage);
  // Menghitung index item pertama dan terakhir untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Mengambil data untuk halaman saat ini menggunakan slice()
  const currentItems = dataToRender.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col px-5 md:px-30 py-7 md:py-16 md:gap-9 gap-6 items-center">
      <div className="flex flex-col md:gap-8 gap-6">
        <TitleCollectionVideo />
        <div className="flex gap-10.5 ">
          {/* filter container */}
          <Filter
            handleReset={handleReset}
            filterPemasaran={() => setFilteredData("Pemasaran")}
          />

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
