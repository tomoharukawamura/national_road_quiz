import Link from "next/link";
import modes from "../modes/modes.json"
import { mode } from "@/lib/wrappers";

export default function Home() {
  const data = Object.keys(modes).map(key => [mode(key), modes[mode(key)].mode])
  return (
    <main>
      <h1>メニュー</h1>
      <div>
      { 
        data.map((d, idx) => (
          <div key={idx}>
            <Link href={`/${d[0]}`}>
              { d[1] }
            </Link>
          </div>
        ))
      }
      </div>
    </main>
  );
}
