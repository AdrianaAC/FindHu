import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import DetailsCard from "./components/DetailsCard";
import Pagination from "./components/Pagination";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <div>
      <div className="app-container">
        <header>
          <TopNavBar />
          <Header />
        </header>
        <main className="main-content">
          <div className="main-container">
            <Sidebar />
            <section>
              <DetailsCard />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
