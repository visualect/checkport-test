import { IoDocumentTextOutline } from "react-icons/io5";

interface ICompanyInfo {
  name: string;
  owner: string;
}

export default function CompanyInfo({ name, owner }: ICompanyInfo) {
  return (
    <div className="flex flex-col px-[15px] border border-gray-200 bg-white rounded-c-medium">
      <div className="flex items-center justify-start gap-2 py-[10px] border-b border-gray-200">
        <div className="flex justify-center items-center bg-orange-600 rounded-full aspect-square h-auto w-[42px] text-white text-lg font-semibold">
          Ф
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-medium">{name}</h1>
          <h2 className="text-gray-500 text-sm opacity-80">{owner}</h2>
        </div>
      </div>
      <div className="flex justify-start items-center gap-[10px] py-[10px]">
        <IoDocumentTextOutline size={16} className="text-c-dark-blue" />
        <p className="font-medium text-sm ">СКЛАДСКОЙ УЧЁТ</p>
      </div>
    </div>
  );
}
