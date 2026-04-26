'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Loader, Text } from "@mantine/core";
import Cards from "../components/Cards";

type Category = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  image_url?: string;
  icon?: string;
  is_active?: boolean;
  is_featured?: boolean;
  sort_order?: number;
};

export default function ShopByCategorySection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get("/api/v1/store/categories", { signal: controller.signal })
      .then((response) => {
        setCategories(response.data?.data?.categories ?? []);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(err.message || "Failed to load categories");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <Center py="xl">
        <Loader />
      </Center>
    );
  }

  if (error) {
    return <Text color="red">{error}</Text>;
  }

  return (
    <>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Cards
            key={category.id}
            title={category.name}
            description={category.description ?? ""}
            image={category.image_url ?? "/img/default-category.jpg"}
          />
        ))
      ) : (
        <Text>No categories found.</Text>
      )}
    </>
  );
}

