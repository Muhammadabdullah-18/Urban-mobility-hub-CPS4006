import { BsBusFront } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2 ">
              <span className="text-primary/80 font-bold text-lg">
                <BsBusFront className="size-8 " />
              </span>
              Urban Mobility Hub
            </h3>
            <p className="text-muted-foreground text-sm">
              Sustainable transportation solutions for modern urban living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/travel-modes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Travel Modes
                </a>
              </li>
              <li>
                <a
                  href="/fare-estimator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fare Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Bus Services
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Rail Network
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Cycling Support
              </li>
              <li className="text-muted-foreground hover:text-primary transition-colors">
                Walking Network
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm mb-2">
              St Mary&apos;s University
            </p>
            <p className="text-muted-foreground text-sm">
              support@urbanmobility.local
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2026 St Mary&apos;s Urban Mobility Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
