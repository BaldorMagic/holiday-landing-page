import { Gift, Star, Clock, Phone, MapPin, Mail, Facebook, Instagram, Twitter, TreePine, PartyPopper, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Snowfall from "@/components/Snowfall";
import heroImage from "@/assets/hero-holiday.jpg";
import giftBox from "@/assets/gift-box.jpg";
import giftCard from "@/assets/gift-card.jpg";
import holidayTreat from "@/assets/holiday-treat.jpg";

const Index = () => {
  const deals = [
    {
      title: "Gift Bundles",
      description: "Curated holiday packages perfect for everyone on your list",
      discount: "25% OFF",
      image: giftBox,
    },
    {
      title: "Gift Cards",
      description: "Give the gift of choice with our festive gift cards",
      discount: "Free Shipping",
      image: giftCard,
    },
    {
      title: "Holiday Specials",
      description: "Limited edition seasonal treats and goodies",
      discount: "Buy 2 Get 1",
      image: holidayTreat,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The holiday gift baskets were absolutely stunning! Everyone loved their presents. Will definitely be ordering again next year.",
      rating: 5,
    },
    {
      name: "David L.",
      text: "Outstanding service and beautiful packaging. They made my corporate gifting so easy and impressive.",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "Found the perfect gifts for my whole family. The quality exceeded my expectations!",
      rating: 5,
    },
  ];

  const holidayHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 5:00 PM" },
    { day: "Christmas Eve", hours: "9:00 AM - 3:00 PM" },
    { day: "Christmas Day", hours: "Closed" },
    { day: "New Year's Eve", hours: "10:00 AM - 4:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Snowfall />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">Poillais</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#deals" className="text-muted-foreground hover:text-foreground transition-colors">Holiday Deals</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#hours" className="text-muted-foreground hover:text-foreground transition-colors">Hours & Contact</a>
          </div>
          <Button variant="gold" size="sm">Shop Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-holiday-cranberry/60 via-holiday-cranberry/40 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-holiday-snow/20 backdrop-blur-sm px-4 py-2 rounded-full border border-holiday-gold/30">
              <Star className="h-4 w-4 text-holiday-gold shimmer" />
              <span className="text-holiday-snow text-sm font-medium">Holiday Season 2025</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-holiday-snow leading-tight">
              Make This Season
              <span className="block text-gradient-gold">Unforgettable</span>
            </h1>
            
            <p className="text-holiday-snow/90 text-lg md:text-xl max-w-2xl mx-auto font-serif">
              Discover our curated collection of holiday gifts, treats, and experiences. 
              Perfect presents for everyone on your list.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl">
                <Gift className="mr-2 h-5 w-5" />
                Shop Holiday Collection
              </Button>
              <Button variant="ghost" size="lg" className="text-holiday-snow hover:bg-holiday-snow/10">
                View Special Offers
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Holiday Pages Links Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Explore More</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Holiday Celebrations
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Christmas Page Card */}
            <a 
              href="https://yourbusiness.com/christmas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gradient-to-br from-holiday-cranberry to-holiday-pine border-none overflow-hidden hover:shadow-glow transition-all duration-500 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-holiday-snow/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TreePine className="h-10 w-10 text-holiday-snow" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-holiday-snow mb-2">
                    Christmas Collection
                  </h3>
                  <p className="text-holiday-snow/80 font-serif mb-4">
                    Discover our magical Christmas gifts, decorations, and festive treats
                  </p>
                  <div className="flex items-center gap-2 text-holiday-gold font-medium group-hover:gap-3 transition-all">
                    <span>Visit Christmas Page</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* New Year Page Card */}
            <a 
              href="https://yourbusiness.com/new-year" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-gradient-to-br from-holiday-gold via-holiday-gold-dark to-holiday-cranberry border-none overflow-hidden hover:shadow-glow transition-all duration-500 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-holiday-snow/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PartyPopper className="h-10 w-10 text-holiday-snow" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-holiday-snow mb-2">
                    New Year Celebration
                  </h3>
                  <p className="text-holiday-snow/80 font-serif mb-4">
                    Ring in the New Year with our exclusive party essentials and gifts
                  </p>
                  <div className="flex items-center gap-2 text-holiday-snow font-medium group-hover:gap-3 transition-all">
                    <span>Visit New Year Page</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Holiday Deals Section */}
      <section id="deals" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Limited Time</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Holiday Specials
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Don't miss out on our exclusive holiday deals. Perfect gifts at perfect prices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {deal.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-card-foreground mb-2">{deal.title}</h3>
                  <p className="text-muted-foreground mb-4">{deal.description}</p>
                  <Button variant="gold" className="w-full">Shop Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Customer Love</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl shadow-card border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-holiday-gold text-holiday-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground font-serif italic mb-6">"{testimonial.text}"</p>
                <p className="font-semibold text-card-foreground">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Hours & Contact */}
      <section id="hours" className="py-20 bg-festive-gradient text-holiday-snow">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Holiday Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-holiday-gold" />
                <h2 className="font-display text-3xl font-bold">Holiday Hours</h2>
              </div>
              <div className="space-y-3">
                {holidayHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-holiday-snow/20 last:border-0"
                  >
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-holiday-gold-light">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-holiday-snow/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-holiday-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-holiday-snow/80">123 Main Street, Your City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-holiday-snow/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-holiday-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-holiday-snow/80">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-holiday-snow/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-holiday-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-holiday-snow/80">hello@yourbusiness.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-3">Follow Our Holiday Journey</p>
                <div className="flex gap-4">
                  <a href="#" className="bg-holiday-snow/10 p-3 rounded-lg hover:bg-holiday-snow/20 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-holiday-snow/10 p-3 rounded-lg hover:bg-holiday-snow/20 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-holiday-snow/10 p-3 rounded-lg hover:bg-holiday-snow/20 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated on Holiday Deals
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, early access to sales, and holiday inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 max-w-md px-6 py-3 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gold" size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              <span className="font-display font-semibold text-foreground">Poillais</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Poillais. All rights reserved. | Wishing you a joyful holiday season!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
