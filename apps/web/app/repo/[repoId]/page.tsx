export default function RepoId({ params }: { params: { repoId: string } }) {
  return (
    <>
      <div className="text-white flex justify-center h-screen text-5xl">
        My Post: {params.repoId}
      </div>
    </>
  );
}
