
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import { BsBusFront } from "react-icons/bs";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/travel-modes', label: 'Travel Modes' },
    { href: '/fare-estimator', label: 'Fare Estimator' },
    { href: '/journey-planner', label: 'Journey Planner' },
    { href: '/stops', label: 'Stops' },
    { href: '/bikes', label: 'Bikes' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              <span className="text-primary/80 font-bold text-lg"><BsBusFront className='size-8 '/></span>
            </div>
            <span className="inline text-lg font-bold text-foreground whitespace-nowrap">
              Urban Mobility
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto bg-transparent ">
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="flex flex-col items-center gap-4 mt-8 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium text-lg px-2 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
