import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


const testFlag = true;
export default function Home() {
  if (testFlag) {
    
    return <Welcome />;
  }
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex flex-col items-center gap--16 ">
        あいうえお
      </div>
    </main>)
}
