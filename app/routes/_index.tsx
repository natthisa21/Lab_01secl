import type { MetaFunction } from "@remix-run/node";
import Check from "./bestseller";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
   <div>
    <Check />
   </div>
  );
}
