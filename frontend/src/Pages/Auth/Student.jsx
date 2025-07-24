// import React, { useState, useEffect } from 'react';
// import { Trophy, Star, Clock, Users, BookOpen, Upload, Play, CheckCircle, XCircle, AlertCircle, Zap, Target, Award, Flame, Shield, Crown } from 'lucide-react';

// const Student= () => {
//  const [page, setPage] = useState(1);
// const [totalPages, setTotalPages] = useState(1);
//   const [activeView, setActiveView] = useState('roadmaps');
//   const [roadmaps, setRoadmaps] = useState([]);
//   const [selectedRoadmap, setSelectedRoadmap] = useState(null);
//   const [userProgress, setUserProgress] = useState({});
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [submissions, setSubmissions] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [userId, setUserId] = useState('');
//   const API_BASE = ''; // Update with your API URL

//   // Get user ID from localStorage or set default
//   useEffect(() => {
//     const storedUserId = 'AM.SC.U4AIE23019';
   
//     setUserId(storedUserId);
//     if (storedUserId === 'demo_user') {
//       localStorage.setItem('userId', 'demo_user');
//     }
//   }, []);

//   // Fetch roadmaps
//   const fetchRoadmaps = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE}/roadmaps`);
//       const data = await response.json();
//       if (data.success) {
//         setRoadmaps(data.roadmaps);
//       }
//     } catch (error) {
//       console.error('Error fetching roadmaps:', error);
//     }
//     setLoading(false);
//   };

//   // Fetch specific roadmap with events
//   const fetchRoadmap = async (roadmapId) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE}/roadmap?roadmap_id=${roadmapId}&user_id=${userId}`);
//       const data = await response.json();
//       if (data.success) {
//         setSelectedRoadmap(data.roadmap);
//       }
//     } catch (error) {
//       console.error('Error fetching roadmap:', error);
//     }
//     setLoading(false);
//   };

//   // Fetch user progress
//   const fetchProgress = async (roadmapId) => {
//     try {
//       const response = await fetch(`${API_BASE}/roadmap/progress`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ roadmap_id: roadmapId, user_id: userId })
//       });
//       const data = await response.json();
//       if (data.success) {
//         setUserProgress(prev => ({ ...prev, [roadmapId]: data.progress }));
//       }
//     } catch (error) {
//       console.error('Error fetching progress:', error);
//     }
//   };

//   // Fetch leaderboard
// //   const fetchLeaderboard = async (roadmapId) => {
// //     try {
// //       const response = await fetch(`${API_BASE}/roadmap/event/leaderboard?roadmap_id=${roadmapId}`);
// //       const data = await response.json();
// //       if (data.success) {
// //         setLeaderboard(data.leaderboard);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching leaderboard:', error);
// //     }
// //   };
// const fetchLeaderboard = async (roadmapId, page = 1) => {
//     try {
//       const response = await fetch(`${API_BASE}/roadmap/event/leaderboard?roadmap_id=${roadmapId}&page=${page}`);
//       const data = await response.json();
//       if (data.success) {
//         setLeaderboard(data.leaderboard);
//         setPage(data.page);
//         setTotalPages(data.total_pages);
//       }
//     } catch (error) {
//       console.error('Error fetching leaderboard:', error);
//     }
//   };

//   // Submit event
//   const submitEvent = async (eventId, roadmapId, submissionText, file) => {
//     setLoading(true);
//     const formData = new FormData();
//     formData.append('event_id', eventId);
//     formData.append('roadmap_id', roadmapId);
//     formData.append('user_id', userId);
//     formData.append('submission_text', submissionText);
//     if (file) formData.append('submission_file', file);

//     try {
//       const response = await fetch(`${API_BASE}/roadmap/event/submit`, {
//         method: 'POST',
//         body:JSON.stringify({
//           event_id: eventId,
//           roadmap_id: roadmapId,
//           user_id: userId,
//           submission_text: submissionText,   
//         } )
      
