import Branches from "./components/shared/Branches";
import CompanyInfo from "./components/shared/CompanyInfo";
import Filters from "./components/shared/Filters";
import Table from "./components/shared/Table";
import Pagination from "./components/shared/Pagination";
import useMenu from "./hooks/useMenu";
import useFilials from "./hooks/useFilials";

function App() {
  const {
    handleFiltering,
    setSelectedMenu,
    selectedFilial,
    selectedMenu,
    setSelectedFilial,
    queryParams,
    menuData,
  } = useMenu();

  const { filials, setFilials } = useFilials();

  return (
    <main
      style={{
        fontFamily: "Montserrat",
      }}
      className="container text-c-dark-blue"
    >
      <div className="grid grid-cols-10 gap-8 py-10">
        <div className="col-span-full lg:col-span-2 w-full flex flex-col gap-[24px]">
          <CompanyInfo name="Назв. компании" owner="Лоскутникова В.П." />
          <Branches
            filials={filials}
            setFilials={setFilials}
            activeMenu={selectedMenu}
            activeFilial={selectedFilial}
            onMenuSelect={setSelectedMenu}
            onFilialSelect={setSelectedFilial}
          />
        </div>
        <div className="col-span-full lg:col-span-8 flex flex-col gap-[30px] w-full">
          <div className="w-full overflow-auto">
            <div className="min-w-[800px] my-10">
              <Filters
                queryParams={queryParams}
                handleFiltering={handleFiltering}
              />
              <Table data={menuData} />
            </div>
          </div>
          <Pagination data={menuData} handleFiltering={handleFiltering} />
        </div>
      </div>
    </main>
  );
}

export default App;
