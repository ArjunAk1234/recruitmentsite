import React from 'react';
import './App.css';

import { BrowserRouter , Routes, Route , Navigate } from 'react-router-dom';

import Student from './Pages/Auth/Student';
import Admin from './Pages/Auth/Admin';


// function App() {
//   return (
//     <BrowserRouter basename="/react/test">
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Signup />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           {/* Admin routes - only accessible if role is 'admin' */}
//           <Route
//             path="/admin"
//             element={
//               <PrivateRoute allowedRoles={['admin']}>
//                 <DashboardLayout />
//               </PrivateRoute>
//             }
//           >
//             <Route index element={<AdminDashboard />} />
//             <Route path="add-teacher" element={<AddTeacher />} />
//             <Route path="event-history" element={<EventHistory />} />
//             <Route path="event/:eventId" element={<EventDashboard />} />
//             <Route path="faculty-list"  element={<Facultylist />}  />
//                {/* No separate route for event/create anymore */}
//           </Route>

//           {/* Faculty route - only accessible if role is 'faculty' */}
//           <Route
//             path="/faculty"
//             element={
//               <PrivateRoute allowedRoles={['faculty']}>
//                 <FacultyDashboardLayout />
//               </PrivateRoute>
//             }
//           >
//             <Route index element={<FacultyDashboard />} />
//             <Route path="event-historyfaculty" element={<FacultyEventHistory />} />
//           </Route>

//           {/* Unauthorized page route (you should create this page) */}
//           <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />

//           {/* Catch-all route */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter >
    
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />

        </Routes>

    </BrowserRouter>
  );
}
 export default App;