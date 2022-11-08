import { ToastContainer } from "react-toastify";
import Wave from "react-wavify";
import "./App.css";
import ScrollButton from "./components/ScrollButton/ScrollButton";



import { AuthProvider } from "./context/AuthContext";

import AppRouter from "./router/AppRouter";

function App() {

  

  return (
    <AuthProvider>
      <AppRouter />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <ScrollButton />
      <Wave fill='#6c2bd9'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
    </AuthProvider>
  );
}

export default App;
