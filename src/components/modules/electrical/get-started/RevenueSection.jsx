import React from "react";
import SharedTitleSection from "../../../../shared/SharedTitleSection";

export default function RevenueSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
      {/* Top row */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: video / poster */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-base-200 shadow-xl">
          {/* Poster (replace src with your own image/video poster if you like) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <span className="text-3xl font-black tracking-wide text-primary">
              MAXIMIZE
            </span>
            <span className="ml-3 text-3xl font-semibold text-base-100/90">
              your Revenue
            </span>
          </div>

          {/* Play button overlay (decorative here) */}
          <button
            className="btn btn-primary btn-circle absolute inset-0 m-auto"
            aria-label="Play video"
            type="button"
          >
            ▷
          </button>
        </div>

        {/* Right: copy */}
        <div className="space-y-5">
          <SharedTitleSection
            category=""
            title="Book More of the Jobs You Want"
            highlightText="Jobs You Want"
          />

          <p className="max-w-xl text-base-content/70">
            Home services businesses that partner with Scorpion keep their crews
            busy and their job boards full.
          </p>
          <p className="max-w-xl text-base-content/70">
            Your marketing should drive your business revenue. With Scorpion’s
            RevenueMAX, it will.
          </p>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="mt-20">
        <h3 className="text-center text-2xl md:text-3xl font-extrabold">
          We Exist to Help Your Business Grow
        </h3>
        <p className="mt-2 text-center text-base-content/70">
          Scorpion customers using RevenueMAX have experienced:
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="card rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-md">
            <div className="card-body items-center text-center">
              <div className="text-5xl font-extrabold">38%</div>
              <div className="mt-1 text-sm opacity-70">revenue increase</div>
              <div className="text-xs opacity-60">
                (Bugtime Termite &amp; Pest Control)
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-md">
            <div className="card-body items-center text-center">
              <div className="text-5xl font-extrabold">17x</div>
              <div className="mt-1 text-sm opacity-70">
                return on investment
              </div>
              <div className="text-xs opacity-60">
                (Dyess Air &amp; Plumbing)
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-md">
            <div className="card-body items-center text-center">
              <div className="text-5xl font-extrabold">25%</div>
              <div className="mt-1 text-sm opacity-70">increase YoY Leads</div>
              <div className="text-xs opacity-60">
                (Modern Exterminating Company)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
