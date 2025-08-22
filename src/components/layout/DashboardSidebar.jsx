import { authOption } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/module/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOption);

  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-[30px] px-[15px] rounded-[10px] shadow-custom ml-10 w-[220px]">
        <CgProfile className="text-5xl text-mainBlue" />
        <p className="text-gray text-lg font-normal mt-5">
          {session?.user?.email}
        </p>
        <span className="bg-silver w-full h-[1px] mb-[30px]"></span>
        <Link className="my-[5px] font-normal w-full" href="/dashboard">
          حساب کاربری
        </Link>
        <Link
          className="my-[5px] font-normal w-full"
          href="/dashboard/my-profiles"
        >
          آگهی های من
        </Link>
        <Link className="my-[5px] font-normal w-full" href="/dashboard/add">
          ثبت آگهی
        </Link>
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
