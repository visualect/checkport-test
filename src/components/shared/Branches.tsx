import { useState } from "react";
import Select from "../ui/Select";
import Menu from "./Menu";
import type { Filial } from "../../types/types";

export default function Branches() {
  const [selectedFilial, setSelectedFilial] = useState("");
  const [filials, setFilials] = useState<Filial[]>([]);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[5px] pb-[10px] border-b border-c-dark-blue">
        <label className="text-c-dark-blue/50">Филиалы</label>
        {filials.length > 0 ? (
          <Select
            onChange={(newVal) => setSelectedFilial(newVal)}
            value={selectedFilial}
            options={filials.map((f) => f.name)}
            placeholder="Выберите город"
          />
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
      <Menu />
    </div>
  );
}
