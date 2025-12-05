'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  
  // 1. State to store the user's input
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Study in UK', // Default value
    query: ''
  });

  // 2. State to track errors (if any)
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  // 3. Handle Input Changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing again
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // 4. Validation Logic
  const validate = () => {
    let isValid = true;
    let newErrors = { name: '', phone: '' };

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
      isValid = false;
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
      isValid = false;
    }

    // Phone Validation (Simple 10-digit check)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      // replace(/\D/g, '') removes spaces/dashes if user types them
      newErrors.phone = 'Please enter a valid 10-digit number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 5. Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Stop page reload
    
    if (validate()) {
      // SUCCESS!
      alert(`Success! We will contact ${formData.name} at ${formData.phone}`);
      // TODO: In Phase 3, we will send this to Supabase instead of alert()
      onClose();
      // Reset form
      setFormData({ name: '', phone: '', interest: 'Study in UK', query: '' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#002D62]/60 backdrop-blur-sm z-[9998]"
          />

          {/* MODAL BOX */}
          <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white/95 w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/20 pointer-events-auto relative"
            >
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-[#002D62] mb-2">
                  Start Your Journey
                </h3>
                <p className="text-sm text-gray-500">
                  Fill in the details below, and our experts will get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* NAME FIELD */}
                <div>
                  <label className="block text-xs font-bold text-[#002D62] uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    // Dynamic styling: Red border if error
                    className={`w-full border-b-2 bg-transparent py-2 px-1 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500 placeholder-red-300' : 'border-gray-200 focus:border-[#FF8C00]'
                    }`}
                  />
                  {/* Error Message */}
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* PHONE FIELD */}
                <div>
                  <label className="block text-xs font-bold text-[#002D62] uppercase tracking-wider mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9999999999"
                    className={`w-full border-b-2 bg-transparent py-2 px-1 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 placeholder-red-300' : 'border-gray-200 focus:border-[#FF8C00]'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* INTEREST FIELD */}
                <div>
                  <label className="block text-xs font-bold text-[#002D62] uppercase tracking-wider mb-1">Interested In</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2 px-1 focus:border-[#FF8C00] focus:outline-none cursor-pointer"
                  >
                    <option>Study in UK</option>
                    <option>Study in USA</option>
                    <option>Study in Canada</option>
                    <option>Study in Australia</option>
                    <option>Study in Germany</option>
                    <option>Study in Ireland</option>
                    <option>IELTS Coaching</option>
                    <option>Other Services</option>
                  </select>
                </div>

                {/* QUERY FIELD (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-[#002D62] uppercase tracking-wider mb-1">Your Query (Optional)</label>
                  <textarea 
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Tell us about your requirements..."
                    className="w-full border-b-2 border-gray-200 bg-transparent py-2 px-1 focus:border-[#FF8C00] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#002D62] text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#FF8C00] transition-colors shadow-lg mt-2">
                  Request Call Back
                </button>

              </form>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}