import DetailsPage from "@/template/DetailsPage";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXTAUTH_URI}/api/profile`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch profiles");

  const { data } = await res.json();
  console.log(data);

  return data.map((profile) => ({
    profileId: profile._id.toString(),
  }));
}

export default async function ProfileDetail({ params }) {
  const { profileId } = await params;

  const res = await fetch(
    `${process.env.NEXTAUTH_URI}/api/profile/${profileId}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );
  console.log(res);
  if (!res.ok) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  const profile = await res.json();

  return <DetailsPage data={profile} />;
}
