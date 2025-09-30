import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/header/mode-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Menu() {
  return (
    <div className="flex justify-end gap-3">
      {/* Regular Menu */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      {/* Sheet Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle className="mx-2">Menu</SheetTitle>
            <div className="mx-2">
              <ModeToggle />
            </div>
            <Button asChild variant="ghost" className="mx-2">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild className="mx-2">
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
