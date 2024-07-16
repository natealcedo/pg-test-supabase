import { getUser } from "@/app/actions/auth";
import { AuthButton } from "@/components/AuthButton";
import { Header } from "@/components/Header";
import { ConnectSupabaseSteps } from "@/components/tutorial/ConnectSupabaseSteps";
import { SignUpUserSteps } from "@/components/tutorial/SignUpUserSteps";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const client = createClient();
  const {
    data: { session },
  } = await client.auth.getSession();
  const {
    data: { user },
  } = await getUser();

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div
          className={cn(
            "flex w-full max-w-4xl items-center p-3 text-sm",
            user ? "justify-between" : "justify-end"
          )}
        >
          {user && <span>Hey, {user.email}!</span>}
          <AuthButton />
        </div>
      </nav>

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <Header />
        <main className="flex flex-1 flex-col gap-6">
          <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
          {session ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div>

      <footer className="flex w-full justify-center border-t border-t-foreground/10 p-8 text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
