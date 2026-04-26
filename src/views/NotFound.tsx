"use client";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSEO from "@/components/PageSEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <PageSEO title="Page Not Found" description="The page you're looking for doesn't exist." path={location.pathname} noIndex />
      <div className="text-center max-w-md">
        <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary text-primary-foreground font-semibold px-6">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;