"use client"

import { useRouter } from "next/navigation"
import { authClient } from "~/server/better-auth/client"
import { Button } from "~/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog"
import { PlusCircle } from "lucide-react"

export function PostAdButton() {
  const router = useRouter()
  const { data: session } = authClient.useSession()

  const handleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/sell",
    })
  }

  if (session) {
    return (
      <Button onClick={() => router.push("/sell")} className="gap-2">
        <PlusCircle className="h-4 w-4" />
        Post Ad
      </Button>
    )
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          Post Ad
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hold up</AlertDialogTitle>
          <AlertDialogDescription>
            To protect myself from your mum you need to log in to post an ad.

            <br />
            Apart from firewall ya vercel na basic data protection ikiingia kwa server sina protection ingine. Msinihack tafadhali
            <br />
            Don't worry, it's quick and painless!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>I'll just browse</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogin}>Log In</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
