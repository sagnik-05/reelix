"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNotification } from "../components/Notification";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showNotification("Passwords do not match", "error");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      showNotification("Registration successful! Please log in.", "success");
      router.push("/login");
    } catch (error) {
      showNotification(
        error instanceof Error ? error.message : "Registration failed",
        "error"
      );
    }
  };

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
  <div className="relative mt-12 w-full max-w-lg sm:mt-10">
    <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold leading-6 tracking-tighter">
          Register
        </h3>
        <p className="mt-1.5 text-sm font-medium text-white/50">
          Create your account to get started.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
              <div className="flex justify-between">
                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                  Email
                </label>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
              <div className="flex justify-between">
                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
              <div className="flex justify-between">
                <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-x-2">
            <Link
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
              href="/login"
            >
              Login
            </Link>
            <button
              type="submit"
              className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
}