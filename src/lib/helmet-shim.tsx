// Shim: react-helmet-async — no-ops in Next.js (metadata is handled by app router).
"use client";
import * as React from "react";

export const HelmetProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Helmet = (_props: any) => null;
export default { HelmetProvider, Helmet };
