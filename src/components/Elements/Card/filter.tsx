import Arrow from "../../../assets/rightArrow.png";
import CheckBox from "./inputcheckbox";

type Props = {
  handleReset: () => void;
  filterPemasaran: () => void;
};

const Filter = ({ handleReset, filterPemasaran }: Props) => {
  return (
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
          <CheckBox
            onClick={filterPemasaran}
            name="Pemasaran"
            id="pemasaran-harga"
          />
          <CheckBox name="Digital & Teknologi" id="digital-&-teknologi-harga" />
          <CheckBox name="Pengembangan Diri" id="pengembangan-diri-harga" />
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
  );
};
export default Filter;
