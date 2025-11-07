'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { CLOUDINARY_URL } from '@/constants'
import { nFormatter } from '@/lib/utils'

interface PricingSelectorProps {
    onClick?: () => void
    onlyPro?: boolean
}

const priceMatrix = {
    standard: {
        0: [29, 39, 49, 59, 79, 99], // monthly
        1: [23, 31, 39, 47, 63, 79], // yearly
        2: [19, 25, 32, 38, 51, 64], // 2 years
    },

    pro: {
        0: [39, 49, 69, 79, 99, 119], // monthly
        1: [31, 39, 55, 63, 79, 95], // yearly
        2: [25, 32, 45, 51, 64, 77], // 2 years
    },

    companies: {
        // <200k, >200k, >500k, >1M, >3M, >10M
        0: [98, 179, 229, 289, 389], // monthly
        1: [78, 143, 183, 231, 311], // yearly
        2: [64, 116, 149, 188, 253], // 2 years
    },
}

const revenueRanges = [200_000, 500_000, 1_000_000, 3_000_000, 10_000_000]
const companyRanges = [3, 10, 15, 25, 50]

export default function PricingSelector({ onClick, onlyPro = false }: PricingSelectorProps) {
    const [selectedPaymentPeriod, setSelectedPaymentPeriod] = useState<0 | 1 | 2>(1)
    const [annualRevenue, setAnnualRevenue] = useState(200_000)
    const [companiesRange, setCompaniesRange] = useState(5)

    return (
        <section className="container mx-auto py-14">
            <p className="text-center text-[32px] font-semibold">Pick your plan</p>
            <div
                className={`
                  mt-10 flex flex-col items-center justify-between space-y-10
                  md:flex-row md:space-y-0 md:space-x-40
                `}
            >
                <div className="space-y-5 md:w-1/2 md:space-y-[72px]">
                    <div>
                        <p className="mb-8 text-[24px] font-semibold">Select the payment period</p>
                        <div className="w-fit rounded-sm bg-[#F8F8F8] p-2 text-sm md:space-x-2 md:text-base">
                            <button
                                className={`${
                                    selectedPaymentPeriod === 0 ? 'bg-primary-200 text-white' : 'bg-transparent'
                                } rounded-sm p-2 md:px-4`}
                                onClick={() => {
                                    setSelectedPaymentPeriod(0)
                                }}
                            >
                                Monthly price
                            </button>
                            <button
                                className={`${
                                    selectedPaymentPeriod === 1 ? 'bg-primary-200 text-white' : 'bg-transparent'
                                } rounded-sm p-2 md:px-4`}
                                onClick={() => {
                                    setSelectedPaymentPeriod(1)
                                }}
                            >
                                Yearly{' '}
                                <span
                                    className={`rounded-sm px-1.5 py-1 text-sm md:ml-2 ${
                                        selectedPaymentPeriod === 1 ? 'bg-white text-black' : 'bg-secondary'
                                    }`}
                                >
                                    -20%
                                </span>
                            </button>
                            <button
                                className={`${
                                    selectedPaymentPeriod === 2 ? 'bg-primary-200 text-white' : 'bg-transparent'
                                } rounded-sm p-2 md:px-4`}
                                onClick={() => {
                                    setSelectedPaymentPeriod(2)
                                }}
                            >
                                2 Years{' '}
                                <span
                                    className={`rounded-sm px-1.5 py-1 text-sm md:ml-2 ${
                                        selectedPaymentPeriod === 2 ? 'bg-white text-black' : 'bg-secondary'
                                    }`}
                                >
                                    -35%
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        {onlyPro ? (
                            <>
                                <p className="mb-8 text-[24px] font-semibold">Select your connect up to companies</p>
                                <div className="relative w-full">
                                    <div
                                        className="absolute -translate-x-7"
                                        style={{ left: `${companiesRange / (50 / 100)}%` }}
                                    >
                                        <p className="relative z-10 px-5 pt-px text-center text-sm text-white">
                                            {companiesRange}
                                            <svg
                                                className="absolute inset-0 z-[-1]"
                                                fill="none"
                                                height="34"
                                                viewBox="0 0 50 34"
                                                width="50"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect fill="#00906B" height="26" rx="4" width="50" />
                                                <path d="M25 34l8-8H17l8 8z" fill="#00906B" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className="customRange mt-10! w-full"
                                        max="50"
                                        min="1"
                                        onChange={(e) => {
                                            setCompaniesRange(+e.target.value)
                                        }}
                                        step="1"
                                        type="range"
                                        value={companiesRange}
                                    />
                                    <div className="flex w-full justify-between">
                                        <p className="px-2 text-neutral-500 md:absolute md:right-full md:bottom-2">1</p>
                                        <p className="px-2 text-neutral-500 md:absolute md:bottom-2 md:left-full">
                                            50&lt;
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="mb-8 text-[24px] font-semibold">Select your annual revenue</p>
                                <div className="relative w-full">
                                    <div
                                        className="absolute origin-center -translate-x-1/2"
                                        style={{
                                            left: `${2 + annualRevenue / (10_000_000 / 96)}%`,
                                        }}
                                    >
                                        <p className="relative z-10 w-[50px] px-1 pt-px text-center text-sm text-white">
                                            ${nFormatter(annualRevenue, 1)}
                                            <svg
                                                className="absolute inset-0 z-[-1]"
                                                fill="none"
                                                height="34"
                                                viewBox="0 0 50 34"
                                                width="50"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect fill="#00906B" height="26" rx="4" width="50" />
                                                <path d="M25 34l8-8H17l8 8z" fill="#00906B" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className="mt-10! w-full"
                                        max="10000000"
                                        min="0"
                                        onChange={(e) => {
                                            setAnnualRevenue(+e.target.value)
                                        }}
                                        step="10000"
                                        type="range"
                                        value={annualRevenue}
                                    />
                                    <div className="flex w-full justify-between">
                                        <p className="px-2 text-neutral-600 md:absolute md:right-full md:bottom-2">
                                            $200k
                                        </p>
                                        <p className="px-2 text-neutral-600 md:absolute md:bottom-2 md:left-full">
                                            $10M&lt;
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="space-y-6 md:w-1/2">
                    {!onlyPro && (
                        <div
                            className="p-8"
                            style={{
                                boxShadow:
                                    '0px -1.10282px 22.6078px rgba(40, 41, 46, 0.04), 0px -0.13809px 2.83085px rgba(40, 41, 46, 0.02)',
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[48px] font-semibold">
                                        $
                                        {getPrice({
                                            annualRevenue,
                                            companiesRange,
                                            plan: 'standard',
                                            selectedPaymentPeriod,
                                        })}
                                        <span className="text-base font-normal text-neutral-600">/month</span>
                                    </p>
                                    <p className="text-[24px] font-semibold">Standard</p>
                                </div>
                                <Image
                                    alt="Standard"
                                    height={100}
                                    loading="lazy"
                                    src={`${CLOUDINARY_URL}/images/standardPrice.svg`}
                                    width={94}
                                />
                            </div>
                            <p className="mt-3 text-neutral-600">Plan long term cash flow & test scenarios</p>
                            <p className="mt-3 text-sm text-neutral-600">
                                *For Sage Intacct pricing, please{' '}
                                <Link className="underline" href="/contact">
                                    contact us
                                </Link>
                            </p>
                            <a
                                className="btnSecondary mt-5 w-full text-center"
                                href={
                                    onClick
                                        ? '##'
                                        : 'https://accounts.cashflowfrog.com/signup?action=signup&section=pricingStandart&page=pricing'
                                }
                                onClick={onClick}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Get Started
                            </a>
                        </div>
                    )}
                    <div
                        className="p-8"
                        style={{
                            boxShadow:
                                '0px -1.10282px 22.6078px rgba(40, 41, 46, 0.04), 0px -0.13809px 2.83085px rgba(40, 41, 46, 0.02)',
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[48px] font-semibold">
                                    ${getPrice({ annualRevenue, companiesRange, plan: 'pro', selectedPaymentPeriod })}
                                    <span className="text-base font-normal text-neutral-600">/month</span>
                                </p>
                                <p className="text-[24px] font-semibold">Pro</p>
                            </div>
                            <Image
                                alt="Pro"
                                height={100}
                                loading="lazy"
                                src={`${CLOUDINARY_URL}/images/proPrice.svg`}
                                width={103}
                            />
                        </div>
                        <p className="mt-3 text-neutral-600">
                            Stay on top of your cash flow with powerful pro features
                        </p>
                        <p className="mt-3 text-sm text-neutral-600">
                            *For Sage Intacct pricing, please{' '}
                            <Link className="underline" href="/contact">
                                contact us
                            </Link>
                        </p>
                        <a
                            className="btnSecondary mt-5 w-full text-center"
                            href={
                                onClick
                                    ? '##'
                                    : `https://accounts.cashflowfrog.com/signup?action=signup&section=pricingPro&page=${
                                          onlyPro ? 'accountants-and-bookkeepers' : 'pricing'
                                      }`
                            }
                            onClick={onClick}
                            rel="noreferrer"
                            target="_blank"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function getPrice({
    annualRevenue,
    companiesRange,
    plan,
    selectedPaymentPeriod,
}: {
    annualRevenue: number
    companiesRange: number
    plan: 'pro' | 'standard'
    selectedPaymentPeriod: 0 | 1 | 2
}): number | undefined {
    if (plan === 'pro' && companiesRange > 0) {
        const i = getRangeIndex(companiesRange, companyRanges)
        return priceMatrix.companies[selectedPaymentPeriod][i]
    }

    const i = getRangeIndex(annualRevenue, revenueRanges)
    return plan === 'pro' ? priceMatrix.pro[selectedPaymentPeriod][i] : priceMatrix.standard[selectedPaymentPeriod][i]
}

function getRangeIndex(value: number, ranges: number[]) {
    for (let i = 0; i < ranges.length; i++) if (value < ranges[i]) return i
    return ranges.length
}
