import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";

function HomePage() {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تبریز",
    "تهران",
    "مشهد",
    "رشت",
    "اصفهان",
    "کرمانشاه",
    "قشم",
    "اردبیل",
  ];

  return (
    <div>
      <div className="flex justify-center items-center rounded-[10px] p-5 my-[100px]">
        <div className="w-full text-center text-mainBlue">
          <h1 className="font-bold text-5xl mb-[30px]">
            سامانه خرید و اجاره ملک
          </h1>
          <ul className="flex justify-center list-none flex-wrap">
            {services?.map((service) => (
              <li
                className="flex items-center justify-center w-20 m-[10px] bg-lightBlue py-[5px] px-[10px] rounded-[5px]"
                key={service}
              >
                <FiCircle />
                <span className="font-normal mr-[5px] h-5">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <CategoryCard title="خانه ویلایی" name="villa" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
