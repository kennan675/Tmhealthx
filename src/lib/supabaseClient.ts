import { createClient } from '@supabase/supabase-js'

// For now, using demo values - you'll replace these with real ones from Supabase
const supabaseUrl = 'https://demo.supabase.co'
const supabaseAnonKey = 'demo-key'

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Note: This is a temporary setup. Follow the steps below to get your real credentials:
// 1. Go to https://supabase.com
// 2. Click "Start your project" 
// 3. Sign up with your email or GitHub
// 4. Create a new project (choose any name like "tmhealthx-members")
// 5. Wait for the project to be created (takes 1-2 minutes)
// 6. Once ready, go to Settings > API in your project dashboard
// 7. Copy your "Project URL" and "anon public" key
// 8. Replace the demo values above with your real values