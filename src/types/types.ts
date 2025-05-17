export type Filial = {
  id: number;
  name: string;
};

export type TT = {
  id: number;
  name: string;
};

export type Menu = {
  id: number;
  name: string;
  filial: Filial;
  tt: TT;
  active: boolean;
  export: string[];
};
