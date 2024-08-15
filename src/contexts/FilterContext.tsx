import React, { useState } from "react";

interface FilterContextType {
  search: string;
  setSearch: (search: string) => void;
  listStatus: string;
  setListStatus: (listStatus: string) => void;
  page: number;
  setPage: (page: number) => void;
}

export const FilterContext = React.createContext<FilterContextType>({
  search: "",
  setSearch: () => {},
  listStatus: "2",
  setListStatus: () => {},
  page: 1,
  setPage: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [listStatus, setListStatus] = useState<string>("2");
  const [page, setPage] = useState<number>(1);

  return <FilterContext.Provider value={{ search, setSearch, listStatus, setListStatus, page, setPage }}>{children}</FilterContext.Provider>;
};
