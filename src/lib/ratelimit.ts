// import { Ratelimit } from "@upstash/ratelimit";
// import { redis } from "@upstash/redis";

// export const ratelimit = new Ratelimit({
//     redis,
//     limiter: Ratelimit.slidingWindow(10,"10s")
// })
import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10s"),
});