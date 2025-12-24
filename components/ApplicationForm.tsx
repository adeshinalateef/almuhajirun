import React, { useState } from 'react';

const programs = [
  'Quran Memorization (Hifz)',
  'Tajweed and Quranic Recitation',
  'Islamic Studies (Fiqh, Tafsir, Hadith)',
  'Arabic Language Studies',
];

const rules = [
  'Students must attend all classes regularly and punctually.',
  'Respect for teachers, staff, and fellow students is mandatory.',
  'Islamic dress code must be observed at all times within the institute premises.',
  'All fees must be paid on time.',
  'Mobile phones are not allowed during class hours.',
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: '',
    guardianName: '',
    guardianPhone: '',
    guardianRelationship: '',
    program: '',
    previousEducation: '',
    agreeToRules: false,
    paymentReceipt: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, paymentReceipt: e.target.files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server.
    // For now, we'll just log it to the console.
    console.log(formData);
    alert('Thank you for your application! We will get back to you soon.');
  };

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Madrasah Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 shadow-lg rounded-lg">
          
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="fullName" id="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="dob" id="dob" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select name="gender" id="gender" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea name="address" id="address" rows={3} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
                </div>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="guardianName" id="guardianName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" name="guardianPhone" id="guardianPhone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
               <div>
                <label htmlFor="guardianRelationship" className="block text-sm font-medium text-gray-700">Relationship to Applicant</label>
                <input type="text" name="guardianRelationship" id="guardianRelationship" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Program Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Program Information</h3>
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700">Select a Program</label>
              <select name="program" id="program" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                <option value="">Choose a program...</option>
                {programs.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
             <div>
                <label htmlFor="previousEducation" className="block text-sm font-medium text-gray-700">Previous Islamic Education (if any)</label>
                <textarea name="previousEducation" id="previousEducation" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}></textarea>
            </div>
          </div>

          {/* Rules and Regulations */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Rules & Regulations</h3>
            <div className="prose max-w-none text-gray-600 border border-gray-200 rounded-md p-4">
              <ul className="space-y-2">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                    <span className="ml-3">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="agreeToRules" name="agreeToRules" type="checkbox" required className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" onChange={handleChange} />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToRules" className="font-medium text-gray-700">I have read and agree to the Rules & Regulations.</label>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Application Fee Payment</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                         <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.01-1.742 3.01H4.42c-1.53 0-2.493-1.676-1.743-3.01l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                            An application fee of <strong>NGN 5,000</strong> is required.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-gray-600">
                <p>Please pay to the account below:</p>
                <p className="font-semibold">Account Name: Al-Muhaajirun Institute</p>
                <p className="font-semibold">Account Number: 1234567890 (OPay)</p>
            </div>
             <div>
                <label htmlFor="paymentReceipt" className="block text-sm font-medium text-gray-700">Upload Proof of Payment</label>
                <input type="file" name="paymentReceipt" id="paymentReceipt" required className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" onChange={handleFileChange} />
             </div>
          </div>
          
          <div className="text-center">
            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
