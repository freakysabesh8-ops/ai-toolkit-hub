import { supabase } from "./supabase";

export async function isAdmin() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data } = await supabase
    .from("admins")
    .select("*")
    .eq("email", user.email)
    .single();

  return !!data;
}