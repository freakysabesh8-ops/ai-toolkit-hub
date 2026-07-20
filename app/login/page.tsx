"use client";

import { supabase } from "@/lib/supabase";

export default function Login() {

async function login(){
 await supabase.auth.signInWithOAuth({
  provider:"google",
  options:{
   redirectTo:"http://localhost:3000/auth/callback",
  }
 });
}

return (
<div className="min-h-screen flex items-center justify-center">
<button
onClick={login}
className="bg-white text-black px-6 py-3 rounded-xl"
>
Login with Google
</button>
</div>
)

}