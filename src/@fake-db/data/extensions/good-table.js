import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      avatar: require('@/assets/images/avatars/10-small.png'),
      fullName: "S19J",
      email: '110TH/s',
      startDate: '600w',
      salary: '600',
      status: 'A',
    },
    {
      id: 2,
      avatar: require('@/assets/images/avatars/1-small.png'),
      fullName: 'S9',
      email: '20TH/s',
      startDate: '200w',
      salary: '500',
      status: 'A',
    },
    {
      id: 3,
      avatar: require('@/assets/images/avatars/9-small.png'),
      fullName: 'L3',
      email: '504MH/s',
      startDate: '100w',
      salary: '200',
      status: 'B',
    },
    {
      id: 4,
      avatar: require('@/assets/images/avatars/3-small.png'),
      fullName: 'S17',
      email: '40TH/s',
      startDate: '500w',
      salary: '400',
      status: 'A',
    },
    {
      id: 5,
      avatar: require('@/assets/images/avatars/4-small.png'),
      fullName: 'S17++',
      email: '50TH/s',
      startDate: '500w',
      salary: '400',
      status: 'B',
    },
  ],

  tableBasic2: [
    {
      id: 1,
      avatar: require('@/assets/images/avatars/10-small.png'),
      fullName: "S19J-1",
      email: 'Min: 100TH/s',
      startDate: 'Min: 600',
      salary: 'Max 650w',
      status: 'Alarm',
    },
    {
      id: 2,
      avatar: require('@/assets/images/avatars/1-small.png'),
      fullName: 'S19J-2',
      email: 'Min: 80TH/s, Max: 100TH/s',
      startDate: 'Min: 400, Max: 600',
      salary: 'Min 500w Max 600w',
      status: 'Reboot',
    },
    {
      id: 3,
      avatar: require('@/assets/images/avatars/9-small.png'),
      fullName: 'S19J-3',
      email: 'Min: 60TH/s, Max: 504MH/s',
      startDate: 'Min: 200, Max: 400',
      salary: 'Min 400w Max 500w',
      status: 'Showdown',
    },
    {
      id: 4,
      avatar: require('@/assets/images/avatars/3-small.png'),
      fullName: 'S9-1',
      email: 'Min: 60TH/s, Max: 504MH/s',
      startDate: 'Min: 200, Max: 400',
      salary: 'Min 300w Max 400w',
      status: 'Reboot',
    },
    {
      id: 5,
      avatar: require('@/assets/images/avatars/4-small.png'),
      fullName: 'S9-1',
      email: 'Min: 60TH/s, Max:504MH/s',
      startDate: 'Min: 200, Max: 400',
      salary: 'Min 200w Max 300w',
      status: 'Shutdown',
    },
  ],

  tableRowGrp: [
    {
      mode: 'span',
      label: 'Accountant',
      html: false,
      children: [
        {
          id: 1,
          avatar: require('@/assets/images/avatars/10-small.png'),
          fullName: "Korrie O'Crevy",
          email: 'kocrevy0@thetimes.co.uk',
          startDate: '09/23/2016',
          salary: '$23896.35',
          experience: '1 Year',
          status: 'Professional',
        },
      ],
    },
    {
      mode: 'span',
      label: 'Actuary',
      children: [
        {
          id: 2,
          avatar: require('@/assets/images/avatars/1-small.png'),
          fullName: 'Bailie Coulman',
          email: 'bcoulman1@yolasite.com',
          startDate: '05/20/2018',
          salary: '$13633.69',
          status: 'Current',
        },
      ],
    },
    {
      mode: 'span',
      label: 'Administrative Assistan',
      children: [
        {
          id: 3,
          avatar: require('@/assets/images/avatars/9-small.png'),
          fullName: 'Stella Ganderton',
          email: 'sganderton2@tuttocitta.it',
          startDate: '03/24/2018',
          salary: '$13076.28',
          status: 'Applied',
        },
        {
          id: 4,
          avatar: require('@/assets/images/avatars/3-small.png'),
          fullName: 'Dorolice Crossman',
          email: 'dcrossman3@google.co.jp',
          startDate: '12/03/2017',
          salary: '$12336.17',
          status: 'Professional',
        },
        {
          id: 5,
          avatar: require('@/assets/images/avatars/4-small.png'),
          fullName: 'Harmonia Nisius',
          email: 'hnisius4@gnu.org',
          startDate: '08/25/2017',
          salary: '$10909.52',
          status: 'Resigned',
        },
      ],
    },
    {
      mode: 'span',
      label: 'Analog Circuit Design manager',
      children: [
        {
          id: 6,
          avatar: require('@/assets/images/avatars/5-small.png'),
          fullName: 'Genevra Honeywood',
          email: 'ghoneywood5@narod.ru',
          startDate: '06/01/2017',
          salary: '$17803.8',
          experience: '1 Year',
          status: 'Current',
        },
        {
          id: 7,
          avatar: require('@/assets/images/avatars/7-small.png'),
          fullName: 'Eileen Diehn',
          email: 'ediehn6@163.com',
          startDate: '10/15/2017',
          salary: '$18991.67',
          status: 'Professional',
        },
      ],
    },
    {
      mode: 'span',
      label: 'Analyst Programmer',
      children: [
        {
          id: 8,
          avatar: require('@/assets/images/avatars/9-small.png'),
          fullName: 'Richardo Aldren',
          email: 'raldren7@mtv.com',
          startDate: '11/05/2016',
          salary: '$19230.13',
          status: 'Rejected',
        },
        {
          id: 9,
          avatar: require('@/assets/images/avatars/2-small.png'),
          fullName: 'Allyson Moakler',
          email: 'amoakler8@shareasale.com',
          startDate: '12/29/2018',
          salary: '$11677.32',
          status: 'Applied',
        },
        {
          id: 10,
          avatar: require('@/assets/images/avatars/6-small.png'),
          fullName: 'Merline Penhalewick',
          email: 'mpenhalewick9@php.net',
          startDate: '04/19/2019',
          salary: '$15939.52',
          status: 'Professional',
        },
      ],
    },
  ],

  tableAdvancedSearch: [
    {
      id: 1,
      avatar: require('@/assets/images/avatars/10-small.png'),
      fullName: "Korrie O'Crevy",
      post: 'Nuclear Power Engineer',
      email: 'kocrevy0@thetimes.co.uk',
      city: 'Krasnosilka',
      startDate: '09/23/2016',
      salary: '$23896.35',
    },
    {
      id: 2,
      avatar: require('@/assets/images/avatars/1-small.png'),
      fullName: 'Bailie Coulman',
      post: 'VP Quality Control',
      email: 'bcoulman1@yolasite.com',
      city: 'Hinigaran',
      startDate: '05/20/2018',
      salary: '$13633.69',
    },
    {
      id: 3,
      avatar: require('@/assets/images/avatars/9-small.png'),
      fullName: 'Stella Ganderton',
      post: 'Operator',
      email: 'sganderton2@tuttocitta.it',
      city: 'Golcowa',
      startDate: '03/24/2018',
      salary: '$13076.28',
    },
    {
      id: 4,
      avatar: require('@/assets/images/avatars/3-small.png'),
      fullName: 'Dorolice Crossman',
      post: 'Cost Accountant',
      email: 'dcrossman3@google.co.jp',
      city: 'Paquera',
      startDate: '12/03/2017',
      salary: '$12336.17',
    },
    {
      id: 5,
      avatar: require('@/assets/images/avatars/4-small.png'),
      fullName: 'Harmonia Nisius',
      post: 'Senior Cost Accountant',
      email: 'hnisius4@gnu.org',
      city: 'Lucan',
      startDate: '08/25/2017',
      salary: '$10909.52',
    },
    {
      id: 6,
      avatar: require('@/assets/images/avatars/5-small.png'),
      fullName: 'Genevra Honeywood',
      post: 'Geologist',
      email: 'ghoneywood5@narod.ru',
      city: 'Maofan',
      startDate: '06/01/2017',
      salary: '$17803.8',
    },
    {
      id: 7,
      avatar: require('@/assets/images/avatars/7-small.png'),
      fullName: 'Eileen Diehn',
      post: 'Environmental Specialist',
      email: 'ediehn6@163.com',
      city: 'Lampuyang',
      startDate: '10/15/2017',
      salary: '$18991.67',
    },
    {
      id: 8,
      avatar: require('@/assets/images/avatars/9-small.png'),
      fullName: 'Richardo Aldren',
      post: 'Senior Sales Associate',
      email: 'raldren7@mtv.com',
      city: 'Skoghall',
      startDate: '11/05/2016',
      salary: '$19230.13',
    },
    {
      id: 9,
      avatar: require('@/assets/images/avatars/2-small.png'),
      fullName: 'Allyson Moakler',
      post: 'Safety Technician',
      email: 'amoakler8@shareasale.com',
      city: 'Mogilany',
      startDate: '12/29/2018',
      salary: '$11677.32',
    },
    {
      id: 10,
      avatar: require('@/assets/images/avatars/6-small.png'),
      fullName: 'Merline Penhalewick',
      post: 'Junior Executive',
      email: 'mpenhalewick9@php.net',
      city: 'Kanuma',
      startDate: '04/19/2019',
      salary: '$15939.52',
    },
  ],
  tableSsr: [
    {
      id: 1,
      avatar: require('@/assets/images/avatars/10-small.png'),
      fullName: "Korrie O'Crevy",
      email: 'kocrevy0@thetimes.co.uk',
      startDate: '09/23/2016',
      salary: '$23896.35',
      status: 'Professional',
    },
    {
      id: 2,
      avatar: require('@/assets/images/avatars/1-small.png'),
      fullName: 'Bailie Coulman',
      email: 'bcoulman1@yolasite.com',
      startDate: '05/20/2018',
      salary: '$13633.69',
      status: 'Resigned',
    },
    {
      id: 3,
      avatar: require('@/assets/images/avatars/9-small.png'),
      fullName: 'Stella Ganderton',
      email: 'sganderton2@tuttocitta.it',
      startDate: '03/24/2018',
      salary: '$13076.28',
      status: 'Professional',
    },
    {
      id: 4,
      avatar: require('@/assets/images/avatars/3-small.png'),
      fullName: 'Dorolice Crossman',
      email: 'dcrossman3@google.co.jp',
      startDate: '12/03/2017',
      salary: '$12336.17',
      status: 'Applied',
    },
    {
      id: 5,
      avatar: require('@/assets/images/avatars/4-small.png'),
      fullName: 'Harmonia Nisius',
      email: 'hnisius4@gnu.org',
      startDate: '08/25/2017',
      salary: '$10909.52',
      status: 'Professional',
    },
  ],
  /* eslint-disable global-require */
}

mock.onGet('/good-table/basic').reply(() => [200, data.tableBasic])
mock.onGet('/good-table/basic2').reply(() => [200, data.tableBasic2])
mock.onGet('/good-table/row-group').reply(() => [200, data.tableRowGrp])
mock.onGet('/good-table/advanced-search').reply(() => [200, data.tableAdvancedSearch])
mock.onGet('/good-table/table_ssr').reply(() => [200, data.tableSsr])
