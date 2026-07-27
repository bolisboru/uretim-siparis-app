'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Urunler() {
  const [urunler, setUrunler] = useState([])
  
  useEffect(() => {
    getUrunler()
  }, [])

  async function getUrunler() {
    const { data } = await supabase.from('urunler').select('*')
    setUrunler(data)
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Ürünler</h1>
      {urunler.map(u => (
        <div key={u.id} className="border p-2 my-2">
          {u.ad} - {u.fiyat} TL - Stok: {u.stok}
        </div>
      ))}
    </main>
  )
}
