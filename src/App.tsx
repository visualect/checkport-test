import { useEffect, useState } from "react";
import Branches from "./components/shared/Branches";
import CompanyInfo from "./components/shared/CompanyInfo";
import type { Filial, MenuData } from "./types/types";
import Filters from "./components/shared/Filters";
import Table from "./components/shared/Table";

function App() {
  const [filials, setFilials] = useState<Filial[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedFilial, setSelectedFilial] = useState<number | null>(null);
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // const [name, setName] = useState("");
  // const [filial, setFilial] = useState("");
  // const [tt, setTT] = useState("");
  // const [status, setStatus] = useState<"active" | "not_active" | "">("");

  const fetchMenu = async (id: number, selectedMenu: string) => {
    const queryParams = `?limit=${limit}&page=${page}`;
    const data = await fetch(
      import.meta.env.VITE_BACKEND_URL +
        `/filial/${id}/${selectedMenu}/${queryParams}`,
    ).then((res) => res.json());
    return data;
  };

  useEffect(() => {
    let ignore = false;
    console.log(selectedFilial);
    if (selectedFilial && selectedMenu) {
      if (selectedMenu === "menu") {
        fetchMenu(selectedFilial, selectedMenu).then((data) => {
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
  }, [selectedFilial, selectedMenu]);

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
            filialValue={selectedFilial}
            onMenuSelect={setSelectedMenu}
            onFilialSelect={setSelectedFilial}
          />
        </div>
        <div className="col-span-8 flex flex-col gap-[30px] w-full">
          <Filters />
          <Table data={menuData} />
        </div>
      </div>
    </main>
  );
}

export default App;
