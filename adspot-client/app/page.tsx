"use client";
import { Label } from "./components/ui/label"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import mainLogo from "../public/adSpotLogo.png"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    redirect("/marketPlace");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 items-center justify-center min-h-[600px] px-4 py-6 space-y-4 text-center xl:min-h-[800px] bg-white dark:bg-orange-800">
      <div className="space-y-3">
        <div className="space-y-2">
          <Image
            alt="Logo"
            className="mx-auto"
            height="150"
            src={mainLogo}
            width="150"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-orange-900 dark:text-orange-400">Welcome to the Marketplace</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your credentials below to login to your account</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-orange-900 dark:text-orange-400" htmlFor="email">
              Email
            </Label>
            <Input className="bg-white dark:bg-gray-950" id="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label className="text-orange-900 dark:text-orange-400" htmlFor="password">
              Password
            </Label>
            <Input className="bg-white dark:bg-gray-950" id="password" required type="password" />
          </div>
          <Button className="w-full bg-orange-900 text-gray-50 dark:text-gray-900" type="submit">
            Login
          </Button>
        </div>
      </div>
      <div className="space-y-3">
      <Button className="w-full bg-orange-900 text-gray-50 dark:text-gray-900" onClick={() => signIn()}>
          <div className="flex items-center justify-center space-x-2">
            <InstagramIcon className="w-4 h-4" />
            Login with GitHub
          </div>
        </Button>
        <Button className="w-full bg-orange-900 text-gray-50 dark:text-gray-900">
          <div className="flex items-center justify-center space-x-2">
            <InstagramIcon className="w-4 h-4" />
            Login with Instagram
          </div>
        </Button>
        <Button className="w-full bg-orange-900 text-gray-50 dark:text-gray-900">
          <div className="flex items-center justify-center space-x-2">
            <FacebookIcon className="w-4 h-4" />
            Login with Facebook
          </div>
        </Button>
        <Button className="w-full bg-orange-900 text-gray-50 dark:text-gray-900">
          <div className="flex items-center justify-center space-x-2">
            <TwitterIcon className="w-4 h-4" />
            Login with Twitter
          </div>
        </Button>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          Don't have an account yet?
          <Link className="underline" href="/signUp">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  )
}


function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
