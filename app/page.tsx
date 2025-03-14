import Link from 'next/link';
import React from 'react'

export default function CreateAccount() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBEFE0]">
      {/* Top-right link */}
      <header className="flex justify-between p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <p className="text-sm text-[#484848]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#484848] underline">
            Sign In
          </Link>
        </p>
      </header>

      {/* Main form section */}
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-md shadow p-8 text-center">
          <h1 className="text-2xl text-[#18191A] font-bold mb-2">Create an account</h1>
          <p className="text-[#484848] mb-6 text-sm">
            Enter your email address and password to securely log in to Arthur Student Portal
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@address.com"
                className="mt-1 text-black block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 text-black block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-center"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 text-white p-2 font-semibold hover:bg-green-700 transition-colors"
            >
              Create account
            </button>
          </form>

          {/* Divider + Google Sign Up */}
          <div className="mt-6">
            <div className="relative flex justify-center text-sm mb-4">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 text-[#08694A] transition-colors font-bold"
            >
              {/* Google Icon (optional) */}
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.94 0 7.48 1.63 10.04 4.27l6.64-6.64C36.14 3.07 30.5 0 24 0 14.87 0 7.07 5.48 3.22 13.44l7.78 6.03C12.53 13.44 17.76 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.64 24.5c0-1.47-.12-2.9-.34-4.28H24v8.1h12.7c-.55 3-2.18 5.54-4.65 7.24l7.19 5.57C43.82 36.63 46.64 31 46.64 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M10 27.47a14.45 14.45 0 0 1 0-9.02l-7.78-6.03A24 24 0 0 0 0 24.5c0 3.9.9 7.58 2.49 10.88l7.51-5.91z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.92-2.13 15.89-5.78l-7.19-5.57c-2.03 1.37-4.61 2.17-8.7 2.17-6.24 0-11.55-4.21-13.46-9.95l-7.51 5.91C7.07 42.52 14.87 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between p-4 text-sm text-gray-500">
        <p>© 2025 Motivo Moodboards</p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
