import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../scenes/home/Home";
import Login from "../scenes/login/Login";
import Registration from "../scenes/registration/Registration";
import AdminPage from "../scenes/admin page/AdminPage";
import StudentPage from "../scenes/student page/StudentPage";
import PublicPage from "../scenes/public page/PublicPage";
import CheckAuth from '../utils/auth.js'
import Courses from '../scenes/student page/Courses'
import Post from '../scenes/student page/Post'
import ClassShedule from '../scenes/public page/ClassShedule'
import NewPost from '../scenes/public page/NewPost'
import CertificateUpload from "../scenes/public page/CertificateUpload";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/admin",
        element: 
            <AdminPage />
      },
      {
        path: "/student",
        children: [
          { index: true, element: <StudentPage /> },
          { path: "/student/courses", element: <Courses /> },
          { path: "/student/post", element: <Post /> },
        ]
      },
      {
        path: "/public",
        children: [
          { index: true, element: <PublicPage /> },
          { path: "/public/sheduleCourses", element: <ClassShedule /> },
          { path: "/public/certificateUpload", element: <CertificateUpload /> },
          { path: "/public/addPost", element: <NewPost /> },
        ]
      },
    ],
  },
]);
