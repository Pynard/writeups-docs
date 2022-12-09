import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/writeups-docs/__docusaurus/debug',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug', '6c8'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/config',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/config', 'c9e'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/content',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/content', 'e2d'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/globalData', '82b'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/metadata', 'e3f'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/registry', '514'),
    exact: true
  },
  {
    path: '/writeups-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/writeups-docs/__docusaurus/debug/routes', '073'),
    exact: true
  },
  {
    path: '/writeups-docs/markdown-page',
    component: ComponentCreator('/writeups-docs/markdown-page', 'd93'),
    exact: true
  },
  {
    path: '/writeups-docs/docs',
    component: ComponentCreator('/writeups-docs/docs', 'd60'),
    routes: [
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/', '3d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/roppy_ropper',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/roppy_ropper', '49a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/shellcode',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/shellcode', 'e19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/string',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/string', 'dfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/target1',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/target1', 'a5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/target2',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/target2', 'fa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/vulnerable_adventure',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/vulnerable_adventure', '04c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BOOT2ROOT/challenges/vulnerable_adventure_2',
        component: ComponentCreator('/writeups-docs/docs/2020/BOOT2ROOT/challenges/vulnerable_adventure_2', '0d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/', 'd3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/android',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/android', '54a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/birdcall',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/birdcall', 'dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/cookies',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/cookies', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/evidence',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/evidence', '29e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/fast_enough',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/fast_enough', '10f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/goodbye',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/goodbye', '750'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/keep_walking',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/keep_walking', '143'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/message_from_space',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/message_from_space', '111'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/no_peeking',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/no_peeking', 'b79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/punchcard',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/punchcard', '229'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/quizbot',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/quizbot', 'cfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/registereme',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/registereme', '70a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/salty',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/salty', 'ddd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/scan_me',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/scan_me', '38d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/BRIXEL/challenges/tape',
        component: ComponentCreator('/writeups-docs/docs/2020/BRIXEL/challenges/tape', '8e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/HXP/',
        component: ComponentCreator('/writeups-docs/docs/2020/HXP/', '383'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/HXP/challenges/find_the_chicken',
        component: ComponentCreator('/writeups-docs/docs/2020/HXP/challenges/find_the_chicken', '5fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/', 'e94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/bson',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/bson', '9c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/encrypted_storage_1',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/encrypted_storage_1', '953'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/fcnspeciale',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/fcnspeciale', 'e92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/happy_new_year_1',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/happy_new_year_1', '085'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/happy_new_year_2',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/happy_new_year_2', 'd11'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/motorsounds',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/motorsounds', 'c6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/rgb_cadets',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/rgb_cadets', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2020/KKS/challenges/welcome',
        component: ComponentCreator('/writeups-docs/docs/2020/KKS/challenges/welcome', '28b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/', '828'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/fake_canary',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/fake_canary', '7e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/flip_flop',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/flip_flop', 'e5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/formatting',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/formatting', 'b5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/imaginary',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/imaginary', 'f6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/roos_world',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/roos_world', '67d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/speedrun',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/speedrun', 'cfe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/spelling_test',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/spelling_test', 'c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stackoverflow',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stackoverflow', 'cb9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stings',
        component: ComponentCreator('/writeups-docs/docs/2021/IMAGINARYCTF/challenges/stings', '231'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/', '4a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/archer',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/archer', '95a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/babycrypt',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/babycrypt', '25b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/dotty',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/dotty', 'b55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/fancy_button_generator',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/fancy_button_generator', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/infinite_free_trial',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/infinite_free_trial', '1e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/rarpg',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/rarpg', '7a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/srsa',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/srsa', 'c17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/2021/RARCTF/challenges/verybabyrev',
        component: ComponentCreator('/writeups-docs/docs/2021/RARCTF/challenges/verybabyrev', '7c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/category/2020',
        component: ComponentCreator('/writeups-docs/docs/category/2020', '0d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/category/2021',
        component: ComponentCreator('/writeups-docs/docs/category/2021', 'de0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/writeups-docs/docs/intro',
        component: ComponentCreator('/writeups-docs/docs/intro', 'fd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/writeups-docs/',
    component: ComponentCreator('/writeups-docs/', 'ec4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
