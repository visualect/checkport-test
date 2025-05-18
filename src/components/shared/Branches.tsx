import Menu from "./Menu";
import type { Filial } from "../../types/types";
import { Select, SelectItem } from "../ui/Select";

interface IBranches {
  filials: Filial[];
  setFilials: (newFilials: Filial[]) => void;
  activeFilial: string;
  activeMenu: string;
  onMenuSelect: (newVal: string) => void;
  onFilialSelect: (newVal: string) => void;
}

export default function Branches({
  filials,
  activeFilial,
  activeMenu,
  onMenuSelect,
  onFilialSelect,
}: IBranches) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[5px] pb-[10px] border-b border-c-dark-blue">
        <label className="text-c-dark-blue/50">Филиалы</label>
        {filials.length > 0 ? (
          <Select
            onChange={(newVal) => onFilialSelect(newVal)}
            value={activeFilial}
            placeholder="Выберите город"
          >
            {filials.map((f) => (
              <SelectItem key={f.id} value={String(f.id)}>
                {f.name}
              </SelectItem>
            ))}
          </Select>
        ) : (
          <p className="h-[30px]">Загрузка...</p>
        )}
      </div>
      <Menu onMenuSelect={onMenuSelect} activeMenu={activeMenu} />
    </div>
  );
}
