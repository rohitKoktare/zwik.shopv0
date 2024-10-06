import Image from 'next/image'
import {Button, Card, Flex} from 'antd'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 to-purple-900">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Image
          src="/zwiklogo.jpeg"
          alt="ZWIK logo"
          className="h-10 w-10 rounded-full"
          width={40}
          height={40}
        />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#">
            Home
          </a>
          {/* <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#">
            Products
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="#">
            About
          </a> */}
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full  py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container ml-auto mr-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to ZWIK
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Discover our beautiful rangoli stencils and bottles for your festive decorations
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="ml-28 text-3xl font-bold tracking-tighter sm:text-5xl text-center text-purple-700 mb-8">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-28">
              <Card>
                  <Image
                    src="/zwiklogo.jpeg"
                    alt="Rangoli Stencil"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Floral Rangoli Stencil</h3>
                  <p className="text-gray-600 mb-4">Create beautiful floral patterns with ease</p>
                 
              </Card>
              <Card>
                  <Image
                    src="/Photoroom-20241004_151128.png"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Precision Rangoli Bottle</h3>
                  <p className="text-gray-600 mb-4">Perfect for precise rangoli powder application</p>
              </Card>
              <Card>
                  <Image
                    src="/Photoroom-20241004_160324.png"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Precision Rangoli Bottle</h3>
                  <p className="text-gray-600 mb-4">Perfect for precise rangoli powder application</p>
              </Card>
              <Card>
                  <Image
                    src="/Photoroom-20241004_160324.png"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Precision Rangoli Bottle</h3>
                  <p className="text-gray-600 mb-4">Perfect for precise rangoli powder application</p>
              </Card>
              <Card>
                  <Image
                    src="/Photoroom-20241004_160155.png"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Precision Rangoli Bottle</h3>
                  <p className="text-gray-600 mb-4">Perfect for precise rangoli powder application</p>
              </Card>
              <Card>
                <Flex vertical className="p-4">
                  <Image
                    src="/Photoroom-20241004_154107.png"
                    alt="Rangoli Kit"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-purple-700">Complete Rangoli Kit</h3>
                  <p className="text-gray-600 mb-4">Everything you need for stunning rangoli designs</p>
                </Flex>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-500 bg-purple-800">
        <p className="text-xs text-white">© 2024 ZWIK. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-white" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}