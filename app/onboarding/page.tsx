import ProgressBar from "./components/progress-bar";

export default function Page() {
  return (
    <div>
      <ProgressBar currentProg={"Buddy"} percent={75} />
      <h1>Hello World</h1>
    </div>
  );
}
