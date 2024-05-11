import CardWrapper, { Card } from '@/app/(logged-in)/ui/dashboard/cards';
import RevenueChart from '@/app/(logged-in)/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/(logged-in)/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/(logged-in)/ui/skeletons';
 
export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
                <RevenueChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton />} >
                <LatestInvoices />
            </Suspense>
            </div>
        </main>
    );
}