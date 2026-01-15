'use client'

import { TrendingUp, TrendingDown, Target, DollarSign } from 'lucide-react'
import { cn, formatCurrency, formatPercent } from '@/lib/utils'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  variant: 'success' | 'danger' | 'info' | 'warning'
  icon?: React.ReactNode
  trend?: 'up' | 'down'
  delay?: number
}

const variantIcons = {
  success: <DollarSign className="w-8 h-8" />,
  danger: <TrendingDown className="w-8 h-8" />,
  info: <Target className="w-8 h-8" />,
  warning: <TrendingUp className="w-8 h-8" />,
}

const variantColors = {
  success: 'text-primary-400',
  danger: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-amber-400',
}

const variantBg = {
  success: 'bg-primary-500/10',
  danger: 'bg-red-500/10',
  info: 'bg-blue-500/10',
  warning: 'bg-amber-500/10',
}

export function KPICard({ 
  title, 
  value, 
  subtitle, 
  variant, 
  icon,
  trend,
  delay = 0 
}: KPICardProps) {
  return (
    <div 
      className={cn(
        "kpi-card group cursor-default animate-slide-up",
        variant
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-dark-400 uppercase tracking-wider">
            {title}
          </p>
          <p className={cn(
            "text-3xl font-bold font-heading",
            variantColors[variant]
          )}>
            {typeof value === 'number' ? formatCurrency(value) : value}
          </p>
          {subtitle && (
            <div className="flex items-center gap-2">
              {trend && (
                trend === 'up' 
                  ? <TrendingUp className="w-4 h-4 text-primary-400" />
                  : <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span className="text-sm text-dark-500">{subtitle}</span>
            </div>
          )}
        </div>
        
        <div className={cn(
          "p-3 rounded-xl transition-transform duration-300 group-hover:scale-110",
          variantBg[variant]
        )}>
          <div className={variantColors[variant]}>
            {icon || variantIcons[variant]}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
        <div className={cn(
          "w-full h-full rounded-tl-full",
          variant === 'success' && "bg-primary-500",
          variant === 'danger' && "bg-red-500",
          variant === 'info' && "bg-blue-500",
          variant === 'warning' && "bg-amber-500",
        )} />
      </div>
    </div>
  )
}
