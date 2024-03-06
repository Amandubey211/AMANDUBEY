import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
// import axios from "axios";
// import toast from "react-hot-toast";

const Blog = lazy(() => import("./pages/Blog"));
const Work = lazy(() => import("./pages/Work"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));
function App() {
  // const [loading, setLoading] = useState(true);
  // const AnimationLoading = document.getElementById("loading-animation");
  // useEffect(() => {
  //   let timeid;
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get("/api/check");
  //       if (!data.success) {
  //         console.log("failed")
  //         toast.error("Failed to fetch data");
  //         throw new Error("Failed to fetch data");
  //       } else {
  //         AnimationLoading.style.display = "none";
  //         setLoading(false);
  //         timeid = setTimeout(() => {
  //           toast.success("welcome");
  //         }, 1000);
  //       }
  //     } catch (error) {
  //       toast.error("something went wrong");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  //   return () => {
  //     clearTimeout(timeid);
  //   };
  // }, []);

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
