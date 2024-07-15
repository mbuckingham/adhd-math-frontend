import ProgressBar from "./components/progress-bar";
import Welcome from "./welcome/welcome";

export default function Page() {
  return (
    <div>
      <Welcome />
      <ProgressBar />
      <h1>Hello World</h1>
    </div>
  );
}
