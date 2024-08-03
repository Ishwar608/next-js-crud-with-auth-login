import React from "react";
import SignUpForm from "./SignUpForm";

export default function page() {
  return (
    <main className="mt-12">
      <div className="mx-auto w-1/2 rounded-2xl border bg-gray-200 p-4 shadow-sm dark:bg-card">
        <h1 className="mb-5 text-2xl font-semibold">😍 Sign Up</h1>
        <SignUpForm />
      </div>
    </main>
  );
}
