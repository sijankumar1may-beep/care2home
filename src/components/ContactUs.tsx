"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/textarea";
import { Label } from "@/components/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-+$$$$]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !phoneRegex.test(formData.phone) ||
      formData.phone.replace(/\D/g, "").length < 10
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace with your WhatsApp number (include country code, no + or spaces)
    // Example: For +1 234 567 8900, use: 12345678900
    const whatsappNumber = "919910646415"; // CHANGE THIS TO YOUR WHATSAPP NUMBER

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success message
    toast({
      title: "Success!",
      description: "Redirecting you to WhatsApp...",
    });

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="bg-card p-8 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="text-blue-600 font-bold uppercase text-xs tracking-wider"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`border-2 border-primary focus-visible:ring-accent ${
                errors.firstName ? "border-destructive" : ""
              }`}
              placeholder="Your first name"
            />
            {errors.firstName && (
              <p className="text-xs text-destructive mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="lastName"
              className="text-primary font-bold uppercase text-xs tracking-wider"
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`border-2 border-primary focus-visible:ring-accent ${
                errors.lastName ? "border-destructive" : ""
              }`}
              placeholder="Your last name"
            />
            {errors.lastName && (
              <p className="text-xs text-destructive mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-primary font-bold uppercase text-xs tracking-wider"
          >
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`border-2 border-primary focus-visible:ring-accent ${
              errors.email ? "border-destructive" : ""
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-primary font-bold uppercase text-xs tracking-wider"
          >
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`border-2 border-primary focus-visible:ring-accent ${
              errors.phone ? "border-destructive" : ""
            }`}
            placeholder="+1 (234) 567-8900"
          />
          {errors.phone && (
            <p className="text-xs text-destructive mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-primary font-bold uppercase text-xs tracking-wider"
          >
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border-2 border-primary focus-visible:ring-accent min-h-[150px] resize-none ${
              errors.message ? "border-destructive" : ""
            }`}
            placeholder="Tell us about your inquiry..."
          />
          {errors.message && (
            <p className="text-xs text-destructive mt-1">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider py-6 text-base"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
