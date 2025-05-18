import { useEffect, useState } from "react";
import type { Filial } from "../types/types";

export default function useFilials() {
  const [filials, setFilials] = useState<Filial[]>([]);

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

  return { filials, setFilials };
}
