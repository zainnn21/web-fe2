import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import Filter from "../Elements/Card/filter";
import Card from "../Elements/Card";
import Data from "../../data/cardClass";
import Pagination from "../Elements/Card/Pagination";
import ProductControls from "../Elements/Card/allproductcontrols";
import { useEffect, useState } from "react";

const AllProduct = () => {
  //Filter Product
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const classFiltered =
    activeFilters.length === 0
      ? Data
      : Data.filter((item) => activeFilters.includes(item.category));

  const [dataToRender, setDataToRender] = useState(classFiltered);
  console.log(activeFilters);

  const toggleFilter = (category: string) => {
    setActiveFilters((prev) =>
      prev.includes(category)
        ? prev.filter((f) => f !== category)
        : [...prev, category]
    );
  };
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
    setActiveFilters([]);
  };

  useEffect(() => {
    const sortedAndFilteredData = [...classFiltered];
    setDataToRender(sortedAndFilteredData);
    setCurrentPage(1);
  }, [activeFilters, selectedValue]);

  // --- Logika Paginasi ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Tampilkan 6 item per halaman
  // Menghitung total halaman
  const totalPages = Math.ceil(dataToRender.length / itemsPerPage);
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
            filterPemasaran={() => toggleFilter("Pemasaran")}
            filterDigital={() => toggleFilter("Digital & Teknologi")}
            filterPengembangan={() => toggleFilter("Pengembangan Diri")}
            filterBisnis={() => toggleFilter("Bisnis & Manajemen")}
            // filterGratis={() => setFilteredData("Gratis")}
            // filterMurah={() => setFilteredData("Murah")}
            // filterSedang={() => setFilteredData("Sedang")}
            // filterMahal={() => setFilteredData("Mahal")}
            // filter48jam={() => setFilteredData("48jam")}
            // filterKurangDari4jam={() => setFilteredData("KurangDari4jam")}
            // filterLebihDari8jam={() => setFilteredData("LebihDari8jam")}
          />

          {/* product container */}
          <div className="flex flex-col gap-8">
            <ProductControls
              selectedValue={selectedValue}
              onSelectChange={handleSelectChange}
            />

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
