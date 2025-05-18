import type { IQueryParams, MenuData } from "../../types/types";

interface IPagination {
  data: MenuData | null;
  handleFiltering: (key: keyof IQueryParams, value: string) => void;
}

export default function Pagination({ data, handleFiltering }: IPagination) {
  if (!data || data.max_pages === 1) return null;

  return (
    <ul className="flex justify-center items-center gap-2 w-full">
      {Array.from({ length: data.max_pages }, (_, i) => i + 1)
        .slice(0, 3)
        .map((n) => (
          <li
            onClick={() => handleFiltering("page", String(n))}
            className="px-3 py-2 bg-white text-[13px] border border-gray-200 rounded-c-medium cursor-pointer"
          >
            {n}
          </li>
        ))}
    </ul>
  );
}
