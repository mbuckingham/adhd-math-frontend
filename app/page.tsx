import Image from "next/image";
import ProgressBar from "./onboarding/components/progress-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProgressBar />
      <h1>ADHD Math Frontend</h1>
    </main>
  );
}
