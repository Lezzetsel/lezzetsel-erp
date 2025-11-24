import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
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
// Yardımcı fonksiyonlar
export const dbOperations = {
  // STOK İŞLEMLERİ
  async getStok() {
    const { data, error } = await supabase
      .from('stok')
      .select('*')
      .eq('aktif', true)
      .order('ad');
    if (error) throw error;
    return data;
  },

  async addStok(stokItem) {
    const { data, error } = await supabase
      .from('stok')
      .insert([stokItem])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateStok(id, updates) {
    const { data, error } = await supabase
      .from('stok')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteStok(id) {
    const { error } = await supabase
      .from('stok')
      .update({ aktif: false })
      .eq('id', id);
    if (error) throw error;
  },

  // TEDARİKÇİ İŞLEMLERİ
  async getTedarikciler() {
    const { data, error } = await supabase
      .from('tedarikciler')
      .select('*')
      .eq('aktif', true)
      .order('ad');
    if (error) throw error;
    return data;
  },

  async addTedarikci(tedarikci) {
    const { data, error } = await supabase
      .from('tedarikciler')
      .insert([tedarikci])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateTedarikci(id, updates) {
    const { data, error } = await supabase
      .from('tedarikciler')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteTedarikci(id) {
    const { error } = await supabase
      .from('tedarikciler')
      .update({ aktif: false })
      .eq('id', id);
    if (error) throw error;
  },

  // MÜŞTERİ İŞLEMLERİ
  async getMusteriler() {
    const { data, error } = await supabase
      .from('musteriler')
      .select('*')
      .eq('aktif', true)
      .order('ad');
    if (error) throw error;
    return data;
  },

  async addMusteri(musteri) {
    const { data, error } = await supabase
      .from('musteriler')
      .insert([musteri])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateMusteri(id, updates) {
    const { data, error } = await supabase
      .from('musteriler')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteMusteri(id) {
    const { error } = await supabase
      .from('musteriler')
      .update({ aktif: false })
      .eq('id', id);
    if (error) throw error;
  },

  // SİPARİŞ İŞLEMLERİ
  async getSiparisler() {
    const { data, error } = await supabase
      .from('siparisler')
      .select('*')
      .order('siparis_tarihi', { ascending: false });
    if (error) throw error;
    return data;
  },

  async addSiparis(siparis) {
    const { data, error } = await supabase
      .from('siparisler')
      .insert([siparis])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateSiparis(id, updates) {
    const { data, error } = await supabase
      .from('siparisler')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteSiparis(id) {
    const { error } = await supabase
      .from('siparisler')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  // REÇETE İŞLEMLERİ
  async getReceteler() {
    const { data, error } = await supabase
      .from('receteler')
      .select(`
        *,
        recete_malzemeleri (*)
      `)
      .eq('aktif', true)
      .order('ad');
    if (error) throw error;
    return data;
  },

  async addRecete(recete, malzemeler) {
    // Önce reçeteyi ekle
    const { data: receteData, error: receteError } = await supabase
      .from('receteler')
      .insert([recete])
      .select();
    if (receteError) throw receteError;

    const receteId = receteData[0].id;

    // Sonra malzemeleri ekle
    if (malzemeler && malzemeler.length > 0) {
      const malzemelerWithId = malzemeler.map(m => ({
        ...m,
        recete_id: receteId
      }));

      const { error: malzemeError } = await supabase
        .from('recete_malzemeleri')
        .insert(malzemelerWithId);
      if (malzemeError) throw malzemeError;
    }

    return receteData[0];
  },

  async updateRecete(id, updates, malzemeler) {
    // Reçeteyi güncelle
    const { data, error } = await supabase
      .from('receteler')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;

    // Mevcut malzemeleri sil ve yenilerini ekle
    if (malzemeler) {
      await supabase
        .from('recete_malzemeleri')
        .delete()
        .eq('recete_id', id);

      if (malzemeler.length > 0) {
        const malzemelerWithId = malzemeler.map(m => ({
          ...m,
          recete_id: id
        }));

        await supabase
          .from('recete_malzemeleri')
          .insert(malzemelerWithId);
      }
    }

    return data[0];
  },

  async deleteRecete(id) {
    const { error } = await supabase
      .from('receteler')
      .update({ aktif: false })
      .eq('id', id);
    if (error) throw error;
  },

  // MENÜ İŞLEMLERİ
  async getMenuler() {
    const { data, error } = await supabase
      .from('menuler')
      .select('*')
      .order('tarih');
    if (error) throw error;
    return data;
  },

  async addMenu(menu) {
    const { data, error } = await supabase
      .from('menuler')
      .insert([menu])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateMenu(id, updates) {
    const { data, error } = await supabase
      .from('menuler')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteMenu(id) {
    const { error } = await supabase
      .from('menuler')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  // MÜŞTERİ SİPARİŞLERİ
  async getMusteriSiparisleri() {
    const { data, error } = await supabase
      .from('musteri_siparisleri')
      .select('*')
      .order('tarih', { ascending: false });
    if (error) throw error;
    return data;
  },

  async addMusteriSiparis(siparis) {
    const { data, error } = await supabase
      .from('musteri_siparisleri')
      .insert([siparis])
      .select();
    if (error) throw error;
    return data[0];
  },

  async updateMusteriSiparis(id, updates) {
    const { data, error } = await supabase
      .from('musteri_siparisleri')
      .update(updates)
      .eq('id', id)
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteMusteriSiparis(id) {
    const { error } = await supabase
      .from('musteri_siparisleri')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
