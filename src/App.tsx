import { useEffect, useState } from "react";
import Branches from "./components/shared/Branches";
import CompanyInfo from "./components/shared/CompanyInfo";
import { type IQueryParams, type Filial, type MenuData } from "./types/types";
import Filters from "./components/shared/Filters";
import Table from "./components/shared/Table";

function App() {
  const [filials, setFilials] = useState<Filial[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedFilial, setSelectedFilial] = useState<string | null>(null);
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    limit: 10,
    page: 1,
    name: "",
    filial: "",
    tt: "",
    active: null,
  });

  const handleStatusFilter = (newVal: IQueryParams["active"]) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        active: newVal,
      };
    });
  };

  const handleInputFilter = (key: string, newVal: string) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        [key]: newVal.trim(),
      };
    });
  };

  const getQueryParams = (params: typeof queryParams) => {
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        searchParams.set(key, String(value));
      } else {
        searchParams.delete(key);
      }
    }
    return searchParams;
  };

  const fetchMenu = async (
    id: string,
    selectedMenu: string,
    queryParams: URLSearchParams,
  ) => {
    const data = await fetch(
      import.meta.env.VITE_BACKEND_URL +
        `/filial/${id}/${selectedMenu}/?${queryParams}`,
    ).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    });
    return data;
  };

  useEffect(() => {
    let ignore = false;
    const params = getQueryParams(queryParams);

    if (selectedFilial && selectedMenu) {
      if (selectedMenu === "menu") {
        fetchMenu(selectedFilial, selectedMenu, params).then((data) => {
          if (!ignore) {
            setMenuData(data);
          }
        });
      } else {
        if (!ignore) {
          setMenuData(null);
        }
      }
    }
    return () => {
      ignore = true;
    };
  }, [selectedFilial, selectedMenu, queryParams]);

  const fetchFilials = async () => {
    const data = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/filial/",
    ).then((res) => res.json());
    return data;
  };

  useEffect(() => {
    let ignore = false;
    fetchFilials().then((data) => {
      if (!ignore) {
        setFilials(data);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main
      style={{
        fontFamily: "Montserrat",
      }}
      className="container text-c-dark-blue"
    >
      <div className="grid grid-cols-10 gap-8 py-10">
        <div className="col-span-2 w-full flex flex-col gap-[15px]">
          <CompanyInfo
            name="Название компании"
            owner="Лоскутникова В.П."
            logo={null}
          />
          <Branches
            filials={filials}
            setFilials={setFilials}
            activeMenu={selectedMenu}
            activeFilial={selectedFilial}
            onMenuSelect={setSelectedMenu}
            onFilialSelect={setSelectedFilial}
          />
        </div>
        <div className="col-span-8 flex flex-col gap-[30px] w-full">
          <Filters
            queryParams={queryParams}
            handleStatusFilter={handleStatusFilter}
            handleInputFilter={handleInputFilter}
          />
          <Table data={menuData} />
          {menuData && (
            <ul className="flex justify-center items-center gap-2 w-full">
              {Array.from({ length: menuData.max_pages }, (_, i) => i + 1)
                .slice(0, 3)
                .map((n) => (
                  <li
                    onClick={() =>
                      setQueryParams((prev) => {
                        return {
                          ...prev,
                          page: n,
                        };
                      })
                    }
                    className="cursor-pointer"
                  >
                    {n}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
