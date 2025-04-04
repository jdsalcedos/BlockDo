import {type NextRequest, NextResponse} from "next/server";
import { createClient } from "@/app/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)

  }
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(origin)
}