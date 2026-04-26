"use client";
import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, FileText, X, Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import TopBar from "@/components/TopBar";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";


import Image from "next/image";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  partName: z.string().min(2, "Part name/description is required"),
  quantity: z.string().min(1, "Quantity is required"),
  material: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestQuote = () => {
  const { t } = useTranslation();
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const processSteps = [
    { step: "01", title: t("quotePage.step1Title"), desc: t("quotePage.step1Desc") },
    { step: "02", title: t("quotePage.step2Title"), desc: t("quotePage.step2Desc") },
    { step: "03", title: t("quotePage.step3Title"), desc: t("quotePage.step3Desc") },
    { step: "04", title: t("quotePage.step4Title"), desc: t("quotePage.step4Desc") },
  ];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", email: "", phone: "", partName: "", quantity: "", material: "", message: "" },
  });

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => { setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); addFiles(Array.from(e.dataTransfer.files)); };
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => { if (e.target.files) addFiles(Array.from(e.target.files)); };
  const addFiles = (newFiles: File[]) => { const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024); setFiles(prev => [...prev, ...validFiles].slice(0, 5)); };
  const removeFile = (index: number) => { setFiles(prev => prev.filter((_, i) => i !== index)); };

  const onSubmit = (data: FormData) => {
    const message = `*Quote Request*%0A%0A*Name:* ${data.name}%0A*Company:* ${data.company}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A%0A*Part Details:*%0A*Part Name:* ${data.partName}%0A*Quantity:* ${data.quantity}%0A*Material:* ${data.material || 'Not specified'}%0A%0A*Message:* ${data.message || 'No additional message'}%0A%0A*Files attached:* ${files.length} file(s)`;
    window.open(`https://wa.me/919967082089?text=${message}`, '_blank');
    toast({ title: t("quotePage.toastTitle"), description: t("quotePage.toastDesc") });
  };

  return (
    <>
      <PageSEO title="Request Quote - CNC Machining & Custom Parts" description="Request a free quote for precision machined components." keywords="CNC machining quote" path="/request-quote" breadcrumbs={[{ name: "Home", url: "/" }, { name: "Request Quote", url: "/request-quote" }]} />
      <TopBar />
      <MainNav />
      <main className="min-h-screen bg-background">
        <section className="relative h-[340px] md:h-[450px] overflow-hidden">
          <Image src="/bg-quote-parts.jpg" alt="Request a quote for precision CNC machining services" fill className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <AnimatedContainer animation="fade-up" className="max-w-2xl">
                <span className="inline-block text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-primary/20 rounded-full backdrop-blur-sm">{t("quotePage.heroTag")}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-3">{t("quotePage.heroTitle")}</h1>
                <p className="text-background/80 text-base md:text-lg">{t("quotePage.heroDesc")}</p>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        <section className="relative -mt-12 z-10 pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
              {processSteps.map((s, i) => (
                <AnimatedContainer key={s.step} animation="fade-up" delay={i * 80}>
                  <div className="bg-card rounded-xl p-4 border border-border/50 shadow-lg text-center">
                    <div className="text-lg font-bold text-primary mb-1">{s.step}</div>
                    <div className="text-xs font-bold text-foreground mb-0.5">{s.title}</div>
                    <div className="text-[10px] text-muted-foreground">{s.desc}</div>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <AnimatedContainer animation="fade-up" delay={100}>
                  <div className="relative rounded-2xl overflow-hidden sticky top-32">
                    <div className="absolute inset-0">
                      <Image src="/bg-about-story.jpg" alt="Precision manufacturing quote request background" fill className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-foreground/90" />
                    </div>
                    <div className="relative z-10 p-7">
                      <h3 className="text-lg font-bold text-background mb-6">{t("quotePage.contactInfo")}</h3>
                      <div className="space-y-5">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"><Phone className="w-4 h-4 text-primary" /></div>
                          <div><p className="font-medium text-background text-sm">{t("common.phone")}</p><a href="tel:+919820808852" className="text-background/60 hover:text-primary transition-colors text-sm">+91 98208 08852</a></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"><Mail className="w-4 h-4 text-primary" /></div>
                          <div><p className="font-medium text-background text-sm">{t("common.email")}</p><a href="mailto:rakesh@patelprecision.com" className="text-background/60 hover:text-primary transition-colors text-xs">rakesh@patelprecision.com</a></div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-primary" /></div>
                          <div><p className="font-medium text-background text-sm">{t("quotePage.location")}</p><p className="text-background/60 text-xs">Mumbai, Maharashtra, India</p></div>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-background/10">
                        <h4 className="font-medium text-background text-sm mb-3">{t("quotePage.whyChoose")}</h4>
                        <div className="space-y-2">
                          {[t("quotePage.why1"), t("quotePage.why2"), t("quotePage.why3"), t("quotePage.why4")].map((item) => (
                            <div key={item} className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" /><span className="text-xs text-background/60">{item}</span></div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-background/10">
                        <h4 className="font-medium text-background text-sm mb-3">{t("quotePage.acceptedFormats")}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {['PDF', 'DXF', 'STEP', 'IGES', 'DWG', 'PNG', 'JPG'].map(format => (
                            <span key={format} className="px-2 py-0.5 text-[10px] bg-background/10 rounded-md text-background/60">.{format.toLowerCase()}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedContainer>
              </div>

              <div className="lg:col-span-2 order-1 lg:order-2">
                <AnimatedContainer animation="fade-up">
                  <div className="bg-card rounded-2xl p-7 md:p-8 border border-border/50">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-5">
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem><FormLabel>{t("careers.fullName")} *</FormLabel><FormControl><Input placeholder={t("common.name")} {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name="company" render={({ field }) => (
                            <FormItem><FormLabel>{t("quotePage.companyName")} *</FormLabel><FormControl><Input placeholder={t("quotePage.companyName")} {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel>{t("common.email")} *</FormLabel><FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem><FormLabel>{t("common.phone")} *</FormLabel><FormControl><Input placeholder="+91 XXXXX XXXXX" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                        </div>
                        <div className="pt-4 border-t border-border">
                          <h3 className="text-base font-semibold text-foreground mb-4">{t("quotePage.partDetails")}</h3>
                          <div className="grid md:grid-cols-2 gap-5">
                            <FormField control={form.control} name="partName" render={({ field }) => (
                              <FormItem><FormLabel>{t("quotePage.partName")} *</FormLabel><FormControl><Input placeholder={t("quotePage.partNamePlaceholder")} {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="quantity" render={({ field }) => (
                              <FormItem><FormLabel>{t("quotePage.quantity")} *</FormLabel><FormControl><Input placeholder={t("quotePage.quantityPlaceholder")} {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                          </div>
                          <div className="mt-5">
                            <FormField control={form.control} name="material" render={({ field }) => (
                              <FormItem><FormLabel>{t("quotePage.material")}</FormLabel><FormControl><Input placeholder={t("quotePage.materialPlaceholder")} {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                          </div>
                        </div>
                        <div className="pt-4 border-t border-border">
                          <h3 className="text-base font-semibold text-foreground mb-4">{t("quotePage.uploadDrawings")}</h3>
                          <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'}`}>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"><Upload className="w-6 h-6 text-primary" /></div>
                            <p className="text-foreground font-medium text-sm mb-1">{t("quotePage.dragDrop")}</p>
                            <p className="text-muted-foreground text-xs mb-3">{t("quotePage.orBrowse")}</p>
                            <input type="file" multiple accept=".pdf,.dxf,.step,.stp,.iges,.dwg,.png,.jpg,.jpeg" onChange={handleFileInput} className="hidden" id="file-upload" />
                            <label htmlFor="file-upload"><Button type="button" variant="outline" size="sm" className="cursor-pointer" asChild><span>{t("quotePage.selectFiles")}</span></Button></label>
                          </div>
                          {files.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                  <div className="flex items-center gap-3"><FileText className="w-4 h-4 text-primary" /><div><p className="text-xs font-medium text-foreground">{file.name}</p><p className="text-[10px] text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p></div></div>
                                  <button type="button" onClick={() => removeFile(index)} className="p-1 hover:bg-destructive/10 rounded-full transition-colors"><X className="w-3.5 h-3.5 text-destructive" /></button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem><FormLabel>{t("quotePage.additionalReq")}</FormLabel><FormControl><Textarea placeholder={t("quotePage.additionalPlaceholder")} className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <Button type="submit" size="lg" className="w-full gap-2"><Send className="w-5 h-5" />{t("quotePage.submitBtn")}</Button>
                        <p className="text-center text-xs text-muted-foreground">{t("quotePage.submitNote")}</p>
                      </form>
                    </Form>
                  </div>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default RequestQuote;