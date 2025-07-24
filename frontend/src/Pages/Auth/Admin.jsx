// // // // import React, { useState } from "react";
// // // // import axios from "axios";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { useAuth } from "./AuthContext"; 

// // // // const Login = () => {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const { login } = useAuth(); // 👈 From your AuthContext

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     setError("");

// // // //     try {
// // // //       const response = await axios.post("http://localhost:8080/login", {
// // // //         email,
// // // //         password,
// // // //       });

// // // //       console.log(response);

// // // //       if (response.status === 200) {
// // // //         // const token = response.data.token;
// // // //         const role = response.data.role; // 👈 Get role from response
// // // //         const userid=response.data.user_id
// // // //         alert(role)
// // // //         if ( !role) {
// // // //           throw new Error("Invalid login response: missing token or role");
// // // //         }

// // // //         login(null, { email, role }); // Call AuthContext login to save token and user info
        
// // // //         if (role==='faculty'){
// // // //         login(null, { email, role,userid });
// // // //         sessionStorage.setItem('userid',userid)
// // // //         }
       
// // // //         alert("Login successful!");

// // // //         // Navigate based on role
// // // //         if (role === "admin") {
// // // //           navigate("/admin");
// // // //         } else {
// // // //           navigate("/faculty");
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       setLoading(false);
// // // //       if (err.response) {
// // // //         setError(err.response.data.error || "An error occurred. Please try again.");
// // // //       } else {
// // // //         setError("Network error. Please try again later.");
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // // //       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
// // // //         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

// // // //         {error && <p className="text-red-600 text-center mb-4">{error}</p>}

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="mb-4">
// // // //             <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
// // // //               Email
// // // //             </label>
// // // //             <input
// // // //               type="email"
// // // //               id="email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="mb-4">
// // // //             <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
// // // //               Password
// // // //             </label>
// // // //             <input
// // // //               type="password"
// // // //               id="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="mb-6">
// // // //             <button
// // // //               type="submit"
// // // //               className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
// // // //               disabled={loading}
// // // //             >
// // // //               {loading ? "Logging in..." : "Login"}
// // // //             </button>
// // // //           </div>

// // // //           <div className="text-center">
// // // //             <p className="text-sm text-gray-600">
// // // //               Don't have an account?{" "}
// // // //               <a href="/signup" className="text-blue-500 hover:underline">
// // // //                 Sign up here
// // // //               </a>
// // // //             </p>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;
// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // import { useAuth } from "./AuthContext"; 

// // // const Login = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const { login } = useAuth(); // 👈 From your AuthContext

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setError("");

// // //     try {
// // //       const response = await axios.post("http://localhost:8080/login", {
// // //         email,
// // //         password,
// // //       });

// // //       console.log(response);

// // //       if (response.status === 200) {
// // //         // const token = response.data.token;
// // //         const role = response.data.role; // 👈 Get role from response
// // //         const userid=response.data.user_id
// // //         if ( !role) {
// // //           throw new Error("Invalid login response: missing token or role");
// // //         }

// // //         login(null, { email, role }); // Call AuthContext login to save token and user info
        
// // //         if (role==='faculty'){
// // //         login(null, { email, role,userid });
// // //         sessionStorage.setItem('userid',userid)
// // //         }
       
// // //         alert("Login successful!");

// // //         // Navigate based on role
// // //         if (role === "admin") {
// // //           navigate("/admin");
// // //         } else {
// // //           navigate("/faculty");
// // //         }
// // //       }
// // //     } catch (err) {
// // //       setLoading(false);
// // //       if (err.response) {
// // //         setError(err.response.data.error || "An error occurred. Please try again.");
// // //       } else {
// // //         setError("Network error. Please try again later.");
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
// // //       <div className="w-full max-w-md">
// // //         {/* Main login card */}
// // //         <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
// // //           {/* Header */}
// // //           <div className="text-center mb-8">
// // //             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
// // //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //               </svg>
// // //             </div>
// // //             <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
// // //               Welcome Back
// // //             </h2>
// // //             <p className="text-gray-500 text-sm">Please sign in to your account</p>
// // //           </div>

// // //           {/* Error message */}
// // //           {error && (
// // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg animate-pulse">
// // //               <p className="text-red-700 text-sm font-medium">{error}</p>
// // //             </div>
// // //           )}

// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             {/* Email field */}
// // //             <div className="group">
// // //               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
// // //                 Email Address
// // //               </label>
// // //               <div className="relative">
// // //                 <input
// // //                   type="email"
// // //                   id="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400"
// // //                   placeholder="Enter your email"
// // //                   required
// // //                 />
// // //                 <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// // //                 </svg>
// // //               </div>
// // //             </div>

// // //             {/* Password field */}
// // //             <div className="group">
// // //               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
// // //                 Password
// // //               </label>
// // //               <div className="relative">
// // //                 <input
// // //                   type="password"
// // //                   id="password"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400"
// // //                   placeholder="Enter your password"
// // //                   required
// // //                 />
// // //                 <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// // //                 </svg>
// // //               </div>
// // //             </div>

