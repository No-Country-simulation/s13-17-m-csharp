import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import { DoctorCard } from './components/DoctorCard/DoctorCard';
import Volver from './components/Volver/Volver';
import Home from './pages/Home/Home';
import Turno from './pages/Turno/Turno';
import Confirmacion from './pages/Confirmacion/Confirmacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inicio' element={<Layout>
                                            <Volver title={"Volver"} />
                                            <Inicio />
                                          </Layout>}/>
        <Route path='/login' element={<Layout>
                                        <Volver title={"Volver"} />
                                        <Login />
                                      </Layout>}/>
        <Route path='/register/step1' element={<Layout>
                                        <Volver title={"Volver"} />
                                        <Register1 />
                                      </Layout>}/>
        <Route path='/register/step2' element={<Layout>
                                        <Volver title={"Volver"} /> 
                                        <Register2 />
                                      </Layout>}/>
        <Route path='/docProfile' element={<Layout>
                                        <Volver title={"Volver"} />
                                        <DoctorCard />
                                      </Layout>}/>
        <Route path='/agenda' element={<Layout>
                                        <Volver title={"Confirmar fecha"} />
                                        <Turno />
                                      </Layout>}/>
        <Route path='/confirmacion' element={<Layout>
                                        <Volver title={"Confirmar fecha"} />
                                        <Confirmacion />
                                      </Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
