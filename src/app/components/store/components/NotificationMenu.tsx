import { Menu, ActionIcon, Indicator } from '@mantine/core';
import { IconBell } from '@tabler/icons-react';

export default function NotificationMenu() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <Menu shadow="md" width={260} position="top-end">
        <Menu.Target>
          <Indicator inline color="red" size={8}>
            <ActionIcon variant="filled" size="lg" radius="xl">
              <IconBell size={22} />
            </ActionIcon>
          </Indicator>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Notifications</Menu.Label>
          <Menu.Item>🔥 Big Sale is Live</Menu.Item>
          <Menu.Item>🛒 Your order shipped</Menu.Item>
          <Menu.Item>💖 Wishlist item on discount</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}