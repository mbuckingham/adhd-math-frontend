import Image from "next/image";
import ProgressBar from "./onboarding/components/progress-bar";
import Welcome from "./onboarding/welcome/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome />
      <ProgressBar />
      <h1>ADHD Math Frontend</h1>
    </main>
  );
}
