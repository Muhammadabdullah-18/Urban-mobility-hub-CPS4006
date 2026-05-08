import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱ 1 second loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}