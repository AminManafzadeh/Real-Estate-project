import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const handleAdd = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  return (
    <div className="mb-10">
      <p className="text-lg mb-[5px]">{title}</p>
      {profileData[type]?.map((i, index) => (
        <div key={index} className="flex my-[10px]">
          <input type="text" className="inputArea" />
        </div>
      ))}
      <button
        className="border-none bg-mainBlue text-mainWhite rounded-[5px] transition-all ease-in duration-100 cursor-pointer py-1 px-2 flex mt-5 hover:opacity-90"
        onClick={handleAdd}
      >
        افزودن <MdOutlineLibraryAdd className="mr-[5px] text-xl" />
      </button>
    </div>
  );
}

export default TextList;
