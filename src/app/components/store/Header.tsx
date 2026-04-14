'use client';

import { Anchor, Box, Burger, Button, Center, Collapse, Divider, Drawer, Group, HoverCard, ScrollArea, SimpleGrid, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import classes from './HeaderMegaMenu.module.css';
import { IconChevronDown, IconCode } from "@tabler/icons-react";
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from 'next/image';
const mockdata = [
    {
        icon: IconCode,
        title: 'Documentation',
        description: 'Learn how to integrate with our API'
    },
    {
        icon: IconCode,
        title: 'API Reference',
        description: 'Detailed API information and examples'
    },
    {
        icon: IconCode,
        title: 'Support',
        description: 'Get help from our support team'
    }
];



export default function HeaderMegaMenu() {
  const theme = useMantineTheme();
  const [drawerOpened, { toggle : toggleDrawer, close : closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle : toggleLinks }] = useDisclosure(false);
  const links = mockdata.map((item) => (
    <UnstyledButton key={item.title} className={classes.subLink}>
        <Group wrap="nowrap" align="flex-start">
            <ThemeIcon variant="default" size={34} radius={"md"}>
                <item.icon size={22} color={theme.colors.blue[6]} />
            </ThemeIcon>
            <div>
                <Text size="sm" fw={500}>
                    {item.title}
                </Text>
                <Text size="xs" c="dimmed">
                    {item.description}
                </Text>
            </div>
        </Group>
    </UnstyledButton>
  ));       
  return (
    <Box pb={120}>
        <header className={classes.header}>
            <Group justify="space-between" h="100%">
                <Image src="/img/logo.png" alt="Velmora Logo" width={80} height={40} style={{ marginRight: '1rem' }} />
                <Group h={"100%"} gap={0} visibleFrom="sm">
                    <a href="#" className={classes.link}>Home</a>
                    <HoverCard width={600} shadow="md" position="bottom" radius="md" withinPortal>
                        <HoverCard.Target>
                            <a href="#" className={classes.link}>
                            <Center inline>
                                <Box component="span" mr={5}>
                                    Products
                                </Box>
                                <IconChevronDown size={16} color={theme.colors.blue[6]} />
                            </Center>
                            </a>
                        </HoverCard.Target>

                        <HoverCard.Dropdown style={{overflow:'hidden'}}>
                            <Group justify="space-between" px={'md'}>
                                    <Text fw={500}>Products</Text>
                                    <Anchor href="#" fz={"xs"}>
                                        View all
                                    </Anchor>
                            </Group>
                            <Divider my="sm" />
                            <SimpleGrid cols={2} spacing="sm">
                                {links}
                            </SimpleGrid>
                            <div className={classes.dropdownFooter}>
                                <Group justify="space-between">
                                    <div>
                                        <Text fw={500} fz="sm">
                                            Get started
                                        </Text>
                                        <Text c="dimmed" fz="xs">
                                            Their food sources have decreased, and their numbers
                                        </Text>
                                    </div>
                                    <Button variant="default">
                                        Documentation
                                    </Button>
                                </Group>
                            </div>
                        </HoverCard.Dropdown>
                    </HoverCard>    
                    <a href="#" className={classes.link}>About</a>
                    <a href="#" className={classes.link}>Contact</a>
                </Group>
                <Group visibleFrom="sm">
                        <Button variant="default">Login</Button>
                        <Button>Sign Up</Button>
                </Group>
                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" aria-label="Toggle navigation" />
            </Group>
        </header>
        <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            padding="md"
            size="100%"
            hiddenFrom="sm"
            title={<Image src="/img/logo.png" alt="Velmora Logo" width={100} height={30} />}
            zIndex={10000000}
        >
            <ScrollArea h={"calc(100vh - 80px"} mx="-md">
                <Divider my="sm" />
                <a href="#" className={classes.link}>Home</a>
                {/* <a href="#" className={classes.link}>Products</a> */}
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>
                            Products
                        </Box>
                        <IconChevronDown size={16} color={theme.colors.blue[6]} />
                    </Center>
                </UnstyledButton>
                {/* {linksOpened && links} */}
                <Collapse expanded={linksOpened}>{links}</Collapse>
                <a href="#" className={classes.link}>About</a>
                <a href="#" className={classes.link}>Contact</a>
                <Group justify="center" grow pb="xl" px="md">
                    <Button variant="default">Login</Button>
                    <Button>Sign Up</Button>
                </Group>
            </ScrollArea>
        </Drawer>

    </Box>
  );
}
