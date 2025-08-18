import WideCard from "../Elements/WideCard/Index.js";
import Title from "../Elements/TitleForm/Title.js";
import Paragraph from "../Elements/TitleForm/Paragraph.js";
import CategoryTabs from "../Elements/List/index";
import Data from "../../data/cardClass.js";
import Card from "../Elements/Card/index.js";

const BodyHome = () => {
  return (
    <>
      <WideCard
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        paragraph="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        namecard="topcard"
      ></WideCard>
      <div className="flex flex-col md:gap-8 gap-6 md:w-300 w-80 ">
        <div className="flex flex-col md:gap-3 gap-2.5">
          <Title tvariant="text-left ">
            Koleksi Video Pembelajaran Unggulan
          </Title>
          <Paragraph pvariant="text-left font-medium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </Paragraph>
        </div>
        <CategoryTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Data.map((Data) => (
            <Card key={Data.id} {...Data} />
          ))}
        </div>
        <WideCard namecard="lowercard" />
      </div>
    </>
  );
};

export default BodyHome;
