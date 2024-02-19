"use client";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../components/ui/button";

export default function MarketPlace() {
    const { data: session, status } = useSession()
    if (!session || !session.user) {
        redirect("/");
    }

    return (
        <>
            <div>
                This is a protected route for: {session?.user?.name}
            </div>
            <Button onClick={() => signOut()}>
                Sign Out
            </Button>
        </>
    )
}