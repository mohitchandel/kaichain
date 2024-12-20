import Dapps from "@/components/home/dapps";
import Numbers from "@/components/home/numbers";

import Hero from "@/components/home/hero";
export default function Home() {
  return (
    <main className="font-manrope relative">
      <Hero />
      <Dapps />
      <Numbers />
    </main>
  );
}
