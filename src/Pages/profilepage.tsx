import ProfileLayout from "../components/Layouts/ProfileLayout";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileLayout>
        <h1>Halaman Profil</h1>
      </ProfileLayout>
      <Footer />
    </>
  );
};

export default ProfilePage;
