import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { BASE_LINK } from '@/constants'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getResponsiveImageLink = (imagePath: string, maxWidth?: number, minWidth?: number) => {
    if (typeof window !== 'undefined') {
        const screenWidth = typeof window !== 'undefined' && window.innerWidth ? window.innerWidth : 1920
        const BASE_LINK = 'https://res.cloudinary.com/cashflowfrog/image/fetch'
        const width = !maxWidth || screenWidth < maxWidth ? screenWidth : maxWidth
        // w_${width < minWidth ? minWidth : width},q_100,c_scale/
        return `${BASE_LINK}/${imagePath}`
    } else return `${BASE_LINK}/${imagePath}`
}
