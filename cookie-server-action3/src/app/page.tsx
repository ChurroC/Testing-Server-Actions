import { PagesApiComponent } from "./PagesApiComponent";
import { ServerActionWithCookieComponent } from "./ServerActionWithCookieComponent";
import { ServerActionWithoutCookieComponent } from "./ServerActionWithoutCookieComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 p-24">
      <h1 className="text-white">Server Action Cookie Glitch</h1>
      <ServerActionWithCookieComponent />
      <ServerActionWithoutCookieComponent />
      <PagesApiComponent />
    </main>
  );
}