// // //             {/* Submit button */}
// // //             <div className="pt-2">
// // //               <button
// // //                 type="submit"
// // //                 className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? (
// // //                   <div className="flex items-center justify-center space-x-2">
// // //                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
// // //                     <span>Signing in...</span>
// // //                   </div>
// // //                 ) : (
// // //                   "Sign In"
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>

// // //           {/* Footer */}
// // //           <div className="mt-8 text-center">
// // //             <p className="text-sm text-gray-500">
// // //               Don't have an account?{" "}
// // //               <a 
// // //                 href="/signup" 
// // //                 className="font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-200 hover:underline"
// // //               >
// // //                 Create one here
// // //               </a>
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Decorative elements */}
// // //         <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "./AuthContext"; 

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const { login } = useAuth(); // 👈 From your AuthContext

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await axios.post("http://localhost:8080/login", {
// //         email,
// //         password,
// //       });

// //       console.log(response);

// //       if (response.status === 200) {
// //         // const token = response.data.token;
// //         const role = response.data.role; // 👈 Get role from response
// //         const userid=response.data.user_id
  
// //         if ( !role) {
// //           throw new Error("Invalid login response: missing token or role");
// //         }

// //         login(null, { email, role }); // Call AuthContext login to save token and user info
        
// //         if (role==='faculty'){
// //         login(null, { email, role,userid });
// //         sessionStorage.setItem('userid',userid)
// //         }
       
// //         alert("Login successful!");

// //         // Navigate based on role
// //         if (role === "admin") {
// //           navigate("/admin");
// //         } else {
// //           navigate("/faculty");
// //         }
// //       }
// //     } catch (err) {
// //       setLoading(false);
// //       if (err.response) {
// //         setError(err.response.data.error || "An error occurred. Please try again.");
// //       } else {
// //         setError("Network error. Please try again later.");
// //       }
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 relative overflow-hidden">
// //       {/* Decorative background elements */}
// //       <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
// //       <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-200/15 to-yellow-200/15 rounded-full blur-2xl"></div>
      
// //       <div className="w-full max-w-md">
// //         <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
          
// //           {/* Header Section */}
// //           <div className="text-center mb-8">
// //             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg transform transition-transform hover:rotate-12">
// //               <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //               </svg>
// //             </div>
// //             <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
// //               Welcome Back
// //             </h2>
// //             <p className="text-gray-500 text-sm">Please sign in to your account</p>
// //           </div>

// //           {/* Enhanced Error Display */}
// //           {error && (
// //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg shadow-sm animate-fadeIn">
// //               <div className="flex items-center">
// //                 <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                 </svg>
// //                 <p className="text-red-700 text-sm font-medium">{error}</p>
// //               </div>
// //             </div>
// //           )}

// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             {/* Enhanced Email Field */}
// //             <div className="group">
// //               <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
// //                 Email Address
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400 hover:border-gray-300"
// //                   placeholder="Enter your email"
// //                   required
// //                 />
// //                 <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Enhanced Password Field */}
// //             <div className="group">
// //               <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
// //                 Password
// //               </label>
// //               <div className="relative">
// //                 <input
// //                   type="password"
// //                   id="password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400 hover:border-gray-300"
// //                   placeholder="Enter your password"
// //                   required
// //                 />
// //                 <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
// //                 </svg>
// //               </div>
// //             </div>

// //             {/* Enhanced Submit Button */}
// //             <div className="pt-2">
// //               <button
// //                 type="submit"
// //                 className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
// //                 disabled={loading}
// //               >
// //                 {loading ? (
// //                   <div className="flex items-center justify-center space-x-2">
// //                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
// //                     <span>Signing in...</span>
// //                   </div>
// //                 ) : (
// //                   <div className="flex items-center justify-center space-x-2">
// //                     <span>Sign In</span>
// //                     <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
// //                     </svg>
// //                   </div>
// //                 )}
// //               </button>
// //             </div>
// //           </form>

// //           {/* Enhanced Footer */}
// //           <div className="mt-8 text-center">
// //             <div className="relative">
// //               <div className="absolute inset-0 flex items-center">
// //                 <div className="w-full border-t border-gray-200"></div>
// //               </div>
// //               <div className="relative flex justify-center text-sm">
// //                 <span className="px-4 bg-white text-gray-500">or</span>
// //               </div>
// //             </div>
// //             <p className="text-sm text-gray-500 mt-4">
// //               Don't have an account?{" "}
// //               <a 
// //                 href="/signup" 
// //                 className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:underline transform hover:scale-105 inline-block"
// //               >
// //                 Create one here
// //               </a>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(-10px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }
        
// //         .animate-fadeIn {
// //           animation: fadeIn 0.3s ease-out;
// //         }
        
// //         /* Custom shadow for enhanced depth */
// //         .shadow-3xl {
// //           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
// //         }
        
// //         /* Glassmorphism effect enhancement */
// //         .backdrop-blur-lg {
// //           backdrop-filter: blur(16px);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronRight, Plus, Edit, Trash2, Eye, Check, X, Users, Trophy, Calendar, BookOpen, Target, Award, User, Settings, Home } from 'lucide-react';

// const API_BASE_URL = 'https://aseam.acm.org/LMS/roadmaps/roadmap.php'; // Adjust this to your PHP backend URL

// const Login = () => {
//   const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'student');
//   const [userId] = useState(() => localStorage.getItem('userId') || '1');
//   const [userName] = useState(() => localStorage.getItem('userName') || 'Test User');
//   const [currentView, setCurrentView] = useState('dashboard');
//   const [roadmaps, setRoadmaps] = useState([]);
//   const [selectedRoadmap, setSelectedRoadmap] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // API Functions
//   // const apiCall = async (endpoint, options = {}) => {
//   //   try {
//   //     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         ...options.headers,
//   //       },
//   //       ...options,
//   //     });
//   //     const data = await response.json();
//   //     if (!response.ok) throw new Error(data.error || 'API Error');
//   //     return data;
//   //   } catch (err) {
//   //     throw new Error(err.message);
//   //   }
//   // };
 
//   const apiCall = async (endpoint, options = {}) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           ...options.headers,
//         },
//         ...options,
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || 'API Error');
//       return data;
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   };
  

