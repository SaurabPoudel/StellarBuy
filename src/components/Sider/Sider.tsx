import Image from "next/image";
import Categories from "./Categories";
import Link from "next/link";

export default function Sider() {
  return (
    <main className="w-[300px] h-[100vh] border-r-2 border-gray-400">
      <Link href="/">
        <Image
          src="/stellar-buy.png"
          width={200}
          height={100}
          alt="Picture of the stellar buy logo"
        />
      </Link>
      <div className="my-5">Filters</div>
      <Categories />
    </main>
  );
}
