import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TaskList from '@pages/list/TaskList';
import TaskDetails from '@pages/task/TaskDetails';


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
        <Route path="/task/new" element={<TaskDetails />}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
