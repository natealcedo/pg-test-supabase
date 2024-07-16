import Link from "next/link";

import { getSession, signOut } from "@/app/actions/auth";

export async function AuthButton() {
  const session = await getSession();

  return session ? (
    <form action={signOut}>
      <button className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline">
        Logout
      </button>
    </form>
  ) : (
    <Link
      href="/login"
      className="bg-btn-background hover:bg-btn-background-hover flex rounded-md px-3 py-2 no-underline"
    >
      Login
    </Link>
  );
}
