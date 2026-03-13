"use client"

import { Dailog } from "../dailog/page"

export default function ShowcasePage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-12">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                    Component <span className="text-indigo-500">Showcase</span>
                </h1>
                <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
                    This page demonstrates importing and reusing the Dailog component from another route.
                </p>
            </header>

            <main className="grid place-items-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex flex-col items-center bg-neutral-900 border border-neutral-800 p-12 rounded-2xl shadow-2xl">
                        <h2 className="text-2xl font-semibold mb-6">Imported Dailog</h2>
                        <Dailog />
                        <p className="mt-8 text-neutral-500 text-sm">
                            Click the button above to trigger the imported Dailog component.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
