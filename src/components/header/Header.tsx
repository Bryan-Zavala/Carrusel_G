import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";

const fetchHeaderPhoto = async (theme: string) => {
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Falta API Key");
  }

  const query = encodeURIComponent(theme);
  const urlApi = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${accessKey}`;
  const res = await fetch(urlApi);

  if (res.ok === false) {
    throw new Error(`Error del servidor: ${res.status}`);
  }

  const data = await res.json();

  if (!data || !data.urls || !data.urls.regular) {
    throw new Error("La API no contiene una imagen válida");
  }

  const fotoFinal = data.urls.regular;

  return fotoFinal;
};

type HeaderProps = {
  theme?: string;
};

export default function Header({ theme = "nature" }: HeaderProps) {
  const {
    data: fotoUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["header-photo", theme],
    queryFn: () => fetchHeaderPhoto(theme),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className={styles.container}>
        <p>Cargando ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p>Error al cargar imagen</p>
      </div>
    );
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${fotoUrl})` }}
    ></div>
  );
}
