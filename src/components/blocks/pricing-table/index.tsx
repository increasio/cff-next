import { essentialsTable, featuresTable, supportTable } from '@/data/pricing'

import { PricingRow } from './pricing-row'

export default function PricingTable() {
    return (
        <section className="mx-auto max-w-[880px] px-5 py-12">
            <table className="customTable w-full divide-y">
                <thead>
                    <tr className="font-semibold">
                        <td>Essentials</td>
                        <td className="text-center">Standard</td>
                        <td className="text-center">Pro</td>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {essentialsTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                    <tr className="font-semibold">
                        <td className="pt-10!">Features</td>
                    </tr>
                    {featuresTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                    <tr className="font-semibold">
                        <td className="pt-10!">Support</td>
                    </tr>
                    {supportTable.map((item, index) => (
                        <PricingRow item={item} key={index} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}
