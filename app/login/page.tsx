import Link from 'next/link';
import { GoogleIcon } from '../components/SVG';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBEFE0]">
      {/* Top-right link */}
      <header className="flex justify-between p-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <p className="text-sm text-[#484848]">
          Don’t have an account?{' '}
          <Link href="/" className="text-[#484848] underline">
            Create New Account
          </Link>
        </p>
      </header>

      {/* Main form section */}
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-sm bg-white rounded-md shadow p-8 text-center">
          <h1 className="text-2xl text-[#18191A] font-bold mb-2">Sign In</h1>
          <p className="text-[#484848] mb-6 text-sm">
            Enter your email address and password to securely log in to Aorthar Student Portal
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
              <Link href='/dashboard'>
                Login
              </Link>
            </button>
          </form>

          <div className="mt-6">
            <div className="relative flex justify-center text-sm mb-4">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 text-[#08694A] transition-colors font-bold"
            >
              <GoogleIcon />
              Sign in with Google
            </button>
          </div>

          <p className='text-[#484848] font-bold text-sm mt-4'>
            Forgot your password?
            <a href="#" className='text-[#08694A]'>Reset</a>
          </p>
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
