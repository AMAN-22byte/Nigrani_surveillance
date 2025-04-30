import Image from "next/image";
import Detection from "../app/components/Detection";
// import styles from "../styles/Home.module.css"";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-8">
    <h1 className=" gradient font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md: px-6 text-center">Nigrani(Surveillance)</h1>
    <Detection/>
    </main>
    
    </>
  );
}
