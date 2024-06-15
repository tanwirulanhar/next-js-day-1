import Link from "next/link";




export default function Home() {
  return (
 
   <div className="gap-4 bg-slate-600 text-center py-10">
      <Link href="toko/barang">Barang</Link>
      <Link href="toko/Superindo">Superindo</Link>
      <Link href="user/listUser">List User</Link>
   </div>
  );
}
