import Branches from "./components/shared/Branches";
import CompanyInfo from "./components/shared/CompanyInfo";

function App() {
  return (
    <main
      style={{
        fontFamily: "Montserrat",
      }}
      className="container text-c-dark-blue"
    >
      <div className="w-full py-10">
        <div className="flex flex-col gap-[15px] w-[275px]">
          <CompanyInfo
            name="Название компании"
            owner="Лоскутникова В.П."
            logo={null}
          />
          <Branches />
        </div>
      </div>
    </main>
  );
}

export default App;
