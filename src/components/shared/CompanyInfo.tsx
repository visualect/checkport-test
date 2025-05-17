import Logo from "./Logo";
import { IoDocumentTextOutline } from "react-icons/io5";

interface ICompanyInfo {
  name: string;
  owner: string;
  logo: string | null;
}

export default function CompanyInfo({ name, owner, logo }: ICompanyInfo) {
  return (
    <div className="flex flex-col gap-2 px-[15px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3 py-[10px] border-b border-c-dark-blue">
        <Logo src={logo} />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h2 className="opacity-80">{owner}</h2>
        </div>
      </div>
      <div className="flex items-center gap-[10px] py-[10px]">
        <IoDocumentTextOutline size={42} className="text-c-dark-blue" />
        <p className="font-semibold text-lg ">СКЛАДСКОЙ УЧЁТ</p>
      </div>
    </div>
  );
}
