import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const signUpRouter = createTRPCRouter({
    signIn: protectedProcedure
        .input(z.object({ name: z.string().min(1), email: z.string().email().min(1), password: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            // simulate a slow db call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // return ctx.db.post.create({
            //     data: {
            //         name: input.name,
            //         // email: input.email,
            //         // password: input.password
            //     },
            // });
        }),
});
