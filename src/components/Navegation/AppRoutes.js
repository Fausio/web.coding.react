import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReadUser from '../User/ReadUser';
import CreateUser from '../User/CreateUser';
import EditUser from '../User/EditUser';


function AppRoutes() {
    return (

        <div className='d-flex justify-content-center'>
            <Routes>
                <Route index element={<ReadUser />} />
                <Route path="user/create" element={<CreateUser />} />
                <Route path="user/edit/:id" element={<EditUser />} />
            </Routes>
        </div>

    )
}

export default AppRoutes;
