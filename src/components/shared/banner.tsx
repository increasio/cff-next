'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ACCOUNTS_URL } from '@/constants'

const Banner = () => {
    const pathname = usePathname()

    const [show, setShow] = useState(false)

    useEffect(() => {
        const isClosed = localStorage.getItem('isBannerClosed')
        if (isClosed) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShow(false)
        }
        if (!isClosed && pathname !== '/') {
            setTimeout(() => {
                setShow(true)
            }, 500)
        }
    }, [pathname, show])

    const handleClose = () => {
        setShow(false)
        localStorage.setItem('isBannerClosed', 'true')
    }
    if (!show) {
        return null
    }
    return (
        <div
            className={`
              fixed top-2 left-1/2 z-50 mx-auto flex w-full max-w-xs -translate-x-1/2 items-center justify-between
              gap-x-5 rounded-xl bg-[#0094f4] px-5 py-3 text-white shadow-sm
              md:top-5 md:max-w-2xl
            `}
        >
            <p className="text-sm md:text-base">
                <b>Sign up today</b> and get a lifetime <b>40% off on our Pro plan. </b>
                <a
                    className="font-bold underline decoration-2 transition-all"
                    href={`${ACCOUNTS_URL}/signup?section=banner&cffCoupon=LftmAn40Pro`}
                >
                    Get discount
                </a>
            </p>
            <button
                onClick={() => {
                    handleClose()
                }}
            >
                <svg
                    fill="none"
                    height="1em"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Banner
