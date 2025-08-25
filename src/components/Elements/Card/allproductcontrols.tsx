interface ProductControlsProps {
  selectedValue: string;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProductControls = ({ selectedValue, onSelectChange }: ProductControlsProps) => {
  return (
    <div className="flex gap-4 justify-end">
      <select
        name="urutkan"
        id="urutkan"
        className="rounded-[10px] bg-white border px-3 border-[#3A35411F] cursor-pointer"
        onChange={onSelectChange}
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
  );
};

export default ProductControls;