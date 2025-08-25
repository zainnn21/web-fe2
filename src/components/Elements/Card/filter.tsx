import Arrow from "../../../assets/rightArrow.png";
import CheckBox from "./inputcheckbox";

type Props = {
  handleReset: () => void;
  filterPemasaran: () => void;
  filterDigital: () => void;
  filterPengembangan: () => void;
  filterBisnis: () => void;
  filterGratis?: () => void;
  filterMurah?: () => void;
  filterSedang?: () => void;
  filterMahal?: () => void;
  filterKurangDari4jam?: () => void;
  filter48jam?: () => void;
  filterLebihDari8jam?: () => void;
};

const Filter = ({ handleReset, ...rest }: Props) => {
  console.log(rest);
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
          <CheckBox
            onChange={rest.filterPemasaran}
            name="Pemasaran"
            id="pemasaran"
          />
          <CheckBox
            onChange={rest.filterDigital}
            name="Digital & Teknologi"
            id="digital-&-teknologi"
          />
          <CheckBox
            onChange={rest.filterPengembangan}
            name="Pengembangan Diri"
            id="pengembangan-diri"
          />
          <CheckBox
            onChange={rest.filterBisnis}
            name="Bisnis Manajemen"
            id="bisnis-manajemen"
          />
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
          <CheckBox onChange={rest.filterGratis} name="Gratis" id="gratis" />
          <CheckBox
            onChange={rest.filterMurah}
            name="Rp 0 - Rp 300K"
            id="0-300k"
          />
          <CheckBox
            onChange={rest.filterSedang}
            name="Rp 300K - Rp 500K"
            id="300k-500k"
          />
          <CheckBox onChange={rest.filterMahal} name="Rp 500K+" id="500k-plus" />
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
            onChange={rest.filterKurangDari4jam}
            name="Kurang Dari 4 Jam"
            variant="rounded-full"
            id="kurang-dari-4-jam"
          />
          <CheckBox onChange={rest.filter48jam} name="4 - 8 Jam" id="4-8-jam" />
          <CheckBox
            onChange={rest.filterLebihDari8jam}
            name="Lebih Dari 8 Jam"
            id="lebih-dari-8-jam"
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