//   const fetchRoadmaps = async () => {
//     setLoading(true);
//     try {
//       const data = await apiCall('/roadmaps');
//       setRoadmaps(data.roadmaps || []);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRoadmapDetails = async (id) => {
//     setLoading(true);
//     try {
//       const data = await apiCall(`/roadmap?roadmap_id=${id}&user_id=1&is_admin=1`);
//       setSelectedRoadmap(data.roadmap);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (currentView === 'dashboard') {
//       fetchRoadmaps();
//     }
//   }, [currentView]);

//   // Role switcher component
//   const RoleSwitcher = () => (
//     <div className="mb-6 p-4 bg-white rounded-lg shadow">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <User className="h-6 w-6 text-gray-600" />
//           <div>
//             <p className="font-semibold">{userName}</p>
//             <p className="text-sm text-gray-600">Role: {userRole}</p>
//           </div>
//         </div>
//         <div className="flex space-x-2">
//           <button
//             onClick={() => {
//               setUserRole('student');
//               localStorage.setItem('userRole', 'student');
//               setCurrentView('dashboard');
//             }}
//             className={`px-4 py-2 rounded ${userRole === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//           >
//             Student
//           </button>
//           <button
//             onClick={() => {
//               setUserRole('admin');
//               localStorage.setItem('userRole', 'admin');
//               setCurrentView('dashboard');
//             }}
//             className={`px-4 py-2 rounded ${userRole === 'admin' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//           >
//             Admin
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Student Components
//   const StudentDashboard = () => {
//     const [leaderboard, setLeaderboard] = useState([]);

//     const fetchLeaderboard = async (roadmapId) => {
//       try {
//         const data = await apiCall(`/roadmap/${roadmapId}/leaderboard`);
//         setLeaderboard(data.leaderboard || []);
//       } catch (err) {
//         console.error('Failed to fetch leaderboard:', err);
//       }
//     };

//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-gray-900">Available Roadmaps</h2>
//           <BookOpen className="h-8 w-8 text-blue-600" />
//         </div>
        
