
// 'use client';

// import { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { httpBatchLink, createTRPCClient } from '@trpc/client';
// import { createTRPCReact, TRPCClient } from '@trpc/react-query';
// import type { AppRouter } from './routers/_app';

// export const trpc = createTRPCReact<AppRouter>();

// function getBaseUrl() {
//   if (typeof window !== 'undefined') return '';
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
//   return 'http://localhost:3000';
// }

// export function TRPCReactProvider({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());
//   const [trpcClient] = useState(() =>
//     trpc.createClient({
//       links: [
//         httpBatchLink({
//           url: `${getBaseUrl()}/api/trpc`,
//         }),
//       ],
//     })
//   );

//   return (
//     <trpc.Provider client={trpcClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </trpc.Provider>
//   );
// }
'use client';
// ^-- to make sure we can mount the Provider from a server component
import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { useState } from 'react';
import { makeQueryClient } from './query-client';
import type { AppRouter } from './routers/_app';
import { createTRPCReact } from '@trpc/react-query';

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();
export const trpc = createTRPCReact<AppRouter>()
let browserQueryClient: QueryClient;
function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  }
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })();
  return `${base}/api/trpc`;
}
export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: getUrl(),
        }),
      ],
    }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}