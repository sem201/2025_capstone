import { useEffect, useState } from "react";
import { ApiInstance } from "@api/ApiInstance";
import { LogData } from "@custom-types/types";

export function useLogList(apiPath: string, dateProp?: string | null) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [date, setDate] = useState<string | null>(null);
  const [data, setData] = useState<LogData[] | null>(null);

  useEffect(() => {
    if (dateProp) {
      setDate(dateProp);
    } else if (date === null) {
      const ex = new Date();
      const isoString = ex.toISOString();
      const formattedDate =
        isoString.replace("Z", "") + Math.random().toString().slice(2, 8);
      setDate(formattedDate);
    }
  }, [dateProp]);

  useEffect(() => {
    const fetchData = async () => {
      if (date) {
        try {
          const response = await ApiInstance.get(apiPath, {
            params: { date: date },
          });
          setData(response.data.data);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchData();
  }, [date, apiPath]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
    console.log("data", data);
  };
  return { currentPage, totalPages, date, data, setDate, handlePageChange };
}
