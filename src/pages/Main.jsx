import MovieCard from "../components/MovieCard/MovieCard";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import { Pagination, Spinner } from "flowbite-react";

const Main = ({
  data,
  setPage,
  page,
  fetchSearchHandler,
  setInputValue,
  isSearchData,
  loading,
}) => {
  const onPageChangeHandler = (e) => {
    setPage(e);
  };

  const Loading = (
    <div className="text-center">
      <Spinner
        className="mt-5"
        size={"xl"}
        aria-label="Center-aligned spinner"
      />
    </div>
  );

  return (
    <>
      <Navbar />
      <OuterContainer>
        <form onSubmit={fetchSearchHandler}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="search"
              id="default-search"
              className="mt-10 block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movies"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Search
            </button>
          </div>
        </form>
        {isSearchData ? (
          <h5 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Showing Search Results of {isSearchData ? data.length : null}
          </h5>
        ) : null}
        {loading ? (
          Loading
        ) : (
          <MainContainer>
            {data.map((movie, id) => {
              return <MovieCard key={id} movie={movie} />;
            })}
            {!isSearchData ? (
              <Pagination
                currentPage={page}
                onPageChange={onPageChangeHandler}
                showIcons={true}
                totalPages={100}
              />
            ) : null}
          </MainContainer>
        )}
      </OuterContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
  width: 80vw;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
