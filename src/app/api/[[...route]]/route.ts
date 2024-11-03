import { httpHandler } from "@/server";

// Remove the edge runtime setting
// export const runtime = "edge";  // Comment this line out or remove it

export { httpHandler as GET, httpHandler as POST };
