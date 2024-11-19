"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function PasswordProtection() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can change this password to whatever you want
    const correctPassword = "scadprox2024"; // Store this securely in environment variables in production

    if (password === correctPassword) {
      // Set a cookie that expires in 24 hours
      Cookies.set("scadProAuth", "true", { expires: 1, secure: true });
      router.push("/projects/scad-pro-universal/content");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 custom-bg">
      <div className="w-full max-w-md">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-muted/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock size={24} className="text-accent" />
            <h1 className="text-2xl font-bold text-foreground">
              Password Protected
            </h1>
          </div>
          
          <p className="text-muted mb-6">
            This project requires a password to view. Please enter the password below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-muted/20 text-foreground 
                         focus:ring-2 focus:ring-accent focus:border-transparent outline-none
                         transition-all duration-300"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg
                       hover:bg-accent/20 transition-all duration-300 font-medium"
            >
              Access Project
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
