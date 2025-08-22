"use client";

import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useState } from "react";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const handleSubmit = () => {
    console.log(profileData);
  };

  return (
    <div className="flex flex-col mb-[150px]">
      <h3 className="text-2xl font-normal mb-20 w-full bg-[#304ffe18] text-mainBlue rounded-[10px] py-[10px] px-[15px]">
        ثبت آگهی
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="توضیحات "
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <button
        onClick={handleSubmit}
        className="border-none bg-mainBlue text-mainWhite rounded-[5px] transition-all ease-in duration-100 cursor-pointer p-[10px] hover:opacity-90"
      >
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;
