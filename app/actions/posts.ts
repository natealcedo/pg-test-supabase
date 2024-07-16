"use server";

import "server-only";

import { createClient } from "@/utils/supabase/server";

export async function createPost({
  title,
  content,
  user_id,
}: {
  title: string;
  content: string;
  user_id: string;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.from("posts").insert({ title, content, user_id });
  if (error !== null) {
    throw error;
  }
  return data;
}
