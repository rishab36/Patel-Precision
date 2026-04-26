"use client";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import PageSEO from "@/components/PageSEO";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";



import { CheckCircle, Upload, Send, Users, Award, TrendingUp, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


import Image from "next/image";
const benefits = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Continuous learning and career advancement in a growing organization." },
  { icon: Users, title: "Team Culture", desc: "Collaborative environment where every team member is valued and respected." },
  { icon: Award, title: "Skill Development", desc: "Regular training on the latest CNC technologies and manufacturing processes." },
  { icon: Heart, title: "Work-Life Balance", desc: "Structured shifts, supportive management, and a healthy work environment." },
];

const openings = [
  { title: "CNC Machine Operator", dept: "Production", exp: "2-5 years", type: "Full-time" },
  { title: "Quality Inspector", dept: "Quality", exp: "3-6 years", type: "Full-time" },
  { title: "Design Engineer (CAD/CAM)", dept: "Engineering", exp: "1-4 years", type: "Full-time" },
];

const Careers = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.position.trim()) {
      toast({ title: "Please fill required fields", description: "Name, email, and position are required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Career Application - ${formData.position} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\nExperience: ${formData.experience} years\n\nCover Letter:\n${formData.coverLetter}${resume ? `\n\n[Resume Attached: ${resume.name}]` : ""}`
    );
    window.location.href = `mailto:rakesh@patelprecision.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Email client opened", description: "Please send the email with your resume attached to complete your application." });
      setFormData({ name: "", email: "", phone: "", position: "", experience: "", coverLetter: "" });
      setResume(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Careers - Join Patel Precision" description="Explore career opportunities at Patel Precision Pvt Ltd." keywords="CNC machining jobs, precision manufacturing careers" path="/careers" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Careers", url: "/careers" }]} />
      <TopBar />
      <MainNav />
      <main>
        {/* Hero with parallax feel */}
        <section className="relative h-[340px] md:h-[450px] overflow-hidden">
          <Image src="/products1.jpg" alt="Career opportunities at Patel Precision precision machining company" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("careers.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("careers.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("careers.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* About Working With Us */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AnimatedContainer animation="fade-up" delay={100}>
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">{t("careers.about")}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{t("careers.about")}</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm md:text-base">
                  <p>{t("careers.aboutText1")}</p>
                  <p>{t("careers.aboutText2")}</p>
                  <p>{t("careers.aboutText3")}</p>
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="fade-up">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/products3.jpg" alt="Patel Precision workplace and manufacturing facility" fill className="w-full h-64 md:h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      {[
                        { val: "25+", label: "Years" },
                        { val: "50+", label: "Team" },
                        { val: "24/7", label: "Support" },
                      ].map((s) => (
                        <div key={s.label} className="bg-background/15 backdrop-blur-sm rounded-lg px-3 py-2 border border-background/10">
                          <div className="text-sm font-bold text-background">{s.val}</div>
                          <div className="text-[10px] text-background/60">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* What We Look For */}
        <section className="py-14 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">{t("careers.whatWeLook")}</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto text-base">We are actively looking for talented individuals to join our team. Whether we have a current vacancy or not, we welcome applications as we hire based on our requirements and your qualifications.</p>
              
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">We're Recruiting For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    "CNC Machine Operators",
                    "CNC Machine Setters",
                    "VMC (Vertical Machining Center) Operators",
                    "VMC (Vertical Machining Center) Setters"
                  ].map((position, i) => (
                    <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 border border-primary/30 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span className="text-base md:text-lg font-semibold text-foreground">{position}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-6 text-center">What We Look For in You</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[t("careers.lookItem1"), t("careers.lookItem2"), t("careers.lookItem3"), t("careers.lookItem4")].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-background rounded-xl p-4 border border-border/50 hover:border-primary/20 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-base font-bold text-foreground mb-3">Open Application Policy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Don't see a matching position? No problem! Submit your application anyway. We continuously evaluate talented candidates and will reach out when there's a suitable opportunity that matches your skills and experience.</p>
              </div>
            </AnimatedContainer>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="relative overflow-hidden py-14 md:py-20">
          <div className="absolute inset-0">
            <Image src="/bg-about-story.jpg" alt="Career opportunities at Patel Precision manufacturing" fill className="w-full h-full object-cover blur-sm" />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <AnimatedContainer animation="fade-up" className="max-w-2xl mx-auto">
              <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-7 md:p-10 border border-border/50 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t("careers.applyTitle")}</h2>
                  <p className="text-muted-foreground text-sm">Submit your application for CNC Operators, CNC Setters, VMC Operators, or VMC Setters positions. We review applications continuously and consider candidates for future opportunities.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">{t("careers.fullName")} *</Label>
                      <Input id="name" placeholder={t("careers.fullName")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">{t("common.email")} *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">{t("common.phone")}</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-sm font-medium text-foreground">{t("careers.position")} *</Label>
                      <Input id="position" placeholder="e.g. CNC Operator" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-sm font-medium text-foreground">{t("careers.experience")}</Label>
                    <Input id="experience" type="number" placeholder="e.g. 5" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">{t("careers.resume")} *</Label>
                    <div className="relative">
                      <input type="file" onChange={(e) => setResume(e.target.files?.[0] || null)} className="hidden" id="resume-upload" accept=".pdf,.doc,.docx" />
                      <label htmlFor="resume-upload" className="flex items-center gap-2 px-4 py-3 border border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors duration-200 text-sm text-muted-foreground">
                        <Upload className="w-4 h-4" />
                        {resume ? resume.name : t("careers.resumeHint")}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter" className="text-sm font-medium text-foreground">{t("careers.coverLetter")}</Label>
                    <Textarea id="coverLetter" placeholder="Tell us about yourself..." value={formData.coverLetter} onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })} className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground/50 min-h-[100px]" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? t("common.sending") : t("common.apply")}
                  </Button>
                </form>
              </div>
            </AnimatedContainer>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Careers;