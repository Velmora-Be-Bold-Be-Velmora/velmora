"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Center, Loader, Text } from "@mantine/core";
import Cards from "../components/Cards";
import classes from "./Home.module.css";
type Category = {
  id: string | number;
  name: string;
  slug?: string;
  offer?: string;
  description?: string;
  image_url?: string;
  icon?: string;
  parent_id?: string | number | null;
  is_active?: boolean;
  is_featured?: boolean;
  sort_order?: number;
};

type CategorySection = {
  parent: Category;
  children: Category[];
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

  const sectionData = (): CategorySection[] => {
    const rootCategories = categories.filter((category) => category.parent_id == null);
    const childrenByParent = categories.reduce<Record<string, Category[]>>((acc, category) => {
      const parentId = category.parent_id?.toString();
      if (parentId) {
        if (!acc[parentId]) {
          acc[parentId] = [];
        }
        acc[parentId].push(category);
      }
      return acc;
    }, {});

    return rootCategories.map((parent) => ({
      parent,
      children: childrenByParent[parent.id.toString()] ?? [],
    }));
  };

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

  const sections = sectionData();

  return (
    <>
    <Text className={classes.sectionTitle}>Shop By Category</Text>
      {sections.length > 0 ? (
        sections.map(({ parent, children }) => (
          <section key={parent.id} className={classes.categoryGroup}>
            <Text className={classes.parentSectionTitle}>{parent.name}</Text>
            <div className={classes.categorySection}>
              {children.length > 0 ? (
                children.map((category) => (
                  <Cards
                    key={category.id}
                    title={category.name}
                    offer={category.offer}
                    description={category.description ?? ""}
                    image={category.image_url ?? "/img/default-category.jpg"}
                  />
                ))
              ) : (
                <Cards
                  key={parent.id}
                  title={parent.name}
                  offer={parent.offer}
                  description={parent.description ?? ""}
                  image={parent.image_url ?? "/img/default-category.jpg"}
                />
              )}
            </div>
          </section>
        ))
      ) : (
        <Text>No categories found.</Text>
      )}
    </>
  );
}
