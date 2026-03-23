import { useNavigate } from "react-router-dom";

function ServicePage() {
  const navigate = useNavigate();
  const handleDelayedNav = () => {
    setTimeout(() => {
      navigate("/about");
    }, 2000);
  };
  
  return (
    <>
      <h2>Service Page</h2>
      <button onClick={handleDelayedNav}>Go to About after 2 seconds</button>
    </>
  );
}

export default ServicePage;