import React from "react";

const page = () => {
  return (
    <div className="mt-10">
      <div
        class="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        bis_skin_checked="1"
      >
        <div
          class="rounded-xl border bg-card text-card-foreground shadow"
          bis_skin_checked="1"
        >
          <div
            class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
            bis_skin_checked="1"
          >
            <h3 class="tracking-tight text-sm font-medium">Total Revenue</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="p-6 pt-0" bis_skin_checked="1">
            <div class="text-2xl font-bold" bis_skin_checked="1">
              $45,231.89
            </div>
            <p class="text-xs text-muted-foreground">+20.1% from last month</p>
          </div>
        </div>
        <div
          class="rounded-xl border bg-card text-card-foreground shadow"
          bis_skin_checked="1"
        >
          <div
            class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
            bis_skin_checked="1"
          >
            <h3 class="tracking-tight text-sm font-medium">Subscriptions</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="p-6 pt-0" bis_skin_checked="1">
            <div class="text-2xl font-bold" bis_skin_checked="1">
              +2350
            </div>
            <p class="text-xs text-muted-foreground">+180.1% from last month</p>
          </div>
        </div>
        <div
          class="rounded-xl border bg-card text-card-foreground shadow"
          bis_skin_checked="1"
        >
          <div
            class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
            bis_skin_checked="1"
          >
            <h3 class="tracking-tight text-sm font-medium">Sales</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <path d="M2 10h20"></path>
            </svg>
          </div>
          <div class="p-6 pt-0" bis_skin_checked="1">
            <div class="text-2xl font-bold" bis_skin_checked="1">
              +12,234
            </div>
            <p class="text-xs text-muted-foreground">+19% from last month</p>
          </div>
        </div>
        <div
          class="rounded-xl border bg-card text-card-foreground shadow"
          bis_skin_checked="1"
        >
          <div
            class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
            bis_skin_checked="1"
          >
            <h3 class="tracking-tight text-sm font-medium">Active Now</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="p-6 pt-0" bis_skin_checked="1">
            <div class="text-2xl font-bold" bis_skin_checked="1">
              +573
            </div>
            <p class="text-xs text-muted-foreground">+201 since last hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
