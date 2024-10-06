import React from 'react'
import { Flex, Space, Button, Card, Image} from "antd"
// import Image from 'next/image'
import Header from '../_component/header'


const Homepage = () => {
  return (
    <Flex  vertical>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#A94064] to-[#A94064]">
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
          <a className="text-sm font-medium hover:underline underline-offset-4 text-white" href="/contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center align-middle">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-[#A94064] mb-8">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                  <Image
                    src="/primary.jpeg"
                    alt="Rangoli Stencil"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Floral Rangoli Stencil</h3>
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
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Home Deccor Rangoli</h3>
                  <p className="text-gray-600 mb-4">Makes you home ready for Festivals</p>
              </Card>
              <Card>
                  <Image
                    src="/multiple.jpeg"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Variety of Options to Choose</h3>
                  <p className="text-gray-600 mb-4">Select from large range of variety</p>
              </Card>
              <Card>
                  <Image
                    src="/zoomvala.jpeg"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Next Gen Rangoli</h3>
                  <p className="text-gray-600 mb-4">Make a Beautiful Next Gen Rangoli</p>
              </Card>
              <Card>
                  <Image
                    src="/diwalidecor.jpeg"
                    alt="Rangoli Bottle"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Diwali Decoration</h3>
                  <p className="text-gray-600 mb-4">Make your Diwali Memorable</p>
              </Card>
              <Card>
                <Flex vertical className="p-4">
                  <Image
                    src="/rangolikit.jpeg"
                    alt="Rangoli Kit"
                    className="w-full h-60 object-cover rounded-md mb-4"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-xl font-bold mb-2 text-[#A94064]">Complete Rangoli Kit</h3>
                  <p className="text-gray-600 mb-4">Everything you need for stunning rangoli designs</p>
                </Flex>
              </Card>
            </div>
          </div>
        </section>
        {/* <Flex style={{height: '500px' , width: '100vw'}}>
            <h1>We are available on..</h1>
            <Flex>
                <a href=""></a>
                
            </Flex>

        </Flex> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-purple-500 bg-[#A94064]">
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
    </Flex>
  )
}

export default Homepage