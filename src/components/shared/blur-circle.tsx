import { cn } from '@/lib/utils'

export function BlurCircle({
    bottom,
    className,
    color,
    left,
    right,
    size,
    top,
}: {
    bottom?: number
    className?: string
    color: 'blue' | 'green'
    left?: number
    right?: number
    size: number
    top?: number
}) {
    const background =
        color === 'blue'
            ? 'radial-gradient(50% 50% at 50% 50%, #176BF2 0%, rgba(23, 107, 242, 0) 100%)'
            : 'radial-gradient(50% 50% at 50% 50%, #008E69 0%, rgba(0, 142, 105, 0) 100%)'

    return (
        <div
            className={cn(
                `pointer-events-none absolute rounded-full opacity-40 blur-[400px] select-none print:hidden`,
                className,
            )}
            style={{ background, bottom, height: size, left, right, top, width: size }}
        />
    )
}
