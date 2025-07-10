// (home) là 1 phần của bộ định tuyến nhưng k phải là 1 phần ủa url


import { getQueryClient, trpc } from '@/trpc/server';
import { PageClient } from './client';
import { HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({ text: "Anio" }),
  );

  return (
    <HydrationBoundary>
      <Suspense fallback={<p>loading....</p>}>
        <ErrorBoundary fallback={<p>Error....</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
}
