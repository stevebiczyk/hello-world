import { Counter } from "./counter";

export const metadata = {
  title: "Counter",
};

export default function CounterPage() {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}
