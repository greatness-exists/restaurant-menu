"use client";

import { menuData } from "@/lib/menuData";
import { MenuSection } from "@/components/MenuSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Waves, UtensilsCrossed, Coffee, Wine, IceCream, Baby } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <Waves className="w-8 h-8 text-accent" />
            <UtensilsCrossed className="w-10 h-10 text-white" />
            <Waves className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            Ko-Sa Beach Resort
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light animate-fade-in-up animation-delay-200">
            Restaurant & Bar
          </p>
          <p className="text-lg text-accent/90 animate-fade-in-up animation-delay-300">
            Fresh • Coastal • Authentic
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 wave-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Operating Hours Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Operating Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Breakfast</span>
                <span className="font-semibold">6:30 AM - 11:00 AM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-muted-foreground">Lunch</span>
                <span className="font-semibold">11:30 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Dinner</span>
                <span className="font-semibold">5:00 PM - 10:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fresh Preparation Notice */}
        <div className="mb-8 p-6 bg-gradient-to-r from-accent/10 via-accent/5 to-primary/10 border-l-4 border-accent rounded-lg">
          <p className="text-center text-foreground/90">
            <span className="font-semibold">🌿 Fresh Daily Preparation</span> • All dishes are prepared fresh to order using locally sourced ingredients
          </p>
        </div>

        {/* Menu Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="breakfast" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex-wrap h-auto gap-2 p-2 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger value="breakfast" className="gap-2">
                  <Coffee className="w-4 h-4" />
                  <span className="hidden sm:inline">Breakfast</span>
                  <span className="sm:hidden">🌅</span>
                </TabsTrigger>
                <TabsTrigger value="starters" className="gap-2">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span className="hidden sm:inline">Starters</span>
                  <span className="sm:hidden">🍤</span>
                </TabsTrigger>
                <TabsTrigger value="mains" className="gap-2">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span className="hidden sm:inline">Main Dishes</span>
                  <span className="sm:hidden">🍽️</span>
                </TabsTrigger>
                <TabsTrigger value="children" className="gap-2">
                  <Baby className="w-4 h-4" />
                  <span className="hidden sm:inline">Children's</span>
                  <span className="sm:hidden">👶</span>
                </TabsTrigger>
                <TabsTrigger value="desserts" className="gap-2">
                  <IceCream className="w-4 h-4" />
                  <span className="hidden sm:inline">Desserts</span>
                  <span className="sm:hidden">🍰</span>
                </TabsTrigger>
                <TabsTrigger value="drinks" className="gap-2">
                  <Coffee className="w-4 h-4" />
                  <span className="hidden sm:inline">Beverages</span>
                  <span className="sm:hidden">☕</span>
                </TabsTrigger>
                <TabsTrigger value="wines" className="gap-2">
                  <Wine className="w-4 h-4" />
                  <span className="hidden sm:inline">Wines</span>
                  <span className="sm:hidden">🍷</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="breakfast" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Coffee className="w-8 h-8 text-primary" />
                    {menuData.breakfast.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Start your day with our delicious breakfast selections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.breakfast} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="starters" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <UtensilsCrossed className="w-8 h-8 text-primary" />
                    {menuData.starters.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Perfect beginnings to your culinary journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.starters} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mains" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <UtensilsCrossed className="w-8 h-8 text-primary" />
                    {menuData.mains.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Signature dishes featuring the finest ingredients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.mains} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="children" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Baby className="w-8 h-8 text-primary" />
                    {menuData.children.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Delicious and nutritious meals for our little guests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.children} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="desserts" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <IceCream className="w-8 h-8 text-primary" />
                    {menuData.desserts.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Sweet endings to complete your dining experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.desserts} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drinks" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Coffee className="w-8 h-8 text-primary" />
                    {menuData.drinks.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Refreshing drinks to complement your meal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.drinks} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wines" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Wine className="w-8 h-8 text-primary" />
                    {menuData.wines.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Carefully curated wines from around the world
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MenuSection category={menuData.wines} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-accent" />
            <p className="text-2xl font-bold text-foreground">Ko-Sa Beach Resort</p>
            <Waves className="w-6 h-6 text-accent" />
          </div>
          <p className="text-muted-foreground mb-4">
            Where the ocean meets exceptional dining
          </p>
          
          {/* Location in Footer */}
          <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
            <MapPin className="w-5 h-5 text-accent" />
            <p>Beachfront dining with stunning ocean views • Located at the heart of Ko-Sa Beach Resort</p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            All prices in Ghana Cedis (₵) • Prices subject to 10% service charge & 7% VAT
          </p>
        </footer>
      </div>
    </div>
  );
}