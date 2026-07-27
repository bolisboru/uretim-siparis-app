'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Random Firma - Üretim Sipariş</h1>
      <p>Kurulum başarılı ✅</p>
      <a href="/yeni-siparis" className="bg-blue-500 text-white p-2 rounded">Yeni Sipariş</a>
    </main>
  )
}
