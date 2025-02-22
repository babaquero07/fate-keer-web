import { useState } from "react";
import { MagicalGirl } from "../interfaces/MagicalGirl";
import { StatusOption } from "../utils/constants";

const API_URL = import.meta.env.VITE_API_URL;

const useMagicalGirls = () => {
  const [magicalGirls, setMagicalGirls] = useState<MagicalGirl[]>([]);
  const [filteredGirls, setFilteredGirls] = useState<MagicalGirl[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const getMagicalGirls = async () => {
    try {
      const response = await fetch(`${API_URL}/magical-girls`);
      if (!response.ok) {
        throw new Error("Failed to fetch magical girls");
      }

      const { data } = await response.json();

      setMagicalGirls(data);
      setFilteredGirls(data);
    } catch (error) {
      console.error("Error fetching magical girls:", error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByStatus = (status: StatusOption) => {
    if (status === "all") {
      setFilteredGirls(magicalGirls);
      return;
    }

    const filtered = magicalGirls.filter(
      (girl) => girl.status.toLowerCase() === status
    );
    setFilteredGirls(filtered);
  };

  return {
    getMagicalGirls,
    magicalGirls: filteredGirls,
    filterByStatus,
    isLoading,
    error,
  };
};

export default useMagicalGirls;
