export const dynamic = "force-dynamic";
import Image from "next/image";

import InfoBar from "@/app/components/InfoBar";
import Header from "@/app/components/Header";
import NewHunter from "@/app/components/NewHunter";
import Slider from "@/app/components/Slider";
import TopSearch from "@/app/components/TopSearch";

export default function Home() {
  return (
    <>
      <InfoBar/>
      <Header />
      <NewHunter />
      <Slider/>
      <TopSearch />
    </>
  );
}
