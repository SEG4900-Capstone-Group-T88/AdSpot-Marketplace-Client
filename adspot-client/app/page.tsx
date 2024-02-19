"use client";
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/app/components/ui/dropdown-menu"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import mainLogo from "../public/adSpotLogo.png"
import { signIn, useSession, signOut } from "next-auth/react"
import { redirect } from "next/navigation";

export default function Main() {
  const { data: session } = useSession();

  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 border-b shrink-0 md:h-16 md:px-6">
        <nav className="hidden md:flex items-center gap-4 shrink-0">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <PackageIcon className="w-5 h-5" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <form className="flex items-center gap-2">
            <Label className="sr-only" htmlFor="search">
              Search
            </Label>
            <Input
              id="search"
              placeholder="Search for advertising space..."
              type="search"
            />
            <Button className="rounded-full" size="icon" variant="ghost">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
            </Button>
          </form>
        </nav>
        <div className="flex md:hidden flex-1 justify-between items-center shrink-0">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <PackageIcon className="w-5 h-5" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Button size="icon" variant="outline">
            <MenuIcon className="w-4 h-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
        <div className="ml-auto" >
          {!session && <Button variant="outline" onClick={() => signIn()}>Login</Button>}
          {session && 
            <div className="ml-auto flex items-center gap-2 lg:gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                    size="icon"
                    variant="ghost"
                  >
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Hi {session?.user?.name}!</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          }
        </div>
      </header>
      <main className="flex-1">
        <section className="container px-4 md:px-6 py-6 md:py-12">
          <div className="grid md:grid-cols-2 md:gap-6 lg:gap-8">
          <div className="flex justify-start md:col-start-2 md:row-start-1">
              <img
                alt="Image"
                className="rounded-lg object-cover aspect-2/1"
                height={200}
                src="/placeholder.svg"
                width={400}
              />
            </div>
            <div className="flex flex-col justify-center gap-2 md:col-start-1 md:row-start-1">
              <h1 className="text-3xl font-bold tracking-tight">Welcome to the AdSpot Marketplace!</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Find advertising space in the places that matter the most to you
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-6 py-6 md:py-12">
          <div className="container grid gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="grid gap-1">
                  <h1 className="text-2xl font-semibold tracking-tight">Instagram Advertising</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hot Picks from the Summer Collection: Embrace the Season in Style!
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Beach Bliss Flip-Flops</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Comfortable Footwear</small>
                  <h4 className="font-semibold">$19.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Sunset Shades Sunglasses</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">UV Protection Eyewear</small>
                  <h4 className="font-semibold">$29.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Cool Breeze Portable Fan</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">On-the-Go Cooling</small>
                  <h4 className="font-semibold">$14.99</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-6 py-6 md:py-12">
          <div className="container grid gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="grid gap-1">
                  <h1 className="text-2xl font-semibold tracking-tight">Twitter Advertising</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hot Picks from the Summer Collection: Embrace the Season in Style!
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Beach Bliss Flip-Flops</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Comfortable Footwear</small>
                  <h4 className="font-semibold">$19.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Sunset Shades Sunglasses</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">UV Protection Eyewear</small>
                  <h4 className="font-semibold">$29.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Cool Breeze Portable Fan</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">On-the-Go Cooling</small>
                  <h4 className="font-semibold">$14.99</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 md:px-6 py-6 md:py-12">
          <div className="container grid gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="grid gap-1">
                  <h1 className="text-2xl font-semibold tracking-tight">Facebook Advertising</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Hot Picks from the Summer Collection: Embrace the Season in Style!
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="shrink-0" variant="outline">
                    <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Newest">Newest</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Beach Bliss Flip-Flops</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Comfortable Footwear</small>
                  <h4 className="font-semibold">$19.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Sunset Shades Sunglasses</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">UV Protection Eyewear</small>
                  <h4 className="font-semibold">$29.99</h4>
                </div>
              </div>
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <img
                  alt="Cover image"
                  className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
                <div className="flex-1 py-4">
                  <h3 className="font-semibold tracking-tight">Cool Breeze Portable Fan</h3>
                  <small className="text-sm leading-none text-gray-500 dark:text-gray-400">On-the-Go Cooling</small>
                  <h4 className="font-semibold">$14.99</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ArrowUpDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}
