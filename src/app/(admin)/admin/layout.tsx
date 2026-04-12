'use client';

import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* HEADER */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Text fw={700}>Velmora Admin</Text>
        </Group>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar p="md">
        <Text>Dashboard</Text>
        <Text>Products</Text>
        <Text>Orders</Text>
        <Text>Users</Text>
      </AppShell.Navbar>

      {/* MAIN CONTENT */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}