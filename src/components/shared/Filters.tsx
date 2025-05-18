import Input from "../ui/Input";
import Select from "../ui/Select";

export default function Filters() {
  return (
    <div className="grid grid-cols-6 gap-[30px] w-full pb-5 border-b border-c-dark-blue">
      <Input placeholder="Название меню" />
      <Input placeholder="Филиал" />
      <Input placeholder="Торговая точка" />
      <Select
        placeholder="Активность"
        value={""}
        onChange={(newVal) => {
          console.log(newVal);
        }}
        options={["active", "no_active"]}
      />
      <p className="text-[18px] font-medium opacity-80">Экспорт</p>
    </div>
  );
}
