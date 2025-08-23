import { authOption } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOption);
  console.log(session);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user);

  return <div>MyProfiles</div>;
}

export default MyProfiles;
