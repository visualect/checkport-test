interface Props {
  onMenuSelect: (newVal: string) => void;
  activeMenu: string | null;
}

export default function Menu({ onMenuSelect, activeMenu }: Props) {
  return (
    <ul className="flex flex-col gap-[10px]">
      {MENU_ITEMS.map((item) => (
        <li
          onClick={() => onMenuSelect(item.name)}
          key={item.name}
          className={` ${activeMenu === item.name ? "bg-blue-950 text-white" : "text-c-dark-blue bg-transparent"}cursor-pointer p-[5px_10px] hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] ease-out transition`}
        >
          - {item.label}
        </li>
      ))}
    </ul>
  );
}

const MENU_ITEMS = [
  {
    name: "components",
    label: "Компоненты",
  },
  {
    name: "polufabrikaty",
    label: "Полуфабрикаты",
  },
  {
    name: "tavari",
    label: "Товары",
  },
  {
    name: "menu",
    label: "Меню",
  },
  {
    name: "vipusk",
    label: "Выпуск товара",
  },
  {
    name: "spisanie",
    label: "Cписание",
  },
  {
    name: "nakladnie",
    label: "Накладные",
  },
];
