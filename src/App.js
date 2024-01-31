import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

const Blog = lazy(() => import("./pages/Blog"));
const Work = lazy(() => import("./pages/Work"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div className="py-5 my-4 text-center">
                    lazy Loading😁😁...
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/works"
            element={
              <Suspense
                fallback={
                  <div className="py-5 my-4 text-center">
                    lazy Loading😁😁...
                  </div>
                }
              >
                <Work />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense
                fallback={
                  <div className="py-5 my-4 text-center">
                    lazy Loading😁😁...
                  </div>
                }
              >
                <Resume />
              </Suspense>
            }
          />

          <Route
            path="/blog"
            element={
              <Suspense
                fallback={
                  <div className="py-5 my-4 text-center">
                    lazy Loading😁😁...
                  </div>
                }
              >
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div className="py-5 my-4 text-center">
                    lazy Loading😁😁...
                  </div>
                }
              >
                <Error />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
