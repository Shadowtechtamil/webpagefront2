import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Videos from './routes/Videos';
import Blog from './routes/Blog';
import About from './routes/About';
import Contact from './routes/Contact';
import Videoplay from './routes/Videoplay';
import AdminPanel from './routes/adminpanelroutes/AdminPanel';
import Dashboard from './routes/adminpanelroutes/Dashboard';
import Content from './routes/adminpanelroutes/Content';
import UploadContent from './routes/adminpanelroutes/UploadContent';
import VideoUpload from './routes/adminpanelroutes/VideoUpload';
import BlogUpload from './routes/adminpanelroutes/BlogUpload';
import DevTest from './DevTest';
import Loginpage from './routes/Loginpage/Loginpage';
import Dev from './Dev';
import Required from './components/Required';
import Pagenotfound from './routes/Missing/Pagenotfound';
import PreLoadingbar from './PreLoadingbar';
import Store from './routes/Store';
function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/videos'  element={<Videos title="Videos" />}/>
        <Route path='/store' element={<Store title="Store"/>}/>
        <Route path='/blog'  element={<Blog title="Blog" />}/>
        <Route path='/about'  element={<About title="About"/>}/>
        <Route path='/contact'  element={<Contact title="Contact"/>}/>
        <Route path='/watch/:videoId' element={<Videoplay /> }/>
        <Route element={<Required />}>
          <Route path='admin'  element={<AdminPanel />}>
              <Route  path='dashboard'  index element={<Dashboard />}/>
              <Route  path='content' element={<Content />}/>
              <Route  path='upload' element={<UploadContent />}>
                    <Route path='video' element={<VideoUpload />} />
                    <Route path='blog' element={<BlogUpload />} />
              </Route>
          </Route>
        </Route>
        <Route  path='/devtest' element={<DevTest />} />
        <Route path='/dev' element={<Dev />} />
        <Route  path='/login' element={<Loginpage />} />
        <Route path='*' element={<Pagenotfound />}/>
        <Route path='/pre' element={<PreLoadingbar />}/>
      </Routes>
    </div>
  );
}

export default App;
