"use client";

import { Button } from "@/components/ui/button";

export default function AppBar() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-3 border-b border-gray-200 shadow-sm">
      <h1 className="text-xl font-bold tracking-wide">Jolt</h1>
      <Button variant="default" className="rounded-lg">
        Login
      </Button>
    </header>
  );
}
