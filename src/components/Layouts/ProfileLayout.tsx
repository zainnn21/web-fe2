type ProfileLayoutProps = {
  children: React.ReactNode;
};

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  return (
    <main className="px-5 py-7 gap-6 flex flex-col md:flex-row md:px-30 md:py-16 md:gap-9 md:justify-center">
      {children}
    </main>
  );
};

export default ProfileLayout;
