import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Application from './Pages/Application';
import Marketing from './Pages/Marketing';

import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';

// Components
import Alerts from './Pages/Application/Alerts';
import Badges from './Pages/Application/Badges';
import Breadcrumbs from './Pages/Application/Breadcrumbs';
import ButtonGroups from './Pages/Application/ButtonGroups';
import Checkboxes from './Pages/Application/Checkboxes';
import DetailsLists from './Pages/Application/DetailsLists';
import Dividers from './Pages/Application/Dividers';
import Dropdowns from './Pages/Application/Dropdowns';
import FileUploaders from './Pages/Application/FileUploaders';
import Filters from './Pages/Application/Filters';
import Grids from './Pages/Application/Grids';
import Inputs from './Pages/Application/Inputs';
import Media from './Pages/Application/Media';
import Modals from './Pages/Application/Modals';
import Pagination from './Pages/Application/Pagination';
import QuantityInputs from './Pages/Application/QuantityInputs';
import RadioGroups from './Pages/Application/RadioGroups';
import Selects from './Pages/Application/Selects';
import SideMenu from './Pages/Application/SideMenu';
import Stats from './Pages/Application/Stats';
import Steps from './Pages/Application/Steps';
import Tables from './Pages/Application/Tables';
import Textareas from './Pages/Application/Textareas';
import Timelines from './Pages/Application/Timelines';
import Toggles from './Pages/Application/Toggles';
import VerticalMenu from './Pages/Application/VerticalMenu';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/marketing" element={<Marketing />} />

        {/* Component Routes */}
        <Route path="/application/Alerts" element={<Alerts />} />
        <Route path="/application/Badges" element={<Badges />} />
        <Route path="/application/Breadcrumbs" element={<Breadcrumbs />} />
        <Route path="/application/Button Groups" element={<ButtonGroups />} />
        <Route path="/application/Checkboxes" element={<Checkboxes />} />
        <Route path="/application/Details Lists" element={<DetailsLists />} />
        <Route path="/application/Dividers" element={<Dividers />} />
        <Route path="/application/Dropdowns" element={<Dropdowns />} />
        <Route path="/application/File Uploaders" element={<FileUploaders />} />
        <Route path="/application/Filters" element={<Filters />} />
        <Route path="/application/Grids" element={<Grids />} />
        <Route path="/application/Inputs" element={<Inputs />} />
        <Route path="/application/Media" element={<Media />} />
        <Route path="/application/Modals" element={<Modals />} />
        <Route path="/application/Pagination" element={<Pagination />} />
        <Route path="/application/Quantity Inputs" element={<QuantityInputs />} />
        <Route path="/application/Radio Groups" element={<RadioGroups />} />
        <Route path="/application/Selects" element={<Selects />} />
        <Route path="/application/Side Menu" element={<SideMenu />} />
        <Route path="/application/Stats" element={<Stats />} />
        <Route path="/application/Steps" element={<Steps />} />
        <Route path="/application/Tables" element={<Tables />} />
        <Route path="/application/Textareas" element={<Textareas />} />
        <Route path="/application/Timelines" element={<Timelines />} />
        <Route path="/application/Toggles" element={<Toggles />} />
        <Route path="/application/Vertical Menu" element={<VerticalMenu />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
