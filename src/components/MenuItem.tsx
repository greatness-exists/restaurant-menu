"use client";

import { MenuItem as MenuItemType } from "@/lib/menuData";
import { Flame, Leaf, Star } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-4 sm:p-6 transition-all hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h3 className="text-lg font-semibold text-card-foreground">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 flex-wrap">
              {item.isPopular && (
                <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                  <Star className="h-3 w-3 fill-current" />
                  Popular
                </div>
              )}
              {item.isVegetarian && (
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                  <Leaf className="h-3 w-3" />
                </div>
              )}
              {item.isSpicy && (
                <div className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                  <Flame className="h-3 w-3" />
                </div>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
        <div className="flex-shrink-0 self-start sm:self-auto">
          <p className="text-xl font-bold text-primary">₵{item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};