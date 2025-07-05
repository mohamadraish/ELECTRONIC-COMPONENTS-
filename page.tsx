"use client"

import { useState } from "react"
import { Search, ShoppingCart, Menu, X, Star, Plus } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  inStock: boolean
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Ceramic Capacitor Kit (100pcs)",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=200&width=200",
    category: "Capacitors",
    inStock: true,
    description: "Assorted ceramic capacitors 10pF to 100nF",
  },
  {
    id: 2,
    name: "Carbon Film Resistor Set",
    price: 8.99,
    rating: 4.7,
    reviews: 189,
    image: "/placeholder.svg?height=200&width=200",
    category: "Resistors",
    inStock: true,
    description: "1/4W resistors, 1Ω to 10MΩ, 600 pieces",
  },
  {
    id: 3,
    name: "18650 Li-ion Battery 3000mAh",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 456,
    image: "/placeholder.svg?height=200&width=200",
    category: "Batteries",
    inStock: true,
    description: "High capacity rechargeable battery",
  },
  {
    id: 4,
    name: "Arduino Uno R3 Compatible",
    price: 18.99,
    rating: 4.6,
    reviews: 678,
    image: "/placeholder.svg?height=200&width=200",
    category: "Arduino",
    inStock: true,
    description: "Microcontroller board with USB cable",
  },
  {
    id: 5,
    name: "Electrolytic Capacitor Pack",
    price: 16.99,
    rating: 4.5,
    reviews: 123,
    image: "/placeholder.svg?height=200&width=200",
    category: "Capacitors",
    inStock: true,
    description: "Polarized capacitors 1µF to 1000µF",
  },
  {
    id: 6,
    name: "Precision Resistor Kit",
    price: 22.99,
    originalPrice: 27.99,
    rating: 4.8,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=200",
    category: "Resistors",
    inStock: false,
    description: "1% tolerance metal film resistors",
  },
  {
    id: 7,
    name: "18650 Battery Charger",
    price: 19.99,
    rating: 4.7,
    reviews: 289,
    image: "/placeholder.svg?height=200&width=200",
    category: "Batteries",
    inStock: true,
    description: "Smart charger with LCD display",
  },
  {
    id: 8,
    name: "Arduino Sensor Kit",
    price: 34.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 445,
    image: "/placeholder.svg?height=200&width=200",
    category: "Arduino",
    inStock: true,
    description: "37 sensors and modules for Arduino",
  },
]

const categories = ["All", "Capacitors", "Resistors", "Batteries", "Arduino"]

export default function ElectronicsHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cartItems, setCartItems] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">ElectroShop</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Products
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Categories
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search components..."
                    className="pl-10 pr-4 py-2 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="mb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search components..."
                    className="pl-10 pr-4 py-2 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Products
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Categories
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Electronic Components Store</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Find all your electronic components in one place. From basic resistors to advanced Arduino modules.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full" onClick={addToCart} disabled={!product.inStock}>
                  <Plus className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ElectroShop</h3>
              <p className="text-gray-400">Your trusted source for electronic components and Arduino modules.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Capacitors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Resistors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Batteries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Arduino
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates and special offers.</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ElectroShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
