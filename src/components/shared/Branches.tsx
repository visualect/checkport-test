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
    <div className="flex flex-col gap-[10px] bg-white rounded-c-medium p-[15px] border-gray-200 border">
      <div className="flex flex-col gap-[5px] pb-[10px] border-b border-gray-200">
        <label className="text-c-gray text-sm">Филиалы</label>
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
          <p className="flex w-full justify-center items-center text-[13px] h-[35px]">
            Загрузка...
          </p>
        )}
      </div>
      <Menu onMenuSelect={onMenuSelect} activeMenu={activeMenu} />
    </div>
  );
}
