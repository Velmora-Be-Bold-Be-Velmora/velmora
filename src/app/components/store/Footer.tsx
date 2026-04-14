import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './FooterLinks.module.css';
import Image from 'next/image';

const data = [
  {
    title: 'Shop',
    links: [
      { label: 'New Arrivals', link: '#' },
      { label: 'Women', link: '#' },
      { label: 'Men', link: '#' },
      { label: 'Best Sellers', link: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', link: '#' },
      { label: 'Sustainability', link: '#' },
      { label: 'Careers', link: '#' },
      { label: 'Press', link: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Customer Service', link: '#' },
      { label: 'Shipping', link: '#' },
      { label: 'Returns', link: '#' },
      { label: 'Size Guide', link: '#' },
    ],
  },
];

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/img/logo.png" alt="Velmora Apparel Logo" width={120} height={80} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Premium clothing designed for everyday comfort, style, and sustainability.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2026 Velmora Apparel. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle" aria-label="Twitter">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" aria-label="Youtube">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" aria-label="Instagram">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}