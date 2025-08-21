import MyProfile from "../Elements/MyProfile/myprofile";
import Navigation from "../Elements/MyProfile/navigation";
import NavigationButton from "../Elements/MyProfile/NavigationButton";
import MyProfileForm from "../Elements/MyProfile/myprofileform";
import Button from "../Elements/Button";
import CountryCode from "../Elements/MyProfile/countrycode";
import userData from "../../data/userData";

const Profile = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value as string);
    });
    
    alert("Data berhasil diubah");
    window.location.reload();
  };
  return (
    <>
      <div className="flex flex-col gap-6">
        <Navigation title="Profil Saya" desc="Ubah data diri anda" />
        <div className="flex flex-col gap-2 rounded-[10px] bg-white border border-[#3A35411F] p-5 md:p-6">
          <NavigationButton
            imgSrc="/Person.png"
            imgAlt="profile"
            buttonTitle="Profil Saya"
            navigate="/myprofile"
            variant="bg-[#FFF7D7CC] border-[#FFBD3A] border text-[#FFBD3A]"
          />
          <NavigationButton
            imgSrc="/kelassaya-white.png"
            imgAlt="kelas saya"
            buttonTitle="Kelas Saya"
            navigate="#"
          />
          <NavigationButton
            imgSrc="/pesanansaya-white.png"
            imgAlt="pesananan saya"
            buttonTitle="Pesanan Saya"
            navigate="#"
          />
        </div>
      </div>
      <form
        className="rounded-[10px] border p-6 flex flex-col gap-6 bg-white border-[#3A35411F]"
        onSubmit={handleSubmit}
      >
        <MyProfile
          imgSrc="/myprofile.png"
          imgAlt="profile"
          name={userData.name ?? ""}
          email={userData.email ?? ""}
          button="Ganti Foto Profil"
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <MyProfileForm
            label="Nama Lengkap"
            name="namalengkap"
            value={userData.name ?? ""}
          />
          <MyProfileForm
            label="E-Mail"
            name="email"
            type="email"
            value={userData.email ?? ""}
          />
          <MyProfileForm
            label="Password"
            name="password"
            type="password"
            value={userData.password ?? ""}
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <CountryCode countryCode={userData.countryCode ?? ""} />
          <MyProfileForm
            label=""
            name="nohp"
            type="tel"
            value={userData.nohp ?? ""}
          />
        </div>

        <div className="flex justify-end">
          <Button
            label="Simpan"
            typeButton="submit"
            bg="bg-[#3ECF4C]"
            textColor="text-white md:w-[112px]"
          />
        </div>
      </form>
    </>
  );
};
export default Profile;
