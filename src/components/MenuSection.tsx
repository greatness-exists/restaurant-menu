"use client";

import { MenuCategory } from "@/lib/menuData";
import { MenuItem } from "./MenuItem";

interface MenuSectionProps {
  category: MenuCategory;
}

export const MenuSection = ({ category }: MenuSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-1">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};