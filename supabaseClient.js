import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ HATA: Supabase URL veya ANON KEY eksik!')
  console.error('Lütfen .env dosyasını kontrol edin.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Bağlantıyı test et
supabase
  .from('stok')
  .select('count')
  .then(({ error }) => {
    if (error) {
      console.error('❌ Supabase bağlantı hatası:', error.message)
    } else {
      console.log('✅ Supabase bağlantısı başarılı!')
    }
  })
