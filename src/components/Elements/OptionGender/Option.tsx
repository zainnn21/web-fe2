const OptionGender = () => {
  return (
    <select
      name="Jenis Kelamin"
      className="rounded-md border border-solid border-[#3A35411F] h-12 px-2 font-normal text-sm  leading-[] tracking-[0.2px] text-[#222325] cursor-pointer"
    >
      <option value="Perempuan">Wanita</option>
      <option value="Laki-laki">Laki-laki</option>
    </select>
  );
};

export default OptionGender;
