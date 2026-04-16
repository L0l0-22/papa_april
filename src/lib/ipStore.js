// /lib/ipStore.js
import NodeCache from "node-cache";

// TTL = 24 hours (in seconds)
const ipCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

export function hasSeenIp(ip) {
  return ipCache.has(ip);
}

export function markIpSeen(ip) {
  ipCache.set(ip, true);
}
