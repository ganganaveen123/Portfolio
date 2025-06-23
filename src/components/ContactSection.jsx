import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const email = data.get("email");

    // ✅ Abstract API Email Validation
    try {
      const validationRes = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=dc9f881b108d486392d3e80e5973cb5e&email=${email}`
      );
      const result = await validationRes.json();

      if (result.deliverability !== "DELIVERABLE") {
        setStatus("error");
        return;
      }
    } catch (error) {
      console.error("Email validation error:", error);
      setStatus("error");
      return;
    }

    // ✅ Formspree submission
    try {
      const res = await fetch("https://formspree.io/f/xnnvgdyk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Formspree error:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ganganaveenpotu@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ganganaveenpotu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918247658131"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8247658131
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Kadapa, Andhra Pradesh
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me On</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com/in/ganga-naveen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://instagram.com/always_naveen_0712"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://github.com/ganganaveen123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs relative">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>

            {/* ✅ Success Popup */}
            {status === "success" && (
              <div className="absolute top-4 right-4 bg-green-100 text-green-800 p-4 rounded-md flex items-center gap-2 shadow">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Message sent successfully!</span>
              </div>
            )}

            {/* ❌ Error Popup */}
            {status === "error" && (
              <div className="absolute top-4 right-4 bg-red-100 text-red-800 p-4 rounded-md flex items-center gap-2 shadow">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>Invalid or fake email. Please try again.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
