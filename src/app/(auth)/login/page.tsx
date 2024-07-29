import React from "react";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <main className="mt-12">
      <div className="mx-auto w-1/3 rounded-2xl border bg-gray-200 p-4 shadow-sm dark:bg-card">
        <h1 className="mb-5 text-2xl font-semibold">😍 Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
