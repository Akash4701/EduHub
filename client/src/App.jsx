import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AgoraVideoCall from './components/AgoraVideoCall';
import Poll from './components/Poll';
import QnA from './components/QnA';
import Whiteboard from './components/Whiteboard';
import Teacher from './Teacher'
import Convert from "./convert";
import Component from "./upload"
import Student from "./Student"
import NoteSection from './components/Notes';
import QuizSection from './components/QuizPage';
import Assignments from './StudentDashboard/Assignment';
import AssignmentUpload from './TeacherComponents/AssignmentUpload';
import Vocab from './components/VocabChallenge/Vocab';
import QuestionUpload from './TeacherComponents/UploadQuiz';
import QR from './TeacherComponents/QRCodeGenerator';
import Todo from './components/Todo/Todo';
import StartQuiz from './components/StartQuiz';
import QuizPage from './components/QuizPage';
import LiveClass from './TeacherComponents/LiveClass.jsx';
import ManageStud from './TeacherComponents/Manage_Stud';
import Reward from './TeacherComponents/RewardSection/Reward'
import MyAssign from './TeacherComponents/myAssignment';

import Login from './Login';
import Logout from './Logout';
import QuizPreview from './TeacherComponents/PreviewQuiz';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/convert" element={<Convert />} />
        <Route path="/Teach" element={<Teacher />} />
        <Route path="/uploadAssign" element={<AssignmentUpload />} />
        <Route path="/myAssign" element={<MyAssign/>}/>
        <Route path="/Stud/:studentId/Voca" element={<Vocab />} />
        <Route path="/teachquiz" element={<QuestionUpload />} />
        <Route path="/previewquiz" element={<QuizPreview />} />
        <Route path='/liveclass' element={<LiveClass />} />
        <Route path="/rewards" element={<Reward />} />
        <Route path="/video-call" element={<AgoraVideoCall />} />
        <Route
          path="/poll"
          element={<Poll pollQuestion="What's your favorite subject?" options={['Math', 'Science', 'History']} />}
        />
        <Route path="/qna" element={<QnA />} />
        <Route path="/whiteboard" element={<Whiteboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Component />} />

        <Route path="/Stud/:studentId" element={<Student />} />
        <Route path="/Stud/:studentId/notes" element={<NoteSection />} />
        <Route path="/Stud/:studentId/Startquiz" element={<StartQuiz />} />
        <Route path='/Stud/:studentId/quiz' element={<QuizPage />} />

        <Route path='/Stud/:studentId/assignment' element={<Assignments />} />
        <Route path='/Stud/:studentId/todo' element={<Todo />} />
        <Route path="/QRCodegenerator" element={<QR />} />

        <Route path="/Manage" element={<ManageStud />} />
        <Route path="/Login" element={<Login />} />
        <Route />
      </Routes>


    </Router>
  );
}

export default App;