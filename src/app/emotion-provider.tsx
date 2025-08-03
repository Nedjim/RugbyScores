"use client";

import { CacheProvider } from "@emotion/react";
import { PropsWithChildren, useState } from "react";
import createEmotionCache from "@/utils/createEmotionCache";

/* 
MUI uses Emotion for styling. For correct SSR in Next.js (App Router or Pages Router),
you need to provide a shared Emotion cache between the server and the client.
This is done using an EmotionCacheProvider along with createEmotionCache().
Without it, MUI styles may render differently on the server and client, leading to hydration mismatch errors.
*/
export default function EmotionProvider({ children }: PropsWithChildren) {
  const [cache] = useState(() => createEmotionCache());

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
