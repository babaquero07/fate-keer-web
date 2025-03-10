import { useState } from "react";
import { CreateMagicalGirl, MagicalGirl } from "../interfaces/MagicalGirl";
import { StatusOption } from "../utils/constants";

const API_URL = import.meta.env.VITE_API_URL;

const useMagicalGirls = () => {
  const [magicalGirls, setMagicalGirls] = useState<MagicalGirl[]>([]);
  const [magicalGirl, setMagicalGirl] = useState<MagicalGirl | null>(null);
  const [filteredGirls, setFilteredGirls] = useState<MagicalGirl[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getMagicalGirls = async () => {
    try {
      setIsLoading(true);

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

  const getMagicalGirlById = async (id: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/magical-girls/${id}`);
      if (response.status === 404) {
        throw new Error("Magical girl not found");
      }

      const { data } = await response.json();
      setMagicalGirl(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByStatus = (status: StatusOption) => {
    if (status === "All") {
      setFilteredGirls(magicalGirls);
      return;
    }

    const filtered = magicalGirls.filter((girl) => girl.status === status);
    setFilteredGirls(filtered);
  };

  const saveStatusLog = async (magical_girl_id: number, status: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/status-logs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          magical_girl_id,
          observation: `Status changed from ${magicalGirl?.status} to ${status}`,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to save status log");
      }

      const { data } = await response.json();
      setMagicalGirl(data.magical_girl);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`${API_URL}/magical-girls/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Failed to save status");
      }

      await saveStatusLog(+id, status);
    } catch (error) {
      setError(error as Error);
    }
  };

  const createMagicalGirl = async (magicalGirl: CreateMagicalGirl) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/magical-girls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(magicalGirl),
      });
      if (!response.ok) {
        throw new Error("Failed to create magical girl");
      }

      const { data } = await response.json();
      setMagicalGirls([...magicalGirls, data.magicGirl]);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getMagicalGirls,
    magicalGirls: filteredGirls,
    getMagicalGirlById,
    magicalGirl,
    filterByStatus,
    isLoading,
    error,
    saveStatus,
    createMagicalGirl,
  };
};

export default useMagicalGirls;
