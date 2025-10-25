import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Clock, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100 font-playfair">
      {/* Backend Test Banner */}
      <div className="bg-red-600 text-white p-4 text-center font-bold text-lg">
        🔴 BACKEND TESTING IN PROGRESS - SANDBOX UPDATE TEST (Updated: 2025-10-25 20:40 UTC) - ROUND 2
      </div>

      {/* Header */}
      <header className="bg-stone-900 text-amber-50 p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-600">🔴 BACKEND TEST - ROYAL BARBERSHOP</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-amber-100">Royal Grooming Experience</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
            Experience the finest traditional British barbering in a warm, welcoming atmosphere where every detail matters.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 text-stone-800">Our Tradition</h3>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              For generations, we've been perfecting the art of barbering. Our shop combines time-honored techniques
              with the finest grooming products to provide an unparalleled experience. Every haircut, shave, and style
              is crafted with precision and care in our classic British-inspired salon.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-10 h-10 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-800 mb-2">Expert Craftsmanship</h4>
                <p className="text-stone-600">Master barbers with decades of experience</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-800 mb-2">Traditional Service</h4>
                <p className="text-stone-600">Timeless techniques passed down through generations</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-10 h-10 text-amber-800" />
                </div>
                <h4 className="text-xl font-semibold text-stone-800 mb-2">Historic Location</h4>
                <p className="text-stone-600">Established in the heart of the city</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6 text-stone-800">Our Services</h3>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              From classic cuts to modern styling, we offer a full range of gentlemen's grooming services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Gentlemen's Haircut</CardTitle>
                <CardDescription>Precise cutting and styling with traditional techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£35 starting price</p>
                  <p className="text-sm text-stone-600">50-60 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Traditional Shave</CardTitle>
                <CardDescription>Hot towel and straight razor shaving experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£25</p>
                  <p className="text-sm text-stone-600">30 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Beard Trim & Shaping</CardTitle>
                <CardDescription>Professional beard grooming and styling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£20</p>
                  <p className="text-sm text-stone-600">20 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Cut & Shave Combo</CardTitle>
                <CardDescription>Complete grooming experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£55</p>
                  <p className="text-sm text-stone-600">80-90 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Facial Treatments</CardTitle>
                <CardDescription>Exfoliating facials and moisturizing treatments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£30</p>
                  <p className="text-sm text-stone-600">25 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-stone-800">Styling & Products</CardTitle>
                <CardDescription>Professional styling with premium products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">£15</p>
                  <p className="text-sm text-stone-600">15 minutes</p>
                </div>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Book Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6">Visit Us</h3>
              <p className="text-xl text-amber-100">
                Experience the finest in traditional British barbering
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-amber-200">Location & Hours</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">123 Old Street</p>
                      <p className="text-stone-300">London EC1V 9AB</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">020 1234 5678</p>
                      <p className="text-stone-300">Mon-Sat: 9AM-7PM</p>
                      <p className="text-stone-300">Sunday: 10AM-5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-stone-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-amber-200">Book Your Appointment</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Call to Book</Button>
                  <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-800">
                    Walk-in Welcome
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-amber-50 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-stone-400 mb-4">
              &copy; 2024 Classic British Barbershop. All rights reserved.
            </p>
            <p className="text-sm text-stone-500">
              Crafting gentleman's grooming since 1890 | Testing backend updates ✓
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
