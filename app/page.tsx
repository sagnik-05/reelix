"use client"
import Link from "next/link"
import { Play, Smartphone, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold text-white">Reelix</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              About
            </Link>
          </div>
          <Link
            href="/register"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Create, Share, Go Viral
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">The ultimate platform for short-form video content</p>
            <Link
              href="#"
              className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-colors inline-block"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Reelix?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Smartphone className="h-12 w-12 text-purple-500" />}
                title="Mobile-First"
                description="Optimized for the best mobile experience, create and share content on the go."
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-purple-500" />}
                title="Lightning Fast"
                description="Enjoy seamless playback and quick uploads with our optimized infrastructure."
              />
              <FeatureCard
                icon={<Users className="h-12 w-12 text-purple-500" />}
                title="Growing Community"
                description="Join millions of creators and viewers in a vibrant, supportive community."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Reel Journey?</h2>
            <p className="text-xl mb-8 text-gray-300">Download the app now and start creating amazing content!</p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.06-.48-3.2 0-1.42.63-2.4.44-3.3-.35-5.67-5.75-4.53-14.14 2.04-14.28 1.54.06 2.6.8 3.44.94.83.14 2.37-.73 4-.96 1.89-.27 3.73.54 4.87 1.98-4.27 2.74-3.58 8.24.85 9.7-.83 1.71-1.92 3.4-3.62 4.92zm-4.05-17.77c-.2-2.34 1.91-4.31 4.34-4.51.26 2.54-2.21 4.51-4.34 4.51z" />
                </svg>
                App Store
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.184l2.71-2.712 4.82 2.714c.504.282.82.808.82 1.374s-.316 1.092-.82 1.374l-4.82 2.714-2.71-2.712 2.71-2.752-2.71-2.712zm-3.818-2.18L8.185 7.314l2.497-2.499 2.496 2.499-2.497 2.504zm-3.815 2.18l-2.712 2.712-4.82-2.714C-.17 11.695-.5 11.169-.5 10.603s.316-1.092.82-1.374l4.82-2.714 2.712 2.712-2.71 2.752 2.71 2.712z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400 transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Reelix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