//         {loading ? (
//           <div className="text-center py-8">Loading...</div>
//         ) : (
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {roadmaps.map((roadmap) => (
//               <div key={roadmap.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">{roadmap.title}</h3>
//                 <p className="text-gray-600 mb-4">{roadmap.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-500">
//                     Created: {new Date(roadmap.created_at).toLocaleDateString()}
//                   </span>
//                   <button
//                     onClick={() => {
//                       fetchRoadmapDetails(roadmap.id);
//                       setCurrentView('roadmap-detail');
//                     }}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                   >
//                     View Roadmap
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const RoadmapDetail = () => {
//     const [submissionText, setSubmissionText] = useState('');
//     const [submissionFile, setSubmissionFile] = useState('');
//     const [submittingEvent, setSubmittingEvent] = useState(null);

//     const submitEvent = async (eventId) => {
//       if (!submissionText.trim() && !submissionFile.trim()) {
//         setError('Please provide submission text or file');
//         return;
//       }

//       setLoading(true);
//       try {
//         await apiCall(`/roadmap/${selectedRoadmap.id}/event/${eventId}/submit`, {
//           method: 'POST',
//           body: JSON.stringify({
//             submission_text: submissionText,
//             submission_file: submissionFile,
//           }),
//         });
//         setSuccess('Submission successful!');
//         setSubmissionText('');
//         setSubmissionFile('');
//         setSubmittingEvent(null);
//         fetchRoadmapDetails(selectedRoadmap.id);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (!selectedRoadmap) return <div>Loading...</div>;

//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => setCurrentView('dashboard')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             ← Back to Roadmaps
//           </button>
//           <div className="text-right">
//             <p className="text-sm text-gray-600">Progress: {selectedRoadmap.progress?.completion_percentage || 0}%</p>
//             <p className="text-sm text-gray-600">Points: {selectedRoadmap.progress?.total_points || 0}</p>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h1 className="text-3xl font-bold mb-4">{selectedRoadmap.title}</h1>
//           <p className="text-gray-600 mb-6">{selectedRoadmap.description}</p>
          
//           <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
//             <div
//               className="bg-blue-600 h-2 rounded-full"
//               style={{ width: `${selectedRoadmap.progress?.completion_percentage || 0}%` }}
//             ></div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {selectedRoadmap.events?.map((event, index) => (
//             <div
//               key={event.id}
//               className={`p-6 rounded-lg border ${
//                 event.is_completed ? 'bg-green-50 border-green-200' :
//                 event.is_pending ? 'bg-yellow-50 border-yellow-200' :
//                 event.is_rejected ? 'bg-red-50 border-red-200' :
//                 event.unlocked ? 'bg-blue-50 border-blue-200' :
//                 'bg-gray-50 border-gray-200'
//               }`}
//             >
//               <div className="flex items-start justify-between">
//                 <div className="flex-1">
//                   <div className="flex items-center space-x-3 mb-2">
//                     <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">
//                       Step {event.event_order}
//                     </span>
//                     <span className={`text-sm px-2 py-1 rounded ${
//                       event.status_color === 'green' ? 'bg-green-100 text-green-800' :
//                       event.status_color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
//                       event.status_color === 'red' ? 'bg-red-100 text-red-800' :
//                       event.status_color === 'blue' ? 'bg-blue-100 text-blue-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {event.status_text}
//                     </span>
//                     <span className="text-sm text-gray-600">{event.points} points</span>
//                   </div>
                  
//                   <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
//                   <p className="text-gray-600 mb-4">{event.description}</p>
                  
//                   {event.submission_text && (
//                     <div className="mb-4 p-3 bg-gray-100 rounded">
//                       <p className="text-sm font-medium text-gray-700 mb-1">Your Submission:</p>
//                       <p className="text-sm text-gray-600">{event.submission_text}</p>
//                     </div>
//                   )}
//                 </div>

//                 <div className="ml-4">
//                   {event.is_completed && <Check className="h-6 w-6 text-green-600" />}
//                   {event.is_pending && <Calendar className="h-6 w-6 text-yellow-600" />}
//                   {event.is_rejected && <X className="h-6 w-6 text-red-600" />}
//                   {!event.unlocked && <div className="w-6 h-6 bg-gray-300 rounded"></div>}
//                 </div>
//               </div>

//               {event.can_submit && (
//                 <div className="mt-4 pt-4 border-t">
//                   {submittingEvent === event.id ? (
//                     <div className="space-y-4">
//                       <textarea
//                         placeholder="Enter your submission..."
//                         value={submissionText}
//                         onChange={(e) => setSubmissionText(e.target.value)}
//                         className="w-full p-3 border rounded-lg"
//                         rows="4"
//                       />
//                       <input
//                         type="text"
//                         placeholder="File URL (optional)"
//                         value={submissionFile}
//                         onChange={(e) => setSubmissionFile(e.target.value)}
//                         className="w-full p-3 border rounded-lg"
//                       />
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={() => submitEvent(event.id)}
//                           disabled={loading}
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
//                         >
//                           Submit
//                         </button>
//                         <button
//                           onClick={() => setSubmittingEvent(null)}
//                           className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <button
//                       onClick={() => setSubmittingEvent(event.id)}
//                       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                     >
//                       {event.is_rejected ? 'Resubmit' : 'Submit'}
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   // Admin Components
//   const AdminDashboard = () => {
//     const [showCreateForm, setShowCreateForm] = useState(false);
//     const [pendingSubmissions, setPendingSubmissions] = useState([]);

//     const fetchPendingSubmissions = async () => {
//       try {
//         const data = await apiCall('/admin/submissions');
//         setPendingSubmissions(data.submissions || []);
//       } catch (err) {
//         console.error('Failed to fetch submissions:', err);
//       }
//     };

//     useEffect(() => {
//       fetchPendingSubmissions();
//     }, []);

//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
//           <button
//             onClick={() => setShowCreateForm(true)}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
//           >
//             <Plus className="h-4 w-4" />
//             <span>Create Roadmap</span>
//           </button>
//         </div>

//         {showCreateForm && (
//           <CreateRoadmapForm
//             onClose={() => setShowCreateForm(false)}
//             onSuccess={() => {
//               setShowCreateForm(false);
//               fetchRoadmaps();
//             }}
//           />
//         )}

//         <div className="grid gap-6 md:grid-cols-2">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-lg font-semibold mb-4 flex items-center">
//               <BookOpen className="h-5 w-5 mr-2" />
//               Roadmaps ({roadmaps.length})
//             </h3>
//             <div className="space-y-2">
//               {roadmaps.slice(0, 5).map((roadmap) => (
//                 <div key={roadmap.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
//                   <span className="font-medium">{roadmap.title}</span>
//                   <button
//                     onClick={() => {
//                       fetchRoadmapDetails(roadmap.id);
//                       setCurrentView('admin-roadmap');
//                     }}
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     <Eye className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-lg font-semibold mb-4 flex items-center">
//               <Calendar className="h-5 w-5 mr-2" />
//               Pending Submissions ({pendingSubmissions.length})
//             </h3>
//             <div className="space-y-2">
//               {pendingSubmissions.slice(0, 5).map((submission) => (
//                 <div key={submission.id} className="p-2 bg-yellow-50 rounded">
//                   <p className="font-medium text-sm">{submission.student_name}</p>
//                   <p className="text-xs text-gray-600">{submission.event_title}</p>
//                   <button
//                     onClick={() => setCurrentView('admin-submissions')}
//                     className="text-xs text-blue-600 hover:text-blue-800"
//                   >
//                     Review →
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CreateRoadmapForm = ({ onClose, onSuccess }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [sigId, setSigId] = useState('');
//     const [sigName, setSigName] = useState('');

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       try {
//         await apiCall('/roadmap/create', {
//           method: 'POST',
//           body: JSON.stringify({
//             title,
//             description,
//             sig_id: sigId,
//             sig_name: sigName,
//             userid: userId,
//           }),
//         });
//         setSuccess('Roadmap created successfully!');
//         onSuccess();
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg p-6 w-full max-w-md">
//           <h3 className="text-lg font-semibold mb-4">Create New Roadmap</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Roadmap Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               required
//             />
//             <textarea
//               placeholder="Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               rows="3"
//             />
//             <input
//               type="text"
//               placeholder="SIG ID"
//               value={sigId}
//               onChange={(e) => setSigId(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//             />
//             <input
//               type="text"
//               placeholder="SIG Name"
//               value={sigName}
//               onChange={(e) => setSigName(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//             />
//             <div className="flex space-x-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//               >
//                 Create
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   const AdminRoadmapView = () => {
//     const [showEventForm, setShowEventForm] = useState(false);

//     if (!selectedRoadmap) return <div>Loading...</div>;

//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => setCurrentView('dashboard')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             ← Back to Dashboard
//           </button>
//           <button
//             onClick={() => setShowEventForm(true)}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
//           >
//             <Plus className="h-4 w-4" />
//             <span>Add Event</span>
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h1 className="text-3xl font-bold mb-4">{selectedRoadmap.title}</h1>
//           <p className="text-gray-600 mb-4">{selectedRoadmap.description}</p>
//           {selectedRoadmap.sig_name && (
//             <p className="text-sm text-gray-500">SIG: {selectedRoadmap.sig_name}</p>
//           )}
//         </div>

//         {showEventForm && (
//           <AddEventForm
//             roadmapId={selectedRoadmap.id}
//             onClose={() => setShowEventForm(false)}
//             onSuccess={() => {
//               setShowEventForm(false);
//               fetchRoadmapDetails(selectedRoadmap.id);
//             }}
//           />
//         )}

//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold">Events</h2>
//           {selectedRoadmap.events?.map((event) => (
//             <div key={event.id} className="bg-white p-4 rounded-lg shadow border">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="font-semibold">{event.title}</h3>
//                   <p className="text-gray-600 text-sm mb-2">{event.description}</p>
//                   <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
//                     {event.points} points
//                   </span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-500">Order: {event.event_order}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const AddEventForm = ({ roadmapId, onClose, onSuccess }) => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [points, setPoints] = useState('');

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true);
//       try {
//         await apiCall('/roadmap/event', {
//           method: 'POST',
//           body: JSON.stringify({
//             roadmap_id: roadmapId,
//             title,
//             description,
//             points: parseInt(points) || 0,
//           }),
//         });
//         setSuccess('Event added successfully!');
//         onSuccess();
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg p-6 w-full max-w-md">
//           <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Event Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               required
//             />
//             <textarea
//               placeholder="Event Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               rows="3"
//             />
//             <input
//               type="number"
//               placeholder="Points"
//               value={points}
//               onChange={(e) => setPoints(e.target.value)}
//               className="w-full p-3 border rounded-lg"
//               min="0"
//             />
//             <div className="flex space-x-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//               >
//                 Add Event
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   const AdminSubmissions = () => {
//     const [submissions, setSubmissions] = useState([]);

//     const fetchSubmissions = async () => {
//       try {
//         const data = await apiCall('/admin/submissions');
//         setSubmissions(data.submissions || []);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     const reviewSubmission = async (roadmapId, eventId, studentId, status) => {
//       try {
//         await apiCall(`/roadmap/review`, {
//           method: 'POST',
//           body: JSON.stringify({
//             roadmap_id:roadmapId,
//             event_id:eventId,
//             student_id: studentId,
//             status:status,
//             currentuser:1,

//           }),
//         });
//         setSuccess(`Submission ${status} successfully!`);
//         fetchSubmissions();
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     useEffect(() => {
//       fetchSubmissions();
//     }, []);

//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => setCurrentView('dashboard')}
//             className="text-blue-600 hover:text-blue-800"
//           >
//             ← Back to Dashboard
//           </button>
//           <h2 className="text-2xl font-bold">Pending Submissions</h2>
//         </div>

//         <div className="space-y-4">
//           {submissions.map((submission) => (
//             <div key={submission.id} className="bg-white p-6 rounded-lg shadow border">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="font-semibold text-lg">{submission.event_title}</h3>
//                   <p className="text-gray-600">{submission.roadmap_title}</p>
//                   <p className="text-sm text-gray-500">
//                     Student: {submission.student_name} | Points: {submission.points}
//                   </p>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {new Date(submission.submitted_at).toLocaleString()}
//                 </span>
//               </div>

//               {submission.submission_text && (
//                 <div className="mb-4 p-4 bg-gray-50 rounded">
//                   <p className="font-medium text-sm mb-2">Submission:</p>
//                   <p className="text-sm">{submission.submission_text}</p>
//                 </div>
//               )}

//               {submission.submission_file && (
//                 <div className="mb-4">
//                   <p className="font-medium text-sm mb-1">File:</p>
//                   <a
//                     href={submission.submission_file}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 text-sm"
//                   >
//                     View File
//                   </a>
//                 </div>
//               )}

//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => reviewSubmission(
//                     submission.roadmap_id,
//                     submission.event_id,
//                     submission.student_id,
//                     'approved'
//                   )}
//                   className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-1"
//                 >
//                   <Check className="h-4 w-4" />
//                   <span>Approve</span>
//                 </button>
//                 <button
//                   onClick={() => reviewSubmission(
//                     submission.roadmap_id,
//                     submission.event_id,
//                     submission.student_id,
//                     'rejected'
//                   )}
//                   className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-1"
//                 >
//                   <X className="h-4 w-4" />
//                   <span>Reject</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//           {submissions.length === 0 && (
//             <div className="text-center py-8 text-gray-500">
//               No pending submissions
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Main Navigation
//   const Navigation = () => (
//     <div className="bg-white shadow-sm border-b mb-6">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex space-x-8">
//           <button
//             onClick={() => setCurrentView('dashboard')}
//             className={`py-4 px-2 border-b-2 font-medium text-sm ${
//               currentView === 'dashboard'
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700'
//             }`}
//           >
//             <Home className="h-4 w-4 inline mr-2" />
//             Dashboard
//           </button>
          
//           {userRole === 'admin' && (
//             <button
//               onClick={() => setCurrentView('admin-submissions')}
//               className={`py-4 px-2 border-b-2 font-medium text-sm ${
//                 currentView === 'admin-submissions'
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               <Calendar className="h-4 w-4 inline mr-2" />
//               Submissions
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // Notification Messages
//   const Notifications = () => (
//     <>
//       {error && (
//         <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
//           <p className="text-red-800">{error}</p>
//           <button
//             onClick={() => setError('')}
//             className="text-red-600 hover:text-red-800 text-sm ml-2"
//           >
//             ×
//           </button>
//         </div>
//       )}
      
//       {success && (
//         <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
//           <p className="text-green-800">{success}</p>
//           <button
//             onClick={() => setSuccess('')}
//             className="text-green-600 hover:text-green-800 text-sm ml-2"
//           >
//             ×
//           </button>
//         </div>
//       )}
//     </>
//   );

//   // Render current view
//   const renderCurrentView = () => {
//     switch (currentView) {
//       case 'dashboard':
//         return userRole === 'admin' ? <AdminDashboard /> : <StudentDashboard />;
//       case 'roadmap-detail':
//         return <RoadmapDetail />;
//       case 'admin-roadmap':
//         return <AdminRoadmapView />;
//       case 'admin-submissions':
//         return <AdminSubmissions />;
//       default:
//         return userRole === 'admin' ? <AdminDashboard /> : <StudentDashboard />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <RoleSwitcher />
//         <Navigation />
//         <Notifications />
//         {renderCurrentView()}
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Plus, Edit, Trash2, Eye, Check, X, Users, Trophy, Calendar, BookOpen, Target, Award, User, Settings, Home, Clock, AlertTriangle } from 'lucide-react';

const API_BASE_URL = '';

const Admin = () => {
  const [userId] = useState('AM.SC.U4AIE23019');
  const [userName] = useState('Admin User');
  const [currentView, setCurrentView] = useState('dashboard');
  const [roadmaps, setRoadmaps] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // API Functions
  const apiCall = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'API Error');
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const fetchRoadmaps = async () => {
    setLoading(true);
    try {
      const data = await apiCall('/roadmaps');
      setRoadmaps(data.roadmaps || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRoadmapDetails = async (id) => {
    setLoading(true);
    try {
      const data = await apiCall(`/roadmap?roadmap_id=${id}&user_id=1&is_admin=1`);
      setSelectedRoadmap(data.roadmap);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentView === 'dashboard') {
      fetchRoadmaps();
    }
  }, [currentView]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleString();
  };

  // Get roadmap status color
  const getRoadmapStatusColor = (status) => {
    switch (status) {
      case 'not_started': return 'bg-yellow-100 text-yellow-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Admin Dashboard
  const AdminDashboard = () => {
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [pendingSubmissions, setPendingSubmissions] = useState([]);

    const fetchPendingSubmissions = async () => {
      try {
        const data = await apiCall('/admin/submissions');
        setPendingSubmissions(data.submissions || []);
      } catch (err) {
        console.error('Failed to fetch submissions:', err);
      }
    };

    useEffect(() => {
      fetchPendingSubmissions();
    }, []);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Create Roadmap</span>
          </button>
        </div>

        {showCreateForm && (
          <CreateRoadmapForm
            onClose={() => setShowCreateForm(false)}
            onSuccess={() => {
              setShowCreateForm(false);
              fetchRoadmaps();
            }}
          />
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Roadmaps ({roadmaps.length})
            </h3>
            <div className="space-y-2">
              {roadmaps.slice(0, 5).map((roadmap) => (
                <div key={roadmap.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{roadmap.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${getRoadmapStatusColor(roadmap.roadmap_status)}`}>
                        {roadmap.roadmap_status?.replace('_', ' ').toUpperCase() || 'ACTIVE'}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      <div>Start: {formatDate(roadmap.start_date)}</div>
                      <div>End: {formatDate(roadmap.end_date)}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      fetchRoadmapDetails(roadmap.id);
                      setCurrentView('admin-roadmap');
                    }}
                    className="text-blue-600 hover:text-blue-800 ml-2"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Pending Submissions ({pendingSubmissions.length})
            </h3>
            <div className="space-y-2">
              {pendingSubmissions.slice(0, 5).map((submission) => (
                <div key={submission.id} className="p-2 bg-yellow-50 rounded">
                  <p className="font-medium text-sm">{submission.student_name}</p>
                  <p className="text-xs text-gray-600">{submission.event_title}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {formatDate(submission.submitted_at)}
                    </span>
                    <button
                      onClick={() => setCurrentView('admin-submissions')}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      Review →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Create Roadmap Form with Deadline Support
  const CreateRoadmapForm = ({ onClose, onSuccess }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [sigId, setSigId] = useState('');
    const [sigName, setSigName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!startDate || !endDate) {
        setError('Start date and end date are required');
        return;
      }
      
      if (new Date(startDate) >= new Date(endDate)) {
        setError('End date must be after start date');
        return;
      }

      setLoading(true);
      try {
        await apiCall('/roadmap/create', {
          method: 'POST',
          body: JSON.stringify({
            title,
            description,
            sig_id: sigId,
            sig_name: sigName,
            userid: userId,
            start_date: startDate,
            end_date: endDate,
          }),
        });
        setSuccess('Roadmap created successfully!');
        onSuccess();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        {/* <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Create New Roadmap</h3>
-full p-3 border rounded-lg"
              rows="3"
            /> */}
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Create New Roadmap</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
             placeholder="Roadmap Title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg"
            required
            />
            <input
              type="text"
              placeholder="SIG ID"
              value={sigId}
              onChange={(e) => setSigId(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="SIG Name"
              value={sigName}
              onChange={(e) => setSigName(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
              <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
              <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Create
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Admin Roadmap View
  const AdminRoadmapView = () => {
    const [showEventForm, setShowEventForm] = useState(false);

    if (!selectedRoadmap) return <div>Loading...</div>;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Dashboard
          </button>
          <button
            onClick={() => setShowEventForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{selectedRoadmap.title}</h1>
              <p className="text-gray-600 mb-4">{selectedRoadmap.description}</p>
              {selectedRoadmap.sig_name && (
                <p className="text-sm text-gray-500 mb-2">SIG: {selectedRoadmap.sig_name}</p>
              )}
            </div>
            <span className={`px-3 py-1 rounded text-sm font-medium ${getRoadmapStatusColor(selectedRoadmap.roadmap_status)}`}>
              {selectedRoadmap.roadmap_status?.replace('_', ' ').toUpperCase() || 'ACTIVE'}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="font-medium">Start:</span>
              <span>{formatDate(selectedRoadmap.start_date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="font-medium">End:</span>
              <span>{formatDate(selectedRoadmap.end_date)}</span>
            </div>
          </div>
        </div>

        {showEventForm && (
          <AddEventForm
            roadmapId={selectedRoadmap.id}
            onClose={() => setShowEventForm(false)}
            onSuccess={() => {
              setShowEventForm(false);
              fetchRoadmapDetails(selectedRoadmap.id);
            }}
          />
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Events</h2>
          {selectedRoadmap.events?.map((event) => (
            <div key={event.id} className="bg-white p-4 rounded-lg shadow border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                      Step {event.event_order}
                    </span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {event.points} points
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Duration:</span>
                      <span>{event.duration_hours}h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">Penalty:</span>
                      <span>{event.penalty_percentage}%/day</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-red-500" />
                      <span className="font-medium">Max Penalty:</span>
                      <span>{event.max_penalty}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {(!selectedRoadmap.events || selectedRoadmap.events.length === 0) && (
            <div className="text-center py-8 text-gray-500">
              No events added yet. Click "Add Event" to create the first event.
            </div>
          )}
        </div>
      </div>
    );
  };

  // Add Event Form with Deadline Settings
  const AddEventForm = ({ roadmapId, onClose, onSuccess }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('');
    const [durationHours, setDurationHours] = useState('24');
    const [penaltyPercentage, setPenaltyPercentage] = useState('10');
    const [maxPenalty, setMaxPenalty] = useState('50');

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await apiCall('/roadmap/event', {
          method: 'POST',
          body: JSON.stringify({
            roadmap_id: roadmapId,
            title,
            description,
            points: parseInt(points) || 0,
            duration_hours: parseInt(durationHours) || 24,
            penalty_percentage: parseFloat(penaltyPercentage) || 10,
            max_penalty: parseFloat(maxPenalty) || 50,
          }),
        });
        setSuccess('Event added successfully!');
        onSuccess();
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows="3"
            />
            <input
              type="number"
              placeholder="Points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              className="w-full p-3 border rounded-lg"
              min="0"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (Hours)
              </label>
              <input
                type="number"
                placeholder="24"
                value={durationHours}
                onChange={(e) => setDurationHours(e.target.value)}
                className="w-full p-3 border rounded-lg"
                min="1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Time allowed to complete this event after it unlocks
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Penalty per Day (%)
              </label>
              <input
                type="number"
                placeholder="10"
                value={penaltyPercentage}
                onChange={(e) => setPenaltyPercentage(e.target.value)}
                className="w-full p-3 border rounded-lg"
                min="0"
                max="100"
                step="0.1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Percentage of points deducted per day late
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Penalty (%)
              </label>
              <input
                type="number"
                placeholder="50"
                value={maxPenalty}
                onChange={(e) => setMaxPenalty(e.target.value)}
                className="w-full p-3 border rounded-lg"
                min="0"
                max="100"
                step="0.1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Maximum total penalty that can be applied
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Add Event
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Admin Submissions Review
  const AdminSubmissions = () => {
    const [submissions, setSubmissions] = useState([]);

    const fetchSubmissions = async () => {
      try {
        const data = await apiCall('/admin/submissions');
        setSubmissions(data.submissions || []);
      } catch (err) {
        setError(err.message);
      }
    };

    const reviewSubmission = async (roadmapId, eventId, studentId, status) => {
      try {
        await apiCall(`/roadmap/review`, {
          method: 'POST',
          body: JSON.stringify({
            roadmap_id: roadmapId,
            event_id: eventId,
            student_id: studentId,
            status: status,
            currentuser: userId,
          }),
        });
        setSuccess(`Submission ${status} successfully!`);
        fetchSubmissions();
      } catch (err) {
        setError(err.message);
      }
    };

    useEffect(() => {
      fetchSubmissions();
    }, []);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Dashboard
          </button>
          <h2 className="text-2xl font-bold">Pending Submissions</h2>
        </div>

        <div className="space-y-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white p-6 rounded-lg shadow border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{submission.event_title}</h3>
                  <p className="text-gray-600">{submission.roadmap_title}</p>
                  <p className="text-sm text-gray-500">
                    Student: {submission.student_name} | Points: {submission.points}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div>Submitted: {formatDate(submission.submitted_at)}</div>
                  {submission.penalty_applied && submission.penalty_applied > 0 && (
                    <div className="text-orange-600 font-medium">
                      Penalty Applied: {submission.penalty_applied}%
                    </div>
                  )}
                </div>
              </div>

              {submission.submission_text && (
                <div className="mb-4 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-sm mb-2">Submission:</p>
                  <p className="text-sm">{submission.submission_text}</p>
                </div>
              )}

              {submission.submission_file && (
                <div className="mb-4">
                  <p className="font-medium text-sm mb-1">File:</p>
                  <a
                    href={submission.submission_file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View File
                  </a>
                </div>
              )}

              <div className="flex space-x-2">
                <button
                  onClick={() => reviewSubmission(
                    submission.roadmap_id,
                    submission.event_id,
                    submission.student_id,
                    'approved'
                  )}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center space-x-1"
                >
                  <Check className="h-4 w-4" />
                  <span>Approve</span>
                </button>
                <button
                  onClick={() => reviewSubmission(
                    submission.roadmap_id,
                    submission.event_id,
                    submission.student_id,
                    'rejected'
                  )}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center space-x-1"
                >
                  <X className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          ))}
          {submissions.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No pending submissions
            </div>
          )}
        </div>
      </div>
    );
  };

  // Main Navigation
  const Navigation = () => (
    <div className="bg-white shadow-sm border-b mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`py-4 px-2 border-b-2 font-medium text-sm ${
              currentView === 'dashboard'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Home className="h-4 w-4 inline mr-2" />
            Dashboard
          </button>
          
          <button
            onClick={() => setCurrentView('admin-submissions')}
            className={`py-4 px-2 border-b-2 font-medium text-sm ${
              currentView === 'admin-submissions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar className="h-4 w-4 inline mr-2" />
            Submissions
          </button>
        </div>
      </div>
    </div>
  );

  // Notification Messages
  const Notifications = () => (
    <>
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-red-800">{error}</p>
            <button
              onClick={() => setError('')}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-green-800">{success}</p>
            <button
              onClick={() => setSuccess('')}
              className="text-green-600 hover:text-green-800 text-sm"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'admin-roadmap':
        return <AdminRoadmapView />;
      case 'admin-submissions':
        return <AdminSubmissions />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 text-gray-600" />
            <div>
              <p className="font-semibold">{userName}</p>
              <p className="text-sm text-gray-600">Role: Administrator</p>
            </div>
          </div>
        </div>
        
        <Navigation />
        <Notifications />
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Admin;