"use client"

import { useEffect, useState } from "react"

let listeners = []
let toastId = 0

export function toast({ title, description, duration = 3000 }) {
  const id = toastId++
  listeners.forEach((listener) =>
    listener({ id, title, description, duration })
  )
}

export function useToast() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const listener = (toast) => {
      setToasts((prev) => [...prev, toast])

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, toast.duration)
    }

    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }, [])

  return { toasts }
}
