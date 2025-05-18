export type Filial = {
  id: number;
  name: string;
};

export type TT = {
  id: number;
  name: string;
};

export interface MenuData {
  max_pages: number;
  data: TMenu[];
}

export type TMenu = {
  id: number;
  name: string;
  filial: Filial;
  tt: TT;
  active: boolean;
  export: string[];
};
