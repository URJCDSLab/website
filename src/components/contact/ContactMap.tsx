"use client";

import * as React from "react";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 sm:h-96 bg-slate-100 dark:bg-slate-800 animate-pulse flex items-center justify-center text-slate-400 text-sm">
      Loading campus map...
    </div>
  ),
});

export function ContactMap() {
  return <LeafletMap center={[40.336001, -3.877938]} zoom={15} />;
}
