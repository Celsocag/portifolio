"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Star, Search, Filter } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  description: string
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description: "Advanced fitness tracking and smart notifications",
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.3,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    description: "Durable laptop backpack with multiple compartments",
    inStock: true,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.6,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description: "Portable speaker with excellent sound quality",
    inStock: false,
  },
  {
    id: 5,
    name: "Desk Organizer",
    price: 24.99,
    rating: 4.2,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    category: "Office",
    description: "Bamboo desk organizer for a clean workspace",
    inStock: true,
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 94,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    description: "7-in-1 USB-C hub with multiple ports",
    inStock: true,
  },
]

const categories = ["All", "Electronics", "Accessories", "Office"]

export default function Webstore() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Store</h1>
            <p className="text-lg text-gray-600">Discover amazing products at great prices</p>
          </div>

          {/* Search and Cart */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Button variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({getCartItemCount()})
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Categories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.originalPrice && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
                {!product.inStock && (
                  <Badge variant="secondary" className="absolute top-2 right-2">
                    Out of Stock
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <Button className="w-full" onClick={() => addToCart(product.id)} disabled={!product.inStock}>
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
