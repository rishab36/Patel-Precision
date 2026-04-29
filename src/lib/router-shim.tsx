// Shim: react-router-dom -> next/link + next/navigation
// Provides Link, NavLink, useNavigate, useLocation, useParams, Navigate, Outlet
"use client";
import * as React from "react";
import NextLink from "next/link";
import { usePathname, useRouter, useParams as useNextParams, useSearchParams } from "next/navigation";

type AnyProps = Record<string, any>;

export const Link = React.forwardRef<HTMLAnchorElement, AnyProps>(function Link(
  { to, href, replace, state, ...rest }, ref
) {
  const target = to ?? href ?? "#";
  return <NextLink ref={ref as any} href={target} replace={!!replace} {...rest} />;
});

export const NavLink = React.forwardRef<HTMLAnchorElement, AnyProps>(function NavLink(
  { to, href, className, style, children, end, ...rest }, ref
) {
  const target = to ?? href ?? "#";
  const pathname = usePathname() || "/";
  const isActive = end ? pathname === target : pathname === target || pathname.startsWith(target + "/");
  const cls = typeof className === "function" ? className({ isActive, isPending: false }) : className;
  const sty = typeof style === "function" ? style({ isActive, isPending: false }) : style;
  const rendered = typeof children === "function" ? children({ isActive, isPending: false }) : children;
  return (
    <NextLink ref={ref as any} href={target} className={cls} style={sty} {...rest}>
      {rendered}
    </NextLink>
  );
});

export function useNavigate() {
  const router = useRouter();
  return React.useCallback((to: string | number, opts?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to < 0) window.history.back();
      else window.history.forward();
      return;
    }
    if (opts?.replace) router.replace(to);
    else router.push(to);
  }, [router]);
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const sp = useSearchParams();
  const search = sp && sp.toString() ? `?${sp.toString()}` : "";
  return { pathname, search, hash: "", state: null, key: "default" };
}

export function useParams<T = any>(): T {
  return (useNextParams() as unknown as T) ?? ({} as T);
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) router.replace(to); else router.push(to);
  }, [to, replace, router]);
  return null;
}

export function Outlet() { return null; }
export const BrowserRouter = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Routes = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Route = (_: any) => null;
