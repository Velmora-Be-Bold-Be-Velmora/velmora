'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '../../components/admin/Header';
import Sidebar from '../../components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Sidebar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}