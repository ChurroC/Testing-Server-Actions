import { cookies } from "next/headers";
import { PagesApiComponent } from "./PagesApiComponent";
import { ServerActionWithCookieComponent } from "./ServerActionWithCookie";
import { ServerActionWithoutCookieComponent } from "./ServerActionWithoutCookieComponent";

export default async function Home() {
  const cookie = (await cookies().get("theme"))?.value ?? "light";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 p-24">
      <h1 className="text-black dark:text-white">
        Server Action Cookie Glitch
      </h1>
      <ServerActionWithCookieComponent />
      <ServerActionWithoutCookieComponent />
      <PagesApiComponent cookie={cookie} />
    </main>
  );
}
