import { useEffect, useState } from "react";
import type { IQueryParams, MenuData } from "../types/types";
import getQueryParams from "../utils/getQueryParams";

export default function useMenu() {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedFilial, setSelectedFilial] = useState("");
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    limit: 10,
    page: 1,
    name: "",
    filial: "",
    tt: "",
    active: "",
  });

  const handleFiltering = (key: keyof IQueryParams, newVal: string) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        [key]: newVal.trim(),
      };
    });
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

  return {
    menuData,
    handleFiltering,
    selectedMenu,
    selectedFilial,
    setSelectedFilial,
    setSelectedMenu,
    queryParams,
  };
}
