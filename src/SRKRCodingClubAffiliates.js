import React, { useState, useEffect } from 'react';
import { Check, Upload, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Sun, Moon } from 'lucide-react';

export default function SRKRCodingClubAffiliates() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    yearOfStudy: '',
    technicalSkills: '',
    motivation: '',
    resume: null,
    additionalDocs: null
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Simplified theme toggle function
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      {/* Modern Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  SRKR <span className="text-orange-500">&lt;CODING CLUB&gt;</span>
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:block">
                <div className="flex items-center space-x-1">
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Home</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Team</a>
                  <a href="#" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium">Events</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Resources</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Projects</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Blog</a>
                  <a href="#" className="px-4 py-2 text-orange-500 hover:text-orange-600 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-200 text-sm font-medium">Affiliates</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Alumni</a>
                  <a href="#" className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 text-sm font-medium">Contact</a>
                </div>
              </nav>
              
              {/* Simple Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Modern Design */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Join Our Community
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Become an
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Affiliate
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join SRKR Coding Club as an affiliate and be a part of our growing community of tech 
            enthusiasts, innovators, and problem solvers. Unlock exclusive opportunities and accelerate your tech journey.
          </p>
        </div>

        {/* Benefits Section with Modern Cards */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Exclusive Events Access</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Get priority access to all SRKR Coding Club events, workshops, hackathons, and tech meetups.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Networking Hub</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect with industry professionals, mentors, and like-minded tech enthusiasts from across the globe.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Learning Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Access exclusive tutorials, courses, and learning materials curated by industry experts.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mentorship Programs</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Get personalized guidance from experienced mentors to accelerate your career growth.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Project Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Collaborate on innovative projects and build an impressive portfolio with real-world impact.
              </p>
            </div>
            
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-700">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recognition & Certificates</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Earn certificates and recognition for your contributions to the tech community.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form with Modern Design */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready to Join?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Fill out the form below to start your journey with SRKR Coding Club
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="college" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      College/Institution
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="Enter your college name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select your department</option>
                      <option value="cse">Computer Science & Engineering</option>
                      <option value="ece">Electronics & Communication</option>
                      <option value="eee">Electrical & Electronics</option>
                      <option value="mech">Mechanical Engineering</option>
                      <option value="civil">Civil Engineering</option>
                      <option value="it">Information Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Year of Study
                    </label>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select your year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="graduate">Graduate</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="technicalSkills" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Primary Technical Skill
                    </label>
                    <select
                      id="technicalSkills"
                      name="technicalSkills"
                      value={formData.technicalSkills}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select your primary skill</option>
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="data-science">Data Science</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Why do you want to join SRKR Coding Club?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us why you want to join and what you hope to achieve"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Upload Resume (Optional)
                  </label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl bg-gray-50 dark:bg-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors duration-200">
                    <div className="space-y-2 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                        >
                          <span>Choose File</span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => handleFileChange(e, 'resume')}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formData.resume ? formData.resume.name : 'No file chosen'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Accepted formats: PDF, DOCX (Max size: 2MB)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalDocs" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Upload Additional Documents (Optional)
                  </label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl bg-gray-50 dark:bg-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-colors duration-200">
                    <div className="space-y-2 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="additionalDocs"
                          className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
                        >
                          <span>Choose Files</span>
                          <input
                            id="additionalDocs"
                            name="additionalDocs"
                            type="file"
                            className="sr-only"
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.png"
                            onChange={(e) => handleFileChange(e, 'additionalDocs')}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formData.additionalDocs ? formData.additionalDocs.name : 'No files chosen'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Upload certificates, project reports, or any other relevant documents. 
                        Accepted formats: PDF, DOCX, JPG, PNG (Max size: 5MB)
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section with Modern Design */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Have Questions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              If you have any questions about the affiliation process or need assistance, feel free to 
              reach out to us. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <Mail className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3" />
                <a href="mailto:affiliates@srkrcodingclub.org" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium">
                  affiliates@srkrcodingclub.org
                </a>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <Phone className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3" />
                <a href="tel:+911234567890" className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium">
                  +91 1234567890
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white dark:bg-gray-800 py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  SRKR <span className="text-orange-500">&lt;CODING CLUB&gt;</span>
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">Learn - Build - Innovate</p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                  <span>SRKR Engineering College, Bhimavaram</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-orange-500" />
                  <span>contact@srkrcodingclub.org</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-orange-500" />
                  <span>+91 1234567890</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors duration-200" />
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors duration-200" />
                <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors duration-200" />
                <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors duration-200" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Team</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Events</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Resources</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Projects</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Affiliates</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Alumni</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Events</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">HackOverflow</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">IconCoderZ</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">CodeQuest</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Code BattleGround</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Hridayam</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Resources</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Tutorials</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Workshops</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Learning Paths</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Code Snippets</a></li>
                <li><a href="#" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200">Interview Prep</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 SRKR Coding Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}