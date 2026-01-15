'use client'

import { Bell, Search, RefreshCw } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simula refresh
    setTimeout(() => setIsRefreshing(false), 1000)
    window.location.reload()
  }

  return (
    <header className="sticky top-0 z-30 glass border-b border-dark-800">
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        {/* Search - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar orçamentos..."
              className="w-full pl-12 pr-4 py-2.5 bg-dark-800/50 border border-dark-700 rounded-xl text-dark-200 placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50 transition-all"
            />
          </div>
        </div>

        {/* Mobile title */}
        <div className="md:hidden pl-12">
          <h1 className="text-lg font-bold text-white">Controle</h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleRefresh}
            className={`p-2.5 rounded-xl bg-dark-800/50 border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
            title="Sincronizar dados"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
          
          <button className="relative p-2.5 rounded-xl bg-dark-800/50 border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          </button>

          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-dark-700">
            <div className="text-right">
              <p className="text-sm font-medium text-white">Olá, Andressa!</p>
              <p className="text-xs text-dark-400">
                {new Date().toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'short' 
                })}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold shadow-glow">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
