import ProfileLayout from "../components/Layouts/ProfileLayout";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import Profile from "../components/Fragments/Profile";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileLayout>
        <Profile />
      </ProfileLayout>
      <Footer />
    </>
  );
};

export default ProfilePage;
