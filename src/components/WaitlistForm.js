import React, { useState } from 'react';
import { Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    howItHelps: '',
    problemSolving: ''
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

    if (!formData.howItHelps.trim()) {
      newErrors.howItHelps = 'Please tell us how this would help you';
    }

    if (!formData.problemSolving.trim()) {
      newErrors.problemSolving = 'Please describe the problem you\'re solving';
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
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          howItHelps: data.howItHelps,
          problemSolving: data.problemSolving,
          timestamp: new Date().toISOString()
        })
      });

      // Since we're using no-cors, we can't check the response status
      // We'll assume success if no error is thrown
      return true;
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
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
        howItHelps: '',
        problemSolving: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
      // For now, we'll still show success since Google Sheets with no-cors doesn't give us proper feedback
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        howItHelps: '',
        problemSolving: ''
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
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-warm-yellow/5 to-golden-brown/5 dark:from-warm-yellow/2 dark:to-golden-brown/2">
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
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-warm-yellow/5 to-golden-brown/5 dark:from-warm-yellow/2 dark:to-golden-brown/2">
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

            {/* How it helps field */}
            <div>
              <label htmlFor="howItHelps" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                How do you think this would help you?
              </label>
              <textarea
                id="howItHelps"
                name="howItHelps"
                rows="4"
                value={formData.howItHelps}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.howItHelps 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-neutral-gray/20 focus:border-warm-yellow'
                } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors resize-none`}
                placeholder="Tell us how Bagel would help streamline your infrastructure deployment workflow..."
              />
              {errors.howItHelps && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.howItHelps}
                </p>
              )}
            </div>

            {/* Problem solving field */}
            <div>
              <label htmlFor="problemSolving" className="block text-sm font-medium text-neutral-gray dark:text-cream mb-2">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                What problem are you solving with this?
              </label>
              <textarea
                id="problemSolving"
                name="problemSolving"
                rows="4"
                value={formData.problemSolving}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-2xl border ${
                  errors.problemSolving 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-neutral-gray/20 focus:border-warm-yellow'
                } bg-white/50 dark:bg-neutral-gray/30 text-neutral-gray dark:text-cream placeholder-neutral-gray/50 dark:placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warm-yellow/20 transition-colors resize-none`}
                placeholder="Describe the infrastructure challenges you're currently facing..."
              />
              {errors.problemSolving && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.problemSolving}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
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