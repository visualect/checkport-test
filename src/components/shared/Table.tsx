import type { MenuData } from "../../types/types";
import { VscGraph } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

interface ITable {
  data: MenuData | null;
}

export default function Table({ data }: ITable) {
  if (!data)
    return (
      <p className="flex justify-center w-full text-medium text-c-dark-blue text-lg py-20">
        Ничего не найдено
      </p>
    );

  return (
    <table className="w-full text-[13px]">
      <tbody className="flex flex-col gap-4">
        {data.data.map((menu) => (
          <tr className="grid grid-cols-6 gap-4 border-b border-gray-200 pb-2">
            <td className="truncate">{menu.name}</td>
            <td className="truncate">{menu.filial.name}</td>
            <td className="truncate">{menu.tt.name}</td>
            <td>{menu.active ? "Активно" : "Не активно"}</td>
            <td>{menu.export.join(", ")}</td>
            <td className="flex items-center gap-2">
              <VscGraph
                className="cursor-pointer ease-out transition-transform hover:-translate-y-1"
                size={16}
              />
              <CiEdit
                className="cursor-pointer ease-out transition-transform hover:-translate-y-1"
                size={16}
              />
              <CiTrash
                className="cursor-pointer ease-out transition-transform hover:-translate-y-1"
                size={16}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
