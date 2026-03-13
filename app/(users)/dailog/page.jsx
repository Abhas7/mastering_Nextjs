"use client"

import {
  Dialog as BaseDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const Dailog = () => {
    return (
        <BaseDialog>
            <DialogTrigger className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-200">
                <button className="text-red-300">Open Dialog</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </BaseDialog>
    )
}

export default function DailogPage() {
    return (
        <div className="p-8 flex flex-col items-center gap-6">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Dialog Component Page
            </h1>
            <p className="text-gray-400 text-lg">Below is the reusable Dailog component.</p>
            <div className="p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <Dailog />
            </div>
        </div>
    )
}


