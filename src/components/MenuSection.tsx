"use client";

import { MenuCategory, MenuItem as MenuItemType } from "@/lib/menuData";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {category.items.map((item: MenuItemType, index: number) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>

      {category.note && (
        <div className="mt-6 p-4 bg-accent/20 border border-accent/30 rounded-lg">
          <p className="text-sm text-muted-foreground italic text-center">
            {category.note}
          </p>
        </div>
      )}
    </div>
  );
}
