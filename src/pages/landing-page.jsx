import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="container mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Trusted Used Car Marketplace
          </div>

          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Next
            <span className="block text-primary">Perfect Used Car</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Explore verified pre-owned vehicles from top brands. Compare
            specifications, filter by your preferences, and discover the best
            deals all in one place.
          </p>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/cars">
                Browse Cars
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 rounded-2xl border bg-card p-6">
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Cars Listed</div>
            </div>

            <div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>

            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
