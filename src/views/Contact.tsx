
"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle, Upload, Send, Award, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";


import Image from "next/image";
const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactCards = [
    { icon: MapPin, title: t("contact.address"), content: "Patel Precision Pvt Ltd\nA16/5, Dapode\nBhiwandi-421302, Maharashtra, India" },
    { icon: Phone, title: t("common.phone"), content: "+91 98208 08852", href: "tel:+919820808852" },
    { icon: Mail, title: t("common.email"), content: "rakesh@patelprecision.com", href: "mailto:rakesh@patelprecision.com" },
    { icon: Clock, title: t("contact.hours"), content: "Mon - Sat: 9AM - 6PM\nSunday: Closed" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in required fields", description: "Name, email, and message are required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}${file ? `\n\n[Attachment: ${file.name}]` : ""}`);
    window.location.href = `mailto:rakesh@patelprecision.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Email client opened", description: "Your email client should have opened with the pre-filled message." });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFile(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Contact Us - Get a Quote for CNC Machining" description="Contact Patel Precision Pvt Ltd for precision CNC machining services." keywords="contact Patel Precision, CNC machining quote" path="/contact" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero */}
        <section className="relative h-[340px] md:h-[450px] overflow-hidden">
          <Image src="/cnc-inside.jpg" alt="Contact Patel Precision for CNC machining services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("contact.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("contact.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("contact.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Contact Cards - overlapping hero */}
        <section className="relative -mt-12 z-10 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {contactCards.map((card, index) => (
                <AnimatedContainer key={card.title} animation="fade-up" delay={index * 80}>
                  <div className="bg-card rounded-xl p-4 md:p-5 border border-border/50 shadow-lg text-center h-full">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-xs md:text-sm mb-1">{card.title}</h3>
                    {card.href ? (
                      <a href={card.href} className="text-muted-foreground text-xs hover:text-primary transition-colors">{card.content}</a>
                    ) : (
                      <p className="text-muted-foreground text-xs whitespace-pre-line">{card.content}</p>
                    )}
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
              {/* Form - larger area */}
              <div className="lg:col-span-3">
                <AnimatedContainer animation="fade-up">
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0">
                      <Image src="/bg-quote-parts.jpg" alt="Request quote for precision machined components" fill className="w-full h-full object-cover blur-sm" />
                      <div className="absolute inset-0 bg-foreground/80" />
                    </div>
                    <div className="relative z-10 p-7 md:p-10">
                      <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-background mb-2">{t("contact.sendMessage")}</h2>
                        <p className="text-background/60 text-sm">{t("contact.sendDesc")}</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-background/80">{t("common.name")} *</Label>
                            <Input id="name" placeholder={t("common.name")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus:border-primary" required maxLength={100} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-background/80">{t("common.email")} *</Label>
                            <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus:border-primary" required maxLength={255} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-background/80">{t("common.phone")}</Label>
                          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus:border-primary" maxLength={20} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-background/80">{t("common.message")} *</Label>
                          <Textarea id="message" placeholder="Describe your requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background/10 border-background/20 text-background placeholder:text-background/30 focus:border-primary min-h-[120px]" required maxLength={2000} />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium text-background/80">{t("contact.attachDoc")}</Label>
                          <div className="relative">
                            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="hidden" id="file-upload" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp,.igs" />
                            <label htmlFor="file-upload" className="flex items-center gap-2 px-4 py-3 border border-dashed border-background/20 rounded-lg cursor-pointer hover:border-primary/50 transition-colors duration-200 text-sm text-background/50">
                              <Upload className="w-4 h-4" />
                              {file ? file.name : t("contact.uploadHint")}
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <Button type="submit" disabled={isSubmitting} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                            <Send className="w-4 h-4 mr-2" />
                            {isSubmitting ? t("common.sending") : t("common.send")}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </AnimatedContainer>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-5">
                <AnimatedContainer animation="fade-up" delay={100}>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Award, value: "25+", label: t("contact.experience") },
                      { icon: Users, value: "10+", label: t("contact.industriesServed") },
                      { icon: Settings, value: "5,000+", label: t("contact.partsDeveloped") },
                    ].map((stat, i) => (
                      <div key={i} className="bg-card rounded-xl p-5 border border-border/50 flex items-center gap-4 hover:border-primary/20 transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedContainer>

                <AnimatedContainer animation="fade-up" delay={200}>
                  <div className="bg-card rounded-xl p-5 border border-border/50">
                    <h3 className="font-bold text-foreground text-sm mb-3">{t("contactPage.quickContact")}</h3>
                    <div className="space-y-3">
                      <a href="tel:+919820808852" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Phone className="w-4 h-4 text-primary" />
                        +91 98208 08852
                      </a>
                      <a href="mailto:rakesh@patelprecision.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        rakesh@patelprecision.com
                      </a>
                      <a href="https://wa.me/919820808852" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedContainer animation="fade-up">
                <div className="text-center mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("contact.location")}</h2>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm h-[300px] md:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps?q=Patel+Precision+Pvt+Ltd+Dapode+Bhiwandi+Maharashtra+India&output=embed"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="Patel Precision Location"
                  />
                </div>
                <div className="text-center mt-3">
                  <a href="https://www.google.com/maps/search/Patel+Precision+Pvt+Ltd+Dapode+Bhiwandi+Maharashtra" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("footer.viewOnMaps")}
                  </a>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
