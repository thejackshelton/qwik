import { component$ } from '@qwik.dev/core';
import { Button } from '../button/button';
import { QwikLogo } from '../svgs/qwik-logo';
import { navbar, lucide } from '@qds.dev/ui';
import navBlogImg from '../../media/navbar/nav-blog.png';
import navConceptsImg from '../../media/navbar/nav-concepts.png';
import navCookbooksImg from '../../media/navbar/nav-cookbooks.png';
import navIntegrationsImg from '../../media/navbar/nav-integrations.png';
import navQwikCoreImg from '../../media/navbar/nav-qwik-core.png';
import navRouterImg from '../../media/navbar/nav-router.png';
import navTutorialImg from '../../media/navbar/nav-tutorial.png';

type NavLink = {
  href: string;
  label: string;
  description: string | undefined;
  image: string | undefined;
  fullColumn?: boolean;
  halfHeight?: boolean;
};

const getImageObjectPosition = (link: NavLink) => {
  if (link.label === 'Icons') return 'center 80%';
  if (link.label === 'Composition') return '70% 90%';
  if (link.halfHeight) return 'center 75%';
  return 'center bottom';
};

const getGradientBackground = (link: NavLink) => {
  if (link.halfHeight) {
    return 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 35%, transparent 70%)';
  }
  return `linear-gradient(180deg, transparent 0%, transparent 75%, var(--color-light-950) 90%),
          radial-gradient(ellipse 180% 120% at 10% 90%, var(--color-light-950) 0%, transparent 40%)`;
};

const getContentGridTemplate = (label: string) => {
  const hasMultipleColumns = ['UI', 'Tools', 'Learn'].includes(label);
  return {
    gridTemplateColumns: hasMultipleColumns ? '1fr 1fr' : '1fr',
    gridTemplateRows: label === 'Tools' ? 'max-content max-content' : 'max-content',
  };
};

export const Header = component$(() => {
  // TODO: fix to correct links from the docs site
  const navData = [
    {
      href: '/',
      label: 'QDS',
      icon: <QwikLogo width={25.58} height={27.13} />,
    },
    {
      label: 'Core',
      links: [
        {
          href: '/',
          label: 'Qwik Core',
          description: "What's inside the core framework?",
          image: navQwikCoreImg,
        },
        {
          href: '/tutorial',
          label: 'Your first app',
          description: 'A guided tutorial',
          image: navTutorialImg,
        },
      ],
    },
    {
      label: 'Ecosystem',
      links: [
        {
          href: '/integrations',
          label: 'Integrations',
          description: 'Find tools you can use out-of-the-box with Qwik',
          image: navIntegrationsImg,
        },
        {
          href: '/components/icons',
          label: 'Cookbooks',
          description: 'Guides, recipes and examples',
          image: navCookbooksImg,
        },
      ],
    },
    {
      label: 'Router',
      links: [
        {
          href: '/router',
          label: 'Qwik Router',
          description: 'A fast way to start iterating with Qwik apps',
          image: navRouterImg,
        },
      ],
    },
    {
      label: 'Resources',
      links: [
        {
          href: '/blog',
          label: 'Blog',
          description: 'Latest news and updates',
          image: navBlogImg,
        },
        {
          href: '/concepts',
          label: 'Concepts',
          description: 'Think Qwik',
          image: navConceptsImg,
        },
      ],
    },
  ];

  const firstItem = navData[0];
  const restOfItems = navData.slice(1);

  return (
    <navbar.root class="hidden xl:flex items-center justify-between px-6 bg-white fixed top-6 w-full rounded-2xl border-[1.6px] border-blue-300 max-w-[600px] shadow-[6px_6px_0_0px_var(--color-blue-200)]">
      <a href={firstItem.href} class="flex items-center gap-2">
        {firstItem.icon}
        <span class="font-arcade text-2xl ">{firstItem.label}</span>
      </a>
      <div class="flex items-center">
        {restOfItems.map((item) => (
          <navbar.item key={item.label} class="relative" ui-navbar-item>
            <navbar.itemtrigger
              class="w-fit flex items-center gap-2 group ui-open:text-blue-600 transition-colors duration-200 px-5 h-[76px]"
              ui-mega-collapsible
            >
              <span>{item.label}</span>
            </navbar.itemtrigger>
            <navbar.itemcontent
              class="open:grid gap-4 shadow-[6px_6px_0_0px_var(--color-blue-200)] rounded-2xl p-4 border-[1.6px] border-blue-300 transition-[opacity,display,overlay] transition-discrete duration-325 ease-in-out open:animate-to-visible not-open:animate-from-visible opacity-0"
              style={{ ...getContentGridTemplate(item.label), width: '600px' }}
              ui-mega-popover
            >
              {item.links?.map((link) => {
                const navLink = link as NavLink;
                const imageHeight = navLink.halfHeight ? 'h-32' : 'h-70';
                const imageClasses = `w-full ${imageHeight} object-cover group-hover:scale-105 focus-visible:scale-105 transition-transform duration-300 will-change-transform`;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    class="flex flex-col gap-2 relative rounded-lg overflow-hidden border-2 border-[#94B0E4] group"
                    // style={getGridStyles(item, navLink)}
                  >
                    {link.image && (
                      <img
                        src={link.image}
                        alt=""
                        class={imageClasses}
                        style={{ objectPosition: getImageObjectPosition(navLink) }}
                      />
                    )}
                    <div
                      class="absolute inset-0 pointer-events-none"
                      style={{ background: getGradientBackground(navLink) }}
                    />
                    <div class="flex flex-col p-2 absolute bottom-0 w-full">
                      <span class="font-semibold text-white">{link.label}</span>
                      {link.description && (
                        <span class="text-sm text-light-300">{link.description}</span>
                      )}
                    </div>
                  </a>
                );
              })}
            </navbar.itemcontent>
          </navbar.item>
        ))}
      </div>
      <navbar.item>
        <Button variant="primary">
          <span>Get Started</span>
          <lucide.arrowright class="size-4" />
        </Button>
      </navbar.item>
    </navbar.root>
  );
});
