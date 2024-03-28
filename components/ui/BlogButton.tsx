import { useRouter } from "next/navigation";
export default function BlogButton({ id }: any) {
  const router = useRouter();
  function handleClick() {
    router.push(`/blogs/${id}`);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#fea61f] px-5 py-1 absolute bottom-7 left-5 text-black rounded-md hover:bg-gradient-to-r from-[#ffde70] to-[#ff9d1d] "
    >
      Continue Reading
    </button>
  );
}
