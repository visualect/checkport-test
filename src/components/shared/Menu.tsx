export default function Menu() {
  return (
    <ul className="flex flex-col gap-[10px]">
      {MENU_ITEMS.map((item) => (
        <li className="cursor-pointer p-[5px_10px] hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)] ease-out transition">
          - {item}
        </li>
      ))}
    </ul>
  );
}

const MENU_ITEMS = [
  "Компоненты",
  "Полуфабрикаты",
  "Товары",
  "Меню",
  "Перемещение",
  "Инвентаризация",
  "Выпуск товара",
  "Cписание",
  "Накладные",
];