//       });
//       const data = await response.json();
//       if (data.success) {
//         fetchRoadmap(roadmapId); // Refresh roadmap
//         alert('Submission successful! 🎉');
//       } else {
//         alert('Submission failed: ' + data.error);
//       }
//     } catch (error) {
//       console.error('Error submitting:', error);
//       alert('Submission failed');
//     }
//     setLoading(false);
//   };

//   // Load initial data
//   useEffect(() => {
//     fetchRoadmaps();
//   }, []);

//   // Time formatting
//   const formatTimeRemaining = (seconds) => {
//     if (!seconds || seconds <= 0) return 'Overdue';
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     if (hours > 24) {
//       const days = Math.floor(hours / 24);
//       return `${days}d ${hours % 24}h`;
//     }
//     return `${hours}h ${minutes}m`;
//   };

//   // Progress percentage
//   const getProgressPercentage = (progress) => {
//     if (!progress || !progress.total_events) return 0;
//     return Math.round((progress.completed_events / progress.total_events) * 100);
//   };

//   // Status colors and icons
//   const getStatusConfig = (event) => {
//     const configs = {
//       green: { bg: 'bg-green-500', text: 'text-green-400', icon: CheckCircle },
//       yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', icon: Clock },
//       red: { bg: 'bg-red-500', text: 'text-red-400', icon: XCircle },
//       blue: { bg: 'bg-blue-500', text: 'text-blue-400', icon: Play },
//       orange: { bg: 'bg-orange-500', text: 'text-orange-400', icon: AlertCircle },
//       gray: { bg: 'bg-gray-500', text: 'text-gray-400', icon: Shield }
//     };
//     return configs[event.status_color] || configs.gray;
//   };

//   // Submission Modal
//   const SubmissionModal = ({ event, onClose, onSubmit }) => {
//     const [text, setText] = useState('');
//     const [file, setFile] = useState(null);

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
//         <div className="bg-gray-900 border border-purple-500 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-xl font-bold text-white flex items-center gap-2">
//               <Target className="text-purple-400" />
//               Submit Quest
//             </h3>
//             <button onClick={onClose} className="text-gray-400 hover:text-white">×</button>
//           </div>
          
//           <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
//             <h4 className="font-semibold text-purple-400 mb-2">{event.title}</h4>
//             <p className="text-gray-300 text-sm">{event.description}</p>
//             <div className="flex items-center gap-4 mt-2 text-sm">
//               <span className="text-yellow-400 flex items-center gap-1">
//                 <Star size={16} />
//                 {event.available_points} XP
//               </span>
//               {event.time_remaining && (
//                 <span className={`flex items-center gap-1 ${event.is_overdue ? 'text-red-400' : 'text-blue-400'}`}>
//                   <Clock size={16} />
//                   {formatTimeRemaining(event.time_remaining)}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">Your Solution</label>
//               <textarea
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Describe your approach, solution, or answer..."
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
//                 rows={4}
//               />
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">Attachment (Optional)</label>
//               <input
//                 type="file"
//                 onChange={(e) => setFile(e.target.files[0])}
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-purple-600 file:text-white"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 mt-6">
//             <button
//               onClick={() => onSubmit(text, file)}
//               disabled={!text.trim() && !file}
//               className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
//             >
//               <Upload size={16} />
//               Submit Quest
//             </button>
//             <button
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
//         <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4s"></div>
//       </div>

//       <div className="relative z-10">
//         {/* Header */}
//         <header className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-purple-500">
//           <div className="max-w-7xl mx-auto px-4 py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
//                   <Crown className="text-white" size={20} />
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold text-white">GameDev Quest</h1>
//                   <p className="text-gray-400 text-sm">Level up your skills</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <div className="text-right">
//                   <p className="text-sm text-gray-400">Player</p>
//                   <p className="font-semibold text-white">{userId}</p>
//                 </div>
//                 <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
//                   <Trophy className="text-white" size={20} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Navigation */}
//         <nav className="bg-black bg-opacity-30 backdrop-blur-sm border-b border-gray-700">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex space-x-8">
//               {[
//                 { key: 'roadmaps', label: 'Quest Lines', icon: BookOpen },
//                 { key: 'leaderboard', label: 'Hall of Fame', icon: Trophy },
//               ].map(({ key, label, icon: Icon }) => (
//                 <button
//                   key={key}
//                   onClick={() => setActiveView(key)}
//                   className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
//                     activeView === key
//                       ? 'border-purple-500 text-purple-400'
//                       : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
//                   }`}
//                 >
//                   <Icon size={16} />
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </nav>

//         <div className="max-w-7xl mx-auto px-4 py-8">
//           {/* Roadmaps View */}
//           {activeView === 'roadmaps' && !selectedRoadmap && (
//             <div>
//               <div className="flex items-center justify-between mb-8">
//                 <div>
//                   <h2 className="text-3xl font-bold text-white mb-2">Available Quest Lines</h2>
//                   <p className="text-gray-400">Choose your adventure and start earning XP!</p>
//                 </div>
//               </div>

//               {loading ? (
//                 <div className="flex justify-center py-12">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {roadmaps.map((roadmap) => {
//                     const progress = userProgress[roadmap.id];
//                     const progressPercentage = getProgressPercentage(progress);
                    
//                     return (
//                       <div
//                         key={roadmap.id}
//                         className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20"
//                         onClick={() => {
//                           setSelectedRoadmap(null);
//                           fetchRoadmap(roadmap.id);
//                           fetchProgress(roadmap.id);
//                           setActiveView('roadmap');
//                         }}
//                       >
//                         <div className="flex items-start justify-between mb-4">
//                           <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
//                             <Flame className="text-white" size={20} />
//                           </div>
//                           <div className="text-right">
//                             <div className="text-sm text-gray-400">Progress</div>
//                             <div className="text-lg font-bold text-purple-400">{progressPercentage}%</div>
//                           </div>
//                         </div>
                        
//                         <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
//                           {roadmap.title}
//                         </h3>
//                         <p className="text-gray-400 text-sm mb-4 line-clamp-2">{roadmap.description}</p>
                        
//                         {progress && (
//                           <div className="space-y-2">
//                             <div className="flex justify-between text-sm">
//                               <span className="text-gray-400">Quests Completed</span>
//                               <span className="text-white">{progress.completed_events || 0}/{progress.total_events || 0}</span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                               <div
//                                 className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
//                                 style={{ width: `${progressPercentage}%` }}
//                               ></div>
//                             </div>
//                             <div className="flex items-center justify-between">
//                               <span className="text-yellow-400 text-sm flex items-center gap-1">
//                                 <Star size={14} />
//                                 {progress.total_points || 0} XP
//                               </span>
//                               <span className="text-xs text-gray-500">
//                                 Created {new Date(roadmap.created_at).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Single Roadmap View */}
//           {activeView === 'roadmap' && selectedRoadmap && (
//             <div>
//               <div className="flex items-center gap-4 mb-8">
//                 <button
//                   onClick={() => {
//                     setSelectedRoadmap(null);
//                     setActiveView('roadmaps');
//                   }}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   ← Back to Quest Lines
//                 </button>
//               </div>

//               <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <h1 className="text-3xl font-bold text-white mb-2">{selectedRoadmap.title}</h1>
//                     <p className="text-gray-400 mb-4">{selectedRoadmap.description}</p>
//                     <div className="flex items-center gap-6 text-sm">
//                       <span className="text-blue-400">{selectedRoadmap.sig_name}</span>
//                       <span className="text-gray-400">
//                         {new Date(selectedRoadmap.start_date).toLocaleDateString()} - {new Date(selectedRoadmap.end_date).toLocaleDateString()}
//                       </span>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         selectedRoadmap.roadmap_status === 'active' ? 'bg-green-500 bg-opacity-20 text-green-400' :
//                         selectedRoadmap.roadmap_status === 'not_started' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
//                         'bg-red-500 bg-opacity-20 text-red-400'
//                       }`}>
//                         {selectedRoadmap.roadmap_status === 'active' ? 'Active' :
//                          selectedRoadmap.roadmap_status === 'not_started' ? 'Starting Soon' : 'Expired'}
//                       </span>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => fetchLeaderboard(selectedRoadmap.id)}
//                     className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
//                   >
//                     <Trophy size={16} />
//                     View Leaderboard
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {selectedRoadmap.events?.map((event, index) => {
//                   const statusConfig = getStatusConfig(event);
//                   const StatusIcon = statusConfig.icon;

//                   return (
//                     <div
//                       key={event.id}
//                       className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
//                         event.unlocked ? 'border-gray-700 hover:border-purple-500' : 'border-gray-800 opacity-60'
//                       }`}
//                     >
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <div className="flex items-center gap-4 mb-3">
//                             <div className={`w-12 h-12 rounded-full flex items-center justify-center ${statusConfig.bg} bg-opacity-20`}>
//                               <StatusIcon className={statusConfig.text} size={20} />
//                             </div>
//                             <div>
//                               <h3 className="text-xl font-bold text-white mb-1">
//                                 Quest {index + 1}: {event.title}
//                               </h3>
//                               <div className="flex items-center gap-4 text-sm">
//                                 <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} bg-opacity-20 ${statusConfig.text}`}>
//                                   {event.status_text}
//                                 </span>
//                                 <span className="text-yellow-400 flex items-center gap-1">
//                                   <Star size={14} />
//                                   {event.available_points} XP
//                                 </span>
//                                 {event.time_remaining && (
//                                   <span className={`flex items-center gap-1 ${event.is_overdue ? 'text-red-400' : 'text-blue-400'}`}>
//                                     <Clock size={14} />
//                                     {formatTimeRemaining(event.time_remaining)}
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
                          
//                           <p className="text-gray-400 mb-4">{event.description}</p>
                          
//                           {event.deadline && (
//                             <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
//                               <div className="flex items-center justify-between text-sm">
//                                 <span className="text-gray-400">Quest Deadline:</span>
//                                 <span className="text-white">{new Date(event.deadline).toLocaleString()}</span>
//                               </div>
//                               {event.current_penalty > 0 && (
//                                 <div className="flex items-center justify-between text-sm mt-1">
//                                   <span className="text-red-400">Late Penalty:</span>
//                                   <span className="text-red-400">-{event.current_penalty}%</span>
//                                 </div>
//                               )}
//                             </div>
//                           )}

//                           {event.submission_text && (
//                             <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
//                               <h4 className="font-medium text-gray-300 mb-2">Your Submission:</h4>
//                               <p className="text-gray-400 text-sm">{event.submission_text}</p>
//                               {event.submission_file && (
//                                 <p className="text-blue-400 text-sm mt-2">📎 File attached</p>
//                               )}
//                             </div>
//                           )}
//                         </div>

//                         <div className="ml-6">
//                           {event.can_submit && (
//                             <button
//                               onClick={() => setSubmissions({ ...submissions, [event.id]: true })}
//                               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
//                             >
//                               <Zap size={16} />
//                               {event.submission_status === 'rejected' ? 'Resubmit' : 'Submit Quest'}
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
// {/* 
//           Leaderboard View  */}
//            {activeView === 'leaderboard' && (
//             <div>
//               <div className="flex items-center justify-between mb-8">
//                 <div>
//                   <h2 className="text-3xl font-bold text-white mb-2">Hall of Fame</h2>
//                   <p className="text-gray-400">Top performers across all quest lines</p>
//                 </div>
//               </div>

//               {leaderboard.length > 0 ? (
//                 <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
//                   <div className="p-6 border-b border-gray-700">
//                     <h3 className="text-xl font-bold text-white">Global Rankings</h3>
//                   </div>
//                   <div className="divide-y divide-gray-700">
//                     {leaderboard.slice(0, 10).map((player, index) => (
//                       <div key={player.student_id} className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
//                         <div className="flex items-center gap-4">
//                           <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
//                             index === 0 ? 'bg-yellow-500 text-black' :
//                             index === 1 ? 'bg-gray-400 text-black' :
//                             index === 2 ? 'bg-orange-600 text-white' :
//                             'bg-gray-700 text-gray-300'
//                           }`}>
//                             {index < 3 ? <Crown size={20} /> : index + 1}
//                           </div>
//                           <div>
//                             <p className="font-semibold text-white">{player.student_name}</p>
//                             <p className="text-sm text-gray-400">Player ID: {player.student_id}</p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <p className="text-lg font-bold text-purple-400">{player.total_points} XP</p>
//                           <p className="text-sm text-gray-400">{player.completed_events} quests completed</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <Trophy className="mx-auto text-gray-500 mb-4" size={48} />
//                   <p className="text-gray-400">No leaderboard data available</p>
//                 </div>
//               )}
//               {totalPages > 1 && (
//   <div className="flex justify-center mt-6 gap-4">
//     <button
//       className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
//       onClick={() => setPage(prev => Math.max(1, prev - 1))}
//       disabled={page === 1}
//     >
//       Previous
//     </button>
//     <span className="text-white self-center">
//       Page {page} of {totalPages}
//     </span>
//     <button
//       className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
//       onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
//       disabled={page === totalPages}
//     >
//       Next
//     </button>
//   </div>
// )}

//             </div>
            
//           )}
//         </div>

//         {/* Submission Modals */}
//         {Object.entries(submissions).map(([eventId, isOpen]) => {
//           if (!isOpen || !selectedRoadmap) return null;
//           const event = selectedRoadmap.events.find(e => e.id == eventId);
//           if (!event) return null;

//           return (
//             <SubmissionModal
//               key={eventId}
//               event={event}
//               onClose={() => setSubmissions({ ...submissions, [eventId]: false })}
//               onSubmit={(text, file) => {
//                 submitEvent(eventId, selectedRoadmap.id, text, file);
//                 setSubmissions({ ...submissions, [eventId]: false });
//               }}
//             />
//           );
//         })}

//         {/* Loading Overlay */}
//         {loading && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-gray-900 border border-purple-500 rounded-xl p-8 flex items-center gap-4">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
//               <p className="text-white font-medium">Loading...</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Student;

import React, { useState, useEffect } from 'react';
import { Trophy, Star, Clock, Users, BookOpen, Upload, Play, CheckCircle, XCircle, AlertCircle, Zap, Target, Award, Flame, Shield, Crown } from 'lucide-react';

const Student = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeView, setActiveView] = useState('roadmaps');
  const [roadmaps, setRoadmaps] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [userProgress, setUserProgress] = useState({});
  const [leaderboard, setLeaderboard] = useState([]);
  const [submissions, setSubmissions] = useState({});
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const API_BASE = ''; // Update with your API URL

  // Get user ID from localStorage or set default
  useEffect(() => {
    const storedUserId = 'AM.SC.U4AIE23015';
    setUserId(storedUserId);
    if (storedUserId === 'demo_user') {
      localStorage.setItem('userId', 'demo_user');
    }
  }, []);

  // Fetch roadmaps
  const fetchRoadmaps = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/roadmaps`);
      const data = await response.json();
      if (data.success) {
        setRoadmaps(data.roadmaps);
      }
    } catch (error) {
      console.error('Error fetching roadmaps:', error);
    }
    setLoading(false);
  };

  // Fetch specific roadmap with events
  const fetchRoadmap = async (roadmapId) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/roadmap?roadmap_id=${roadmapId}&user_id=${userId}`);
      const data = await response.json();
      if (data.success) {
        setSelectedRoadmap(data.roadmap);
      }
    } catch (error) {
      console.error('Error fetching roadmap:', error);
    }
    setLoading(false);
  };

  // Fetch user progress
  const fetchProgress = async (roadmapId) => {
    try {
      const response = await fetch(`${API_BASE}/roadmap/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roadmap_id: roadmapId, user_id: userId })
      });
      const data = await response.json();
      if (data.success) {
        setUserProgress(prev => ({ ...prev, [roadmapId]: data.progress }));
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  // Fetch leaderboard
  const fetchLeaderboard = async (roadmapId, page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/roadmap/event/leaderboard?roadmap_id=${roadmapId}&page=${page}`);
      const data = await response.json();
      if (data.success) {
        setLeaderboard(data.leaderboard);
        setPage(data.page);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
    setLoading(false);
  };

  // Submit event
  const submitEvent = async (eventId, roadmapId, submissionText, file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('event_id', eventId);
    formData.append('roadmap_id', roadmapId);
    formData.append('user_id', userId);
    formData.append('submission_text', submissionText);
    if (file) formData.append('submission_file', file);

    try {
      const response = await fetch(`${API_BASE}/roadmap/event/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_id: eventId,
          roadmap_id: roadmapId,
          user_id: userId,
          submission_text: submissionText,   
        })
      });
      const data = await response.json();
      if (data.success) {
        fetchRoadmap(roadmapId); // Refresh roadmap
        alert('Submission successful! 🎉');
      } else {
        alert('Submission failed: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Submission failed');
    }
    setLoading(false);
  };

  // Load initial data
  useEffect(() => {
    fetchRoadmaps();
  }, []);

  // Time formatting
  const formatTimeRemaining = (seconds) => {
    if (!seconds || seconds <= 0) return 'Overdue';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}d ${hours % 24}h`;
    }
    return `${hours}h ${minutes}m`;
  };

  // Progress percentage
  const getProgressPercentage = (progress) => {
    if (!progress || !progress.total_events) return 0;
    return Math.round((progress.completed_events / progress.total_events) * 100);
  };

  // Status colors and icons
  const getStatusConfig = (event) => {
    const configs = {
      green: { bg: 'bg-green-500', text: 'text-green-400', icon: CheckCircle },
      yellow: { bg: 'bg-yellow-500', text: 'text-yellow-400', icon: Clock },
      red: { bg: 'bg-red-500', text: 'text-red-400', icon: XCircle },
      blue: { bg: 'bg-blue-500', text: 'text-blue-400', icon: Play },
      orange: { bg: 'bg-orange-500', text: 'text-orange-400', icon: AlertCircle },
      gray: { bg: 'bg-gray-500', text: 'text-gray-400', icon: Shield }
    };
    return configs[event.status_color] || configs.gray;
  };

  // Submission Modal
  const SubmissionModal = ({ event, onClose, onSubmit }) => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-900 border border-purple-500 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="text-purple-400" />
              Submit Quest
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">×</button>
          </div>
          
          <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-purple-400 mb-2">{event.title}</h4>
            <p className="text-gray-300 text-sm">{event.description}</p>
            <div className="flex items-center gap-4 mt-2 text-sm">
              <span className="text-yellow-400 flex items-center gap-1">
                <Star size={16} />
                {event.available_points} XP
              </span>
              {event.time_remaining && (
                <span className={`flex items-center gap-1 ${event.is_overdue ? 'text-red-400' : 'text-blue-400'}`}>
                  <Clock size={16} />
                  {formatTimeRemaining(event.time_remaining)}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Solution</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Describe your approach, solution, or answer..."
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Attachment (Optional)</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-purple-600 file:text-white"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => onSubmit(text, file)}
              disabled={!text.trim() && !file}
              className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Upload size={16} />
              Submit Quest
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-purple-500">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Crown className="text-white" size={20} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">GameDev Quest</h1>
                  <p className="text-gray-400 text-sm">Level up your skills</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-gray-400">Player</p>
                  <p className="font-semibold text-white">{userId}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Trophy className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-black bg-opacity-30 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-8">
              {[
                { key: 'roadmaps', label: 'Quest Lines', icon: BookOpen },
                { key: 'leaderboard', label: 'Hall of Fame', icon: Trophy },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveView(key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeView === key
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-500'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Roadmaps View */}
          {activeView === 'roadmaps' && !selectedRoadmap && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Available Quest Lines</h2>
                  <p className="text-gray-400">Choose your adventure and start earning XP!</p>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {roadmaps.map((roadmap) => {
                    const progress = userProgress[roadmap.id];
                    const progressPercentage = getProgressPercentage(progress);
                    
                    return (
                      <div
                        key={roadmap.id}
                        className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 cursor-pointer group hover:shadow-xl hover:shadow-purple-500/20"
                        onClick={() => {
                          setSelectedRoadmap(null);
                          fetchRoadmap(roadmap.id);
                          fetchProgress(roadmap.id);
                          setActiveView('roadmap');
                        }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Flame className="text-white" size={20} />
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Progress</div>
                            <div className="text-lg font-bold text-purple-400">{progressPercentage}%</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {roadmap.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{roadmap.description}</p>
                        
                        {progress && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Quests Completed</span>
                              <span className="text-white">{progress.completed_events || 0}/{progress.total_events || 0}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercentage}%` }}
                              ></div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-yellow-400 text-sm flex items-center gap-1">
                                <Star size={14} />
                                {progress.total_points || 0} XP
                              </span>
                              <span className="text-xs text-gray-500">
                                Created {new Date(roadmap.created_at).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Single Roadmap View */}
          {activeView === 'roadmap' && selectedRoadmap && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={() => {
                    setSelectedRoadmap(null);
                    setActiveView('roadmaps');
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ← Back to Quest Lines
                </button>
              </div>

              <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{selectedRoadmap.title}</h1>
                    <p className="text-gray-400 mb-4">{selectedRoadmap.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <span className="text-blue-400">{selectedRoadmap.sig_name}</span>
                      <span className="text-gray-400">
                        {new Date(selectedRoadmap.start_date).toLocaleDateString()} - {new Date(selectedRoadmap.end_date).toLocaleDateString()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        selectedRoadmap.roadmap_status === 'active' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                        selectedRoadmap.roadmap_status === 'not_started' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                        'bg-red-500 bg-opacity-20 text-red-400'
                      }`}>
                        {selectedRoadmap.roadmap_status === 'active' ? 'Active' :
                         selectedRoadmap.roadmap_status === 'not_started' ? 'Starting Soon' : 'Expired'}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      fetchLeaderboard(selectedRoadmap.id);
                      setActiveView('leaderboard');
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Trophy size={16} />
                    View Leaderboard
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {selectedRoadmap.events?.map((event, index) => {
                  const statusConfig = getStatusConfig(event);
                  const StatusIcon = statusConfig.icon;

                  return (
                    <div
                      key={event.id}
                      className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
                        event.unlocked ? 'border-gray-700 hover:border-purple-500' : 'border-gray-800 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${statusConfig.bg} bg-opacity-20`}>
                              <StatusIcon className={statusConfig.text} size={20} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                Quest {index + 1}: {event.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} bg-opacity-20 ${statusConfig.text}`}>
                                  {event.status_text}
                                </span>
                                <span className="text-yellow-400 flex items-center gap-1">
                                  <Star size={14} />
                                  {event.available_points} XP
                                </span>
                                {event.time_remaining && (
                                  <span className={`flex items-center gap-1 ${event.is_overdue ? 'text-red-400' : 'text-blue-400'}`}>
                                    <Clock size={14} />
                                    {formatTimeRemaining(event.time_remaining)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 mb-4">{event.description}</p>
                          
                          {event.deadline && (
                            <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-400">Quest Deadline:</span>
                                <span className="text-white">{new Date(event.deadline).toLocaleString()}</span>
                              </div>
                              {event.current_penalty > 0 && (
                                <div className="flex items-center justify-between text-sm mt-1">
                                  <span className="text-red-400">Late Penalty:</span>
                                  <span className="text-red-400">-{event.current_penalty}%</span>
                                </div>
                              )}
                            </div>
                          )}

                          {event.submission_text && (
                            <div className="mb-4 p-3 bg-gray-800 rounded-lg border border-gray-700">
                              <h4 className="font-medium text-gray-300 mb-2">Your Submission:</h4>
                              <p className="text-gray-400 text-sm">{event.submission_text}</p>
                              {event.submission_file && (
                                <p className="text-blue-400 text-sm mt-2">📎 File attached</p>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="ml-6">
                          {event.can_submit && (
                            <button
                              onClick={() => setSubmissions({ ...submissions, [event.id]: true })}
                              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                            >
                              <Zap size={16} />
                              {event.submission_status === 'rejected' ? 'Resubmit' : 'Submit Quest'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Leaderboard View */}
          {activeView === 'leaderboard' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Hall of Fame</h2>
                  <p className="text-gray-400">Top performers across all quest lines</p>
                </div>
                {selectedRoadmap && (
                  <button
                    onClick={() => setActiveView('roadmap')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ← Back to {selectedRoadmap.title}
                  </button>
                )}
              </div>

              {leaderboard.length > 0 ? (
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-700">
                    <h3 className="text-xl font-bold text-white">
                      {selectedRoadmap ? `${selectedRoadmap.title} Rankings` : 'Global Rankings'}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-700">
                    {leaderboard.map((player, index) => (
                      <div key={player.student_id} className="p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                            index === 0 ? 'bg-yellow-500 text-black' :
                            index === 1 ? 'bg-gray-400 text-black' :
                            index === 2 ? 'bg-orange-600 text-white' :
                            'bg-gray-700 text-gray-300'
                          }`}>
                            {index < 3 ? <Crown size={20} /> : index + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{player.student_name}</p>
                            <p className="text-sm text-gray-400">Player ID: {player.student_id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-purple-400">{player.total_points} XP</p>
                          <p className="text-sm text-gray-400">{player.completed_events} quests completed</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Trophy className="mx-auto text-gray-500 mb-4" size={48} />
                  <p className="text-gray-400">No leaderboard data available</p>
                  <button
                    onClick={() => selectedRoadmap && fetchLeaderboard(selectedRoadmap.id)}
                    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Refresh Leaderboard
                  </button>
                </div>
              )}
              
              {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-4">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    onClick={() => {
                      const newPage = Math.max(1, page - 1);
                      setPage(newPage);
                      if (selectedRoadmap) {
                        fetchLeaderboard(selectedRoadmap.id, newPage);
                      }
                    }}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                  <span className="text-white self-center">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                    onClick={() => {
                      const newPage = Math.min(totalPages, page + 1);
                      setPage(newPage);
                      if (selectedRoadmap) {
                        fetchLeaderboard(selectedRoadmap.id, newPage);
                      }
                    }}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Submission Modals */}
        {Object.entries(submissions).map(([eventId, isOpen]) => {
          if (!isOpen || !selectedRoadmap) return null;
          const event = selectedRoadmap.events.find(e => e.id == eventId);
          if (!event) return null;

          return (
            <SubmissionModal
              key={eventId}
              event={event}
              onClose={() => setSubmissions({ ...submissions, [eventId]: false })}
              onSubmit={(text, file) => {
                submitEvent(eventId, selectedRoadmap.id, text, file);
                setSubmissions({ ...submissions, [eventId]: false });
              }}
            />
          );
        })}

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 border border-purple-500 rounded-xl p-8 flex items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              <p className="text-white font-medium">Loading...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Student;