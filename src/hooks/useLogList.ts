import { useEffect, useState } from "react";
import { ApiInstance } from "@api/ApiInstance";
import { LogData } from "@custom-types/types";
import { useModalStore } from "@store/modalStore";

export function useLogList(apiPath: string) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [data, setData] = useState<LogData[] | null>(null);
  const { shouldUpdateLogList, setShouldUpdateLogList } = useModalStore();

  useEffect(() => {
    const fetchData = async () => {
      const date = new Date();
      const isoString = date.toISOString();
      const formattedDate =
        isoString.replace("Z", "") + Math.random().toString().slice(2, 8);

      try {
        const response = await ApiInstance.get(apiPath, {
          params: { date: formattedDate },
        });
        setData(response.data.data);
        setShouldUpdateLogList(false);
      } catch (e) {
        console.log(e);
      }
    };

    if (shouldUpdateLogList) {
      console.log("데이터 가져오기 실행");
      fetchData();
    }
  }, [shouldUpdateLogList, apiPath, setShouldUpdateLogList]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return { currentPage, totalPages, data, handlePageChange };
}
