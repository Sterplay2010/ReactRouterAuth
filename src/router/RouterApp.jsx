import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage";
import {Login} from "../pages/Login";
import {AdminPage} from "../pages/AdminPage";
import {UserPage} from "../pages/UserPage";
import {useStore} from "../storage/StorageSession";
import {AdminInfo} from "../pages/AdminInfo";
import {UserInfo} from "../pages/UserInfo";
import {NotFound} from "../pages/NotFound";

export const RouterApp = () => {
    const {userSession} = useStore()

    return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              {userSession.role==="admin" && (
                  <>
                      <Route path="admin" element={<AdminPage/>}/>
                      <Route path="admininfo" element={<AdminInfo/>}/>
                  </>
              )}
              {userSession.role==="user" && (
                  <>
                      <Route path="user" element={<UserPage/>}/>
                      <Route path="userinfo" element={<UserInfo/>}/>
                  </>
              )}
              <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
      </BrowserRouter>
  )

}