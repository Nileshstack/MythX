import rateLimit from "next-rate-limit";

export const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15min
  uniqueTokenPerInterval: 500,
});
