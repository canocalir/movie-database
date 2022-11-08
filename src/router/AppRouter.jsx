import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import { useAuth } from "../context/AuthContext";
import PasswordReset from "../pages/PasswordReset";
import Swal from "sweetalert2";

const AppRouter = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSearchData, setIsSearchData] = useState(false);

  const fetchDataHandler = async () => {
    setLoading(true);
    setIsSearchData(false);
    const url =
      `https://api.themoviedb.org/3/movie/popular?api_key=` +
      process.env.REACT_APP_MOVIE_API_KEY +
      `&language=en-US&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  const { user } = useAuth();
  const fetchSearchHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (user) {
      setIsSearchData(true);
      const url =
        `https://api.themoviedb.org/3/search/movie?api_key=` +
        process.env.REACT_APP_MOVIE_API_KEY +
        `&query=${inputValue}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login to Search!",
      }).then(() => {
        window.location.href = "/login";
      });
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, [page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="about"
          element={
            <PrivateRouter>
              <About />
            </PrivateRouter>
          }
        />
        <Route
          path="movie/:id"
          element={
            <PrivateRouter>
              <MovieDetail />
            </PrivateRouter>
          }
        />

        <Route
          path="/"
          element={
            <Main
              fetchSearchHandler={fetchSearchHandler}
              isSearchData={isSearchData}
              setInputValue={setInputValue}
              data={data}
              setPage={setPage}
              page={page}
              loading={loading}
            />
          }
        />
        <Route path="/login" element={!user ? <Login /> : <Navigate to={'/'}/>} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to={'/'}/>} />
        <Route path="/reset-password" element={!user ?<PasswordReset /> : <Navigate to={'/'}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
