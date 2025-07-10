//Zod library để validation và type checking
import { z } from 'zod';
import { createTRPCRouter, protectedProceduce } from '../init';
//Commented out - dùng để throw custom errors trong tRPC import { TRPCError } from '@trpc/server';

//appRouter: Đây là router chính của ứng dụng, chứa tất cả các API endpoints
export const appRouter = createTRPCRouter({
  // hello: baseProcedure
  hello: protectedProceduce
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      // throw new TRPCError({ code: "BAD_REQUEST"})
      // database and load the video
      console.log({ dbUser: opts.ctx.user})
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;