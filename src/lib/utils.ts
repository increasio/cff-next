import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function nFormatter(num: number, digits = 1): string {
    if (!Number.isFinite(num)) return '0'

    const units = [
        { value: 1e18, symbol: 'E' },
        { value: 1e15, symbol: 'P' },
        { value: 1e12, symbol: 'T' },
        { value: 1e9, symbol: 'G' },
        { value: 1e6, symbol: 'M' },
        { value: 1e3, symbol: 'k' },
        { value: 1, symbol: '' },
    ]

    const unit = units.find((u) => num >= u.value) ?? units.at(-1)!
    const scaled = num / unit.value

    return scaled.toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + unit.symbol
}
