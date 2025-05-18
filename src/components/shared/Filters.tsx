import type { IQueryParams } from "../../types/types";
import Input from "../ui/Input";
import Select, { Option } from "../ui/Select";

interface IFilters {
  handleStatusFilter: (newVal: IQueryParams["active"]) => void;
  handleInputFilter: (key: string, newVal: string) => void;
  queryParams: IQueryParams;
}
export default function Filters({
  handleInputFilter,
  handleStatusFilter,
  queryParams,
}: IFilters) {
  return (
    <div className="grid grid-cols-6 gap-4 w-full pb-5 border-b border-c-dark-blue">
      <Input
        value={queryParams.name}
        placeholder="Название меню"
        onChange={(e) => handleInputFilter("name", e.target.value)}
      />
      <Input
        value={queryParams.filial}
        placeholder="Филиал"
        onChange={(e) => handleInputFilter("filial", e.target.value)}
      />
      <Input
        value={queryParams.tt}
        placeholder="Торговая точка"
        onChange={(e) => handleInputFilter("tt", e.target.value)}
      />
      <Select
        placeholder="Активность"
        value={queryParams.active}
        onChange={(newVal) => {
          handleStatusFilter(newVal);
        }}
      >
        {STATUS_ITEMS.map((st) => (
          <Option value={st.value} label={st.label} />
        ))}
      </Select>
      <p className="text-[18px] font-medium opacity-80">Экспорт</p>
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
  {
    value: null,
    label: "Любой",
  },
];
