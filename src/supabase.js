import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://klnjjuwecubcznotlzcy.supabase.co"
const supabaseKey = "sb_publishable_qwLS4Fn0CT6_ziZUCTLonQ_9oj3FoUF"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)