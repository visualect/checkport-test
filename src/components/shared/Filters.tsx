import type { IQueryParams } from "../../types/types";
import Input from "../ui/Input";
import { Select, SelectItem } from "../ui/Select";

interface IFilters {
  handleFiltering: (key: keyof IQueryParams, newVal: string) => void;
  queryParams: IQueryParams;
}

export default function Filters({ handleFiltering, queryParams }: IFilters) {
  return (
    <div className="grid grid-cols-6 items-center gap-4 w-full pb-5 border-b border-gray-200">
      <Input
        value={queryParams.name}
        placeholder="Название меню"
        onChange={(e) => handleFiltering("name", e.target.value)}
      />
      <Input
        value={queryParams.filial}
        placeholder="Филиал"
        onChange={(e) => handleFiltering("filial", e.target.value)}
      />
      <Input
        value={queryParams.tt}
        placeholder="Торговая точка"
        onChange={(e) => handleFiltering("tt", e.target.value)}
      />
      <Select
        placeholder="Активность"
        value={queryParams.active}
        onChange={(newVal) => {
          handleFiltering("active", newVal);
        }}
      >
        {STATUS_ITEMS.map((st) => (
          <SelectItem key={st.value} value={st.value}>
            {st.label}
          </SelectItem>
        ))}
      </Select>
      <p className="text-[13px] font-medium opacity-80">Экспорт</p>
    </div>
  );
}

const STATUS_ITEMS = [
  {
    value: "active",
    label: "Активно",
  },
  {
    value: "no_active",
    label: "Не активно",
  },
];
