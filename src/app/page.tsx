import { Dashboard } from "@/components/dashboard/dashboard";
import { unstable_noStore } from "next/cache";
import Image from "next/image";

export default function Home() {
  unstable_noStore();

  return (
    <main className="grid h-full w-full pl-[53px]">
      <Dashboard />
    </main>
  );
}
