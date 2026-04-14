'use client';

import { AppShell, Burger, Group, Text, Avatar, Menu, ActionIcon, Indicator } from '@mantine/core';
import { IconBell, IconUser, IconLogout, IconSettings, IconLayoutSidebar } from '@tabler/icons-react';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export default function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <ActionIcon variant="subtle" size="lg" visibleFrom="sm" onClick={toggle}>
            <IconLayoutSidebar size={20} />
          </ActionIcon>
          <Text fw={700} size="lg">Velmora Admin</Text>
        </Group>

        <Group>
          <Indicator color="red" size={8} processing>
            <ActionIcon variant="subtle" size="lg">
              <IconBell size={20} />
            </ActionIcon>
          </Indicator>

          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Avatar radius="xl" size="md" style={{ cursor: 'pointer' }}>
                <IconUser size={20} />
              </Avatar>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Account</Menu.Label>
              <Menu.Item leftSection={<IconUser size={14} />}>
                Profile
              </Menu.Item>
              <Menu.Item leftSection={<IconSettings size={14} />}>
                Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item leftSection={<IconLogout size={14} />} color="red">
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </AppShell.Header>
  );
}