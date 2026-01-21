"use client"

import { useToast } from "./use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-6 right-6 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="w-72 rounded-xl bg-background border shadow-lg p-4 animate-in slide-in-from-right bg-[#95c3f4]"
        >
          {toast.title && (
            <p className="font-semibold text-foreground">
              {toast.title}
            </p>
          )}
          {toast.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {toast.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
