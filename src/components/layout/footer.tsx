import Image from 'next/image'
import Link from 'next/link'

import { CLOUDINARY_URL } from '@/constants'

export function Footer() {
    const date = new Date()
    return (
        <>
            <footer className="bg-brown-background text-white">
                <div
                    className={`
                      container mx-auto flex flex-col space-y-5 pt-16 pb-14
                      md:flex-row md:space-y-0 md:space-x-20
                    `}
                >
                    <div className="shrink-0">
                        <Image
                            alt="Logo"
                            className="mb-6"
                            height={100}
                            loading="lazy"
                            src={`${CLOUDINARY_URL}/images/svg/logo-green.svg`}
                            width={215}
                        />
                    </div>
                    <div className="flex-1">
                        <p className="mb-6 font-semibold">Integrations</p>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="flex flex-col space-y-2">
                                <Link
                                    className="transition-colors hover:text-green"
                                    href="/integrations/quickbooks-online/"
                                >
                                    Cash Flow Frog for QuickBooks Online
                                </Link>
                                <Link className="transition-colors hover:text-green" href="/integrations/xero/">
                                    Cash Flow Frog for Xero
                                </Link>
                                <Link className="transition-colors hover:text-green" href="/integrations/sage-intacct/">
                                    Cash Flow Frog for Sage Intacct
                                </Link>
                                <Link className="transition-colors hover:text-green" href="/integrations/zoho-books/">
                                    Cash Flow Frog for Zoho Books
                                </Link>
                                <Link className="transition-colors hover:text-green" href="/integrations/freshbooks/">
                                    Cash Flow Frog for FreshBooks
                                </Link>
                                <Link className="transition-colors hover:text-green" href="/integrations/excel/">
                                    Cash Flow Frog for Excel
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Link
                                    className="transition-colors hover:text-green"
                                    href="/integrations/quickbooks-desktop/"
                                >
                                    Cash Flow Frog for QuickBooks Desktop
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-6 font-semibold">Resources</p>
                        <div className="flex flex-col space-y-2">
                            <Link className="transition-colors hover:text-green" href="/blog/">
                                Blog
                            </Link>
                            <Link className="transition-colors hover:text-green" href="/whats-new/">
                                Whats new
                            </Link>
                            <Link className="transition-colors hover:text-green" href="/glossary/">
                                Glossary
                            </Link>
                            <a
                                className="transition-colors hover:text-green"
                                href="https://help.cashflowfrog.com/en"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Help & Support
                            </a>
                            <Link className="transition-colors hover:text-green" href="/about-us/">
                                About us
                            </Link>
                            <Link className="transition-colors hover:text-green" href="/contact/">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`
                      container mx-auto flex flex-col justify-between border-t border-[#343536] py-5 text-xs
                      md:flex-row
                    `}
                >
                    <p>© Cash Flow Frog {date.getFullYear()}. All Rights Reserved.</p>
                    <div className="space-x-5">
                        <Link className="transition-colors hover:text-green" href="/terms-conditions/">
                            Terms & Conditions
                        </Link>
                        <Link className="transition-colors hover:text-green" href="/privacy-policy/">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
