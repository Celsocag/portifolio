"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function Forms() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [surveyForm, setSurveyForm] = useState({
    satisfaction: "",
    features: [] as string[],
    recommendation: "",
    feedback: "",
    newsletter: false,
  })

  const [registrationForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    terms: false,
    notifications: true,
  })

  const [submitted, setSubmitted] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!contactForm.name.trim()) newErrors.name = "Name is required"
    if (!contactForm.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(contactForm.email)) newErrors.email = "Invalid email format"
    if (!contactForm.subject.trim()) newErrors.subject = "Subject is required"
    if (!contactForm.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted("contact")
      setContactForm({ name: "", email: "", subject: "", message: "" })
    }
  }

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!surveyForm.satisfaction) newErrors.satisfaction = "Please rate your satisfaction"
    if (!surveyForm.recommendation) newErrors.recommendation = "Please select a recommendation"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted("survey")
      setSurveyForm({
        satisfaction: "",
        features: [],
        recommendation: "",
        feedback: "",
        newsletter: false,
      })
    }
  }

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!registrationForm.firstName.trim()) newErrors.firstName = "First name is required"
    if (!registrationForm.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!registrationForm.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(registrationForm.email)) newErrors.email = "Invalid email format"
    if (!registrationForm.password) newErrors.password = "Password is required"
    else if (registrationForm.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (registrationForm.password !== registrationForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    if (!registrationForm.country) newErrors.country = "Please select a country"
    if (!registrationForm.terms) newErrors.terms = "You must accept the terms and conditions"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted("registration")
      setRegistrationForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        terms: false,
        notifications: true,
      })
    }
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setSurveyForm((prev) => ({
      ...prev,
      features: checked ? [...prev.features, feature] : prev.features.filter((f) => f !== feature),
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Responsive Forms
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Showcase of various form types with validation and responsive design
          </p>
        </div>

        {submitted && (
          <Card className="mb-8 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">
                  {submitted === "contact" && "Contact form submitted successfully!"}
                  {submitted === "survey" && "Survey submitted successfully!"}
                  {submitted === "registration" && "Registration completed successfully!"}
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contact">Contact Form</TabsTrigger>
            <TabsTrigger value="survey">Survey Form</TabsTrigger>
            <TabsTrigger value="registration">Registration</TabsTrigger>
          </TabsList>

          {/* Contact Form */}
          <TabsContent value="contact">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  Contact Us
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Get in touch with us. We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-900 dark:text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-900 dark:text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-900 dark:text-white">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                      className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.subject ? "border-red-500" : ""}`}
                    />
                    {errors.subject && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900 dark:text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                      className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Survey Form */}
          <TabsContent value="survey">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  User Experience Survey
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Help us improve by sharing your feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSurveySubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-gray-900 dark:text-white">How satisfied are you with our service? *</Label>
                    <RadioGroup
                      value={surveyForm.satisfaction}
                      onValueChange={(value) => setSurveyForm((prev) => ({ ...prev, satisfaction: value }))}
                    >
                      {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option} className="text-gray-900 dark:text-white">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.satisfaction && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.satisfaction}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-gray-900 dark:text-white">
                      Which features do you use most? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Dashboard", "Analytics", "Reports", "Settings", "Support", "API"].map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={surveyForm.features.includes(feature)}
                            onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                          />
                          <Label htmlFor={feature} className="text-gray-900 dark:text-white">
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-900 dark:text-white">Would you recommend us to others? *</Label>
                    <Select
                      value={surveyForm.recommendation}
                      onValueChange={(value) => setSurveyForm((prev) => ({ ...prev, recommendation: value }))}
                    >
                      <SelectTrigger
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.recommendation ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="definitely">Definitely</SelectItem>
                        <SelectItem value="probably">Probably</SelectItem>
                        <SelectItem value="maybe">Maybe</SelectItem>
                        <SelectItem value="probably-not">Probably Not</SelectItem>
                        <SelectItem value="definitely-not">Definitely Not</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.recommendation && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.recommendation}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback" className="text-gray-900 dark:text-white">
                      Additional Feedback
                    </Label>
                    <Textarea
                      id="feedback"
                      rows={4}
                      placeholder="Tell us more about your experience..."
                      value={surveyForm.feedback}
                      onChange={(e) => setSurveyForm((prev) => ({ ...prev, feedback: e.target.value }))}
                      className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white`}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="newsletter"
                      checked={surveyForm.newsletter}
                      onCheckedChange={(checked) => setSurveyForm((prev) => ({ ...prev, newsletter: checked }))}
                    />
                    <Label htmlFor="newsletter" className="text-gray-900 dark:text-white">
                      Subscribe to our newsletter
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Survey
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registration Form */}
          <TabsContent value="registration">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white transition-colors duration-300">
                  Create Account
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Join our platform and start your journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-900 dark:text-white">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={registrationForm.firstName}
                        onChange={(e) => setRegistrationForm((prev) => ({ ...prev, firstName: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.firstName ? "border-red-500" : ""}`}
                      />
                      {errors.firstName && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-900 dark:text-white">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={registrationForm.lastName}
                        onChange={(e) => setRegistrationForm((prev) => ({ ...prev, lastName: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.lastName ? "border-red-500" : ""}`}
                      />
                      {errors.lastName && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regEmail" className="text-gray-900 dark:text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="regEmail"
                      type="email"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm((prev) => ({ ...prev, email: e.target.value }))}
                      className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-900 dark:text-white">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        value={registrationForm.password}
                        onChange={(e) => setRegistrationForm((prev) => ({ ...prev, password: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.password ? "border-red-500" : ""}`}
                      />
                      {errors.password && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-900 dark:text-white">
                        Confirm Password *
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={registrationForm.confirmPassword}
                        onChange={(e) => setRegistrationForm((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.confirmPassword ? "border-red-500" : ""}`}
                      />
                      {errors.confirmPassword && (
                        <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-900 dark:text-white">Country *</Label>
                    <Select
                      value={registrationForm.country}
                      onValueChange={(value) => setRegistrationForm((prev) => ({ ...prev, country: value }))}
                    >
                      <SelectTrigger
                        className={`bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white ${errors.country ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.country}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={registrationForm.terms}
                        onCheckedChange={(checked) =>
                          setRegistrationForm((prev) => ({ ...prev, terms: checked as boolean }))
                        }
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-900 dark:text-white">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>{" "}
                        *
                      </Label>
                    </div>
                    {errors.terms && (
                      <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.terms}
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="notifications"
                        checked={registrationForm.notifications}
                        onCheckedChange={(checked) =>
                          setRegistrationForm((prev) => ({ ...prev, notifications: checked }))
                        }
                      />
                      <Label htmlFor="notifications" className="text-sm text-gray-900 dark:text-white">
                        Send me email notifications about updates and promotions
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
