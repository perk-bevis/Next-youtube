// "use client"
// import { trpc } from '@/trpc/client'
// // (home) là 1 phần của bộ định tuyến nhưng k phải là 1 phần ủa url

// import '../globals.css'
// export default function Home() {
//   const { data } = trpc.hello.useQuery({text : "antonio"})
//   return (
//     <div className="">
//      client component says: { data?.greeting }
//     </div>
//   )
// }

// (home) là 1 phần của bộ định tuyến nhưng k phải là 1 phần ủa url


import { getQueryClient, trpc } from '@/trpc/server';
import { PageClient } from './client';

export default async function Home() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({ text: "Anio"}),
  );

  return (
    <div>
      <PageClient/>
    </div>
  );
}
