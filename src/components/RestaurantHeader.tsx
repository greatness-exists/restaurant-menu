"use client";

import { Utensils } from "lucide-react";

export const RestaurantHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Utensils className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Orchid Restaurant</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#appetizers" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Appetizers
          </a>
          <a href="#mains" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Mains
          </a>
          <a href="#pasta" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pasta
          </a>
          <a href="#desserts" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Desserts
          </a>
          <a href="#beverages" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Beverages
          </a>
        </nav>
      </div>
    </header>
  );
};
