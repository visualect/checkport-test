import type { MenuData } from "../../types/types";

interface ITable {
  data: MenuData | null;
}

export default function Table({ data }: ITable) {
  if (!data) return null;

  return (
    <table className="w-full">
      <tbody className="flex flex-col gap-4">
        {data.data.map((menu) => (
          <tr className="grid grid-cols-6 gap-4">
            <td>{menu.name}</td>
            <td>{menu.filial.name}</td>
            <td>{menu.tt.name}</td>
            <td>{menu.active ? "Активно" : "Не активно"}</td>
            <td>{menu.export.join(", ")}</td>
            <td>knopki</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
