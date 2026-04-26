import { Badge, Group, Text } from "@mantine/core";
import styles from "./ProductCard.module.css";

type Product = {
  id: string | number;
  name?: string;
  brand?: string;
  price?: number;
  discount_price?: number;
  currency?: string;
  sku?: string;
  stock_quantity?: number;
  is_in_stock?: boolean;
  rating_avg?: number;
  rating_count?: number;
  short_description?: string;
  main_image?: string;
  is_featured?: boolean;
  is_new?: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  const price = product.price ?? 0;
  const discount = product.discount_price ?? null;
  const hasDiscount = discount !== null && discount < price;
  const formattedPrice = `${product.currency ?? "INR"} ${price.toFixed(2)}`;
  const formattedDiscount = hasDiscount ? `${product.currency ?? "INR"} ${discount!.toFixed(2)}` : null;
  const savings = hasDiscount ? price - discount! : 0;
  const stockLabel = product.is_in_stock ? "In stock" : "Out of stock";

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={product.main_image ?? "/img/default-product.jpg"}
          alt={product.name ?? "Product"}
          className={styles.image}
        />
        {product.is_new && <span className={styles.badgeNew}>New</span>}
        {product.is_featured && <span className={styles.badgeFeatured}>Featured</span>}
      </div>

      <div className={styles.body}>
        <Group justify="space-between" align="flex-start" className={styles.header}>
          <div>
            <Text component="h3" className={styles.title} lineClamp={2}>
              {product.name}
            </Text>
            {product.brand && <Text className={styles.brand}>{product.brand}</Text>}
          </div>
          <Badge className={styles.stockBadge} color={product.is_in_stock ? "green" : "red"}>
            {stockLabel}
          </Badge>
        </Group>

        <Text className={styles.description} lineClamp={3}>
          {product.short_description ?? product.sku ?? "No description available."}
        </Text>

        <div className={styles.priceRow}>
          <div>
            <Text className={styles.price}>{formattedDiscount ?? formattedPrice}</Text>
            {hasDiscount ? <Text className={styles.originalPrice}>{formattedPrice}</Text> : null}
          </div>
          {hasDiscount ? <Text className={styles.savings}>Save {product.currency ?? "INR"} {savings.toFixed(2)}</Text> : null}
        </div>

        <Group className={styles.footer} justify="space-between" gap="xs">
          <Text className={styles.rating}>{product.rating_avg?.toFixed(1) ?? "0.0"} ★</Text>
          <Text className={styles.reviews}>{product.rating_count ?? 0} reviews</Text>
        </Group>
      </div>
    </article>
  );
}
