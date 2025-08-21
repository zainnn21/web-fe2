import ProfileLayout from "../components/Layouts/ProfileLayout";
import Header from "../components/Fragments/Header";
import Footer from "../components/Fragments/Footer";
import Profile from "../components/Fragments/Profile";

const ProfilePage = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <ProfileLayout>
        <Profile />
      </ProfileLayout>
      <Footer />
    </div>
  );
};

export default ProfilePage;
