'use client';

import { AppShell, NavLink, Text, Stack } from '@mantine/core';
import { IconDashboard, IconPackage, IconShoppingCart, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <AppShell.Navbar p="md">
      <Stack gap="xs">
        <Text size="sm" fw={500} c="dimmed" mb="sm">Navigation</Text>

        <NavLink
          component={Link}
          href="/admin"
          label="Dashboard"
          leftSection={<IconDashboard size={16} />}
          active={pathname === '/admin'}
        />

        <NavLink
          component={Link}
          href="/admin/products"
          label="Products"
          leftSection={<IconPackage size={16} />}
          active={pathname === '/admin/products'}
        />

        <NavLink
          component={Link}
          href="/admin/orders"
          label="Orders"
          leftSection={<IconShoppingCart size={16} />}
          active={pathname === '/admin/orders'}
        />

        <NavLink
          component={Link}
          href="/admin/users"
          label="Users"
          leftSection={<IconUsers size={16} />}
          active={pathname === '/admin/users'}
        />
      </Stack>
    </AppShell.Navbar>
  );
}    