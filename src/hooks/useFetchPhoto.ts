/*
 * ARCHIVO NO USADO - SOLO COMO REFERENCIA EDUCATIVA
 *
 * RAZÓN: Si un hook solo se usa en UN componente, es mejor
 * poner la lógica directamente en ese componente.
 *
 * Los hooks custom son útiles cuando:
 * - Se reutiliza la lógica en VARIOS componentes
 * - La lógica es muy compleja y ensucia el componente
 *
 * En este caso, como solo se usa en Header, la lógica
 * está directamente en Header.tsx usando useQuery.
 *
 * ----------------------------------------------------------------
 * COMPARACIÓN: TanStack Query vs Zustand
 * ----------------------------------------------------------------
 *
 *  TanStack Query (React Query) - MEJOR para peticiones HTTP:
 * - Maneja automáticamente: loading, error, caché, reintentos
 * - Optimizado para datos del servidor
 * - Sincroniza datos entre componentes automáticamente
 * - Refresca datos cuando la ventana vuelve a tener foco
 *
 *  Zustand - MEJOR para estado de la aplicación:
 * - Estado global compartido (ej: usuario logueado, tema dark/light)
 * - Datos que NO vienen del servidor
 * - Estado que modificas desde varios sitios
 *
 * EJEMPLO con TanStack Query (la forma actual):
 */

import { useQuery } from "@tanstack/react-query";

export const useFetchPhotoEjemplo = (tema: string) => {
  const query = useQuery<string, Error>({
    queryKey: ["header-photo", tema],
    queryFn: async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Falta VITE_UNSPLASH_ACCESS_KEY en .env");
      }

      const urlApi = `https://api.unsplash.com/photos/random?query=${tema}&orientation=landscape&client_id=${accessKey}`;
      const res = await fetch(urlApi);

      if (!res.ok) {
        throw new Error(`Error HTTP ${res.status}`);
      }

      const data = await res.json();

      if (!data?.urls?.regular) {
        throw new Error("Sin URL de imagen");
      }

      return data.urls.regular;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 1,
  });

  return {
    fotoUrl: query.data ?? "",
    cargando: query.isLoading,
    error: query.error ? "No se pudo cargar la imagen del header" : null,
  };
};

/*
OPCIÓN ALTERNATIVA (ZUSTAND) - SOLO REFERENCIA

Archivo store (useHeaderStore.ts):

import { create } from "zustand";

interface HeaderState {
  fotoUrl: string;
  setFotoUrl: (url: string) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  fotoUrl: "",
  setFotoUrl: (url) => set({ fotoUrl: url }),
}));

Hook con Zustand:

import { useEffect, useState } from "react";
import { useHeaderStore } from "../store/useHeaderStore";

export const useFetchPhoto = (tema: string) => {
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const setFotoUrl = useHeaderStore((state) => state.setFotoUrl);

  useEffect(() => {
    const obtenerFoto = async () => {
      try {
        setCargando(true);
        setError(null);

        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

        if (!accessKey) {
          throw new Error("Falta VITE_UNSPLASH_ACCESS_KEY en .env");
        }

        const urlApi = `https://api.unsplash.com/photos/random?query=${tema}&orientation=landscape&client_id=${accessKey}`;
        const res = await fetch(urlApi);

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(errorText || `Error HTTP ${res.status}`);
        }

        const data = await res.json();

        if (!data?.urls?.regular) {
          throw new Error("Sin URL de imagen");
        }

        setFotoUrl(data.urls.regular);
      } catch {
        setError("No se pudo cargar la imagen del header");
      } finally {
        setCargando(false);
      }
    };

    obtenerFoto();
  }, [tema, setFotoUrl]);

  return { cargando, error };
};

Header con Zustand:

import { useFetchPhoto } from "../../hooks/useFetchPhoto";
import { useHeaderStore } from "../../store/useHeaderStore";

const { cargando, error } = useFetchPhoto("nature");
const fotoUrl = useHeaderStore((state) => state.fotoUrl);
*/
