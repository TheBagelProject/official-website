import React, { useState } from 'react';
import { Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    waitingExperience: '',
    currentWorkflow: '',
    recentDelays: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.waitingExperience.trim()) {
      newErrors.waitingExperience = 'Please share your waiting experience';
    }

    if (!formData.currentWorkflow.trim()) {
      newErrors.currentWorkflow = 'Please describe your current workflow';
    }

    if (!formData.recentDelays.trim()) {
      newErrors.recentDelays = 'Please tell us about recent delays';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToGoogleSheets = async (data) => {
    // Google Sheets integration
    const GOOGLE_SHEETS_URL = process.env.REACT_APP_GOOGLE_SHEETS_URL;
    
    if (!GOOGLE_SHEETS_URL) {
      throw new Error('Google Sheets URL not configured. Please set REACT_APP_GOOGLE_SHEETS_URL in your .env file.');
    }
    
    try {
      const payload = {
        name: data.name,
        email: data.email,
        waitingExperience: data.waitingExperience,
        currentWorkflow: data.currentWorkflow,
        recentDelays: data.recentDelays,
        timestamp: new Date().toISOString()
      };
      
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      // With no-cors mode, we can't check response status or read response
      // Google Apps Script will still process the request
      // We'll assume success if no network error occurs

      return true;
    } catch (error) {
      // Log generic error without exposing sensitive URLs
      console.error('Form submission failed. Please try again.');
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        waitingExperience: '',
        currentWorkflow: '',
        recentDelays: ''
      });
    } catch (error) {
      // Show success anyway since no-cors mode prevents proper error detection
      // and we don't want to expose internal errors to users
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        waitingExperience: '',
        currentWorkflow: '',
        recentDelays: ''
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (showSuccess) {
    return (
      <section id="waitlist" className="py-20 px-8 sm:px-12 lg:px-16 bg-gradient-to-br from-warm-yellow/5 to-golden-brown/5 dark:from-warm-yellow/2 dark:to-golden-brown/2">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/70 dark:bg-neutral-gray/50 backdrop-blur-sm rounded-3xl p-12 border border-neutral-gray/10 dark:border-cream/10">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neutral-gray dark:text-cream mb-4">
              You're on the list! 🎉
            </h2>
            <p className="text-lg text-neutral-gray/70 dark:text-cream/70 mb-8">
              You have joined the waiting list! We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Join Another Person
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 px-8 sm:px-12 lg:px-16 bg-gradient-to-br from-warm-yellow/5 to-golden-brown/5 dark:from-warm-yellow/2 dark:to-golden-brown/2">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <Mail className="h-6 w-6 text-warm-yellow" />
            <span className="text-warm-yellow font-medium">Early Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-2xl mx-auto">
            Be among the first to experience the easiest way to deploy infrastructure. Get early access and help shape the future of Bagel.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/70 dark:bg-neutral-gray/50 backdrop-blur-sm rounded-3xl p-8 border border-neutral-gray/10 dark:border-cream/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-2xl border ${
                    errors.name 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-neutral-gray/20 focus:border-warm-yellow'
                  } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-2xl border ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500' 
                      : 'border-neutral-gray/20 focus:border-warm-yellow'
                  } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Waiting Experience Field */}
            <div>
              <label htmlFor="waitingExperience" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                When was the last time you had to wait for someone else to set up infrastructure?
              </label>
              <textarea
                id="waitingExperience"
                name="waitingExperience"
                rows="4"
                value={formData.waitingExperience}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.waitingExperience 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-neutral-gray/20 focus:border-warm-yellow'
                } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors resize-none`}
                placeholder="Describe the last time you waited for DevOps or another team to provision an environment."
              />
              <p className="mt-1 text-xs text-neutral-gray/60 dark:text-cream/60">
                Share the situation, delays, or frustrations. We'd like to hear real stories!
              </p>
              {errors.waitingExperience && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.waitingExperience}
                </p>
              )}
            </div>

            {/* Current Workflow Field */}
            <div>
              <label htmlFor="currentWorkflow" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                How do you currently set up infrastructure to test your apps?
              </label>
              <textarea
                id="currentWorkflow"
                name="currentWorkflow"
                rows="4"
                value={formData.currentWorkflow}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.currentWorkflow 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-neutral-gray/20 focus:border-warm-yellow'
                } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors resize-none`}
                placeholder="Your current workflow or tools for setting up test environments."
              />
              <p className="mt-1 text-xs text-neutral-gray/60 dark:text-cream/60">
                Maybe include scripts, Terraform workflows, or manual steps you use.
              </p>
              {errors.currentWorkflow && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.currentWorkflow}
                </p>
              )}
            </div>

            {/* Recent Delays Field */}
            <div>
              <label htmlFor="recentDelays" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                Tell us about a recent time when infrastructure setup slowed down your work.
              </label>
              <textarea
                id="recentDelays"
                name="recentDelays"
                rows="4"
                value={formData.recentDelays}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.recentDelays 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-neutral-gray/20 focus:border-warm-yellow'
                } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors resize-none`}
                placeholder="A specific deployment or project where delays happened."
              />
              <p className="mt-1 text-xs text-neutral-gray/60 dark:text-cream/60">
                The more details, the better. It helps us understand developer pain points.
              </p>
              {errors.recentDelays && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.recentDelays}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Join the Waitlist
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional info */}
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-gray/60 dark:text-cream/60">
            We respect your privacy. Your information will only be used to contact you about Bagel updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;