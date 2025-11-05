import Image from 'next/image'
import Link from 'next/link'

import { getResponsiveImageLink } from '@/lib/utils'

export function Footer() {
    const date = new Date()
    return (
        <>
            <footer className="bg-black text-white">
                <div className="container flex flex-col space-y-5 pt-16 pb-14 md:flex-row md:space-y-0 md:space-x-20">
                    <div className="shrink-0">
                        <Image
                            alt="Logo"
                            className="mb-6"
                            height={100}
                            loading="lazy"
                            src={getResponsiveImageLink('images/svg/logo-green.svg', 215)}
                            width={215}
                        />
                    </div>
                    <div className="flex-1">
                        <p className="mb-6 font-semibold">Integrations</p>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="flex flex-col space-y-2">
                                <Link
                                    className="hover:text-green transition-colors"
                                    href="/integrations/quickbooks-online/"
                                >
                                    Cash Flow Frog for QuickBooks Online
                                </Link>
                                <Link className="hover:text-green transition-colors" href="/integrations/xero/">
                                    Cash Flow Frog for Xero
                                </Link>
                                <Link className="hover:text-green transition-colors" href="/integrations/sage-intacct/">
                                    Cash Flow Frog for Sage Intacct
                                </Link>
                                <Link className="hover:text-green transition-colors" href="/integrations/zoho-books/">
                                    Cash Flow Frog for Zoho Books
                                </Link>
                                <Link className="hover:text-green transition-colors" href="/integrations/freshbooks/">
                                    Cash Flow Frog for FreshBooks
                                </Link>
                                <Link className="hover:text-green transition-colors" href="/integrations/excel/">
                                    Cash Flow Frog for Excel
                                </Link>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Link
                                    className="hover:text-green transition-colors"
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
                            <Link className="hover:text-green transition-colors" href="/blog/">
                                Blog
                            </Link>
                            <Link className="hover:text-green transition-colors" href="/whats-new/">
                                Whats new
                            </Link>
                            <Link className="hover:text-green transition-colors" href="/glossary/">
                                Glossary
                            </Link>
                            <a
                                className="hover:text-green transition-colors"
                                href="https://help.cashflowfrog.com/en"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Help & Support
                            </a>
                            <Link className="hover:text-green transition-colors" href="/about-us/">
                                About us
                            </Link>
                            <Link className="hover:text-green transition-colors" href="/contact/">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`
                      container flex flex-col justify-between border-t border-[#343536] py-5 text-xs
                      md:flex-row
                    `}
                >
                    <p>© Cash Flow Frog {date.getFullYear()}. All Rights Reserved.</p>
                    <div className="space-x-5">
                        <Link className="hover:text-green transition-colors" href="/terms-conditions/">
                            Terms & Conditions
                        </Link>
                        <Link className="hover:text-green transition-colors" href="/privacy-policy/">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
