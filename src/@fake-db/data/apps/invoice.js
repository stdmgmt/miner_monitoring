import mock from '@/@fake-db/mock'
import { paginateArray, sortCompare } from '@/@fake-db/utils'

/* eslint-disable global-require */
const data = {
  invoices: [
    {
      id: 4987,
      issuedDate: '13 Dec 2019',
      client: {
        address: '7777 Mendez Plains',
        company: 'Hall-Robbins PLC',
        companyEmail: 'don85@johnson.com',
        country: 'USA',
        contact: '(616) 865-4180',
        name: 'A01-01',
      },
      service: 'Software Development',
      total: 3428,
      avatar: '',
      invoiceStatus: 'S19-POOL-1',
      balance: '$724',
      dueDate: '23 Apr 2019',
    },
    {
      id: 4988,
      issuedDate: '17 Jul 2019',
      client: {
        address: '04033 Wesley Wall Apt. 961',
        company: 'Mccann LLC and Sons',
        companyEmail: 'brenda49@taylor.info',
        country: 'Haiti',
        contact: '(226) 204-8287',
        name: 'A01-02',
      },
      service: 'UI/UX Design & Development',
      total: 5219,
      avatar: '',
      invoiceStatus: 'S9-POOL-1',
      balance: 0,
      dueDate: '15 Dec 2019',
    },
    {
      id: 4989,
      issuedDate: '19 Oct 2019',
      client: {
        address: '5345 Robert Squares',
        company: 'Leonard-Garcia and Sons',
        companyEmail: 'smithtiffany@powers.com',
        country: 'Denmark',
        contact: '(955) 676-1076',
        name: 'A01-03',
      },
      service: 'Unlimited Extended License',
      total: 3719,
      avatar: '',
      invoiceStatus: 'S19-POOL-1',
      balance: 0,
      dueDate: '03 Nov 2019',
    },
    {
      id: 4990,
      issuedDate: '06 Mar 2020',
      client: {
        address: '19022 Clark Parks Suite 149',
        company: 'Smith, Miller and Henry LLC',
        companyEmail: 'mejiageorge@lee-perez.com',
        country: 'Cambodia',
        contact: '(832) 323-6914',
        name: 'A01-04',
      },
      service: 'Software Development',
      total: 4749,
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: '11 Feb 2020',
    },
    {
      id: 4991,
      issuedDate: '08 Feb 2020',
      client: {
        address: '8534 Saunders Hill Apt. 583',
        company: 'Garcia-Cameron and Sons',
        companyEmail: 'brandon07@pierce.com',
        country: 'Martinique',
        contact: '(970) 982-3353',
        name: 'A01-05',
      },
      service: 'UI/UX Design & Development',
      total: 4056,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$815',
      dueDate: '30 Jun 2019',
    },
    {
      id: 4992,
      issuedDate: '26 Aug 2019',
      client: {
        address: '661 Perez Run Apt. 778',
        company: 'Burnett-Young PLC',
        companyEmail: 'guerrerobrandy@beasley-harper.com',
        country: 'Botswana',
        contact: '(511) 938-9617',
        name: 'A01-06',
      },
      service: 'UI/UX Design & Development',
      total: 2771,
      avatar: '',
      invoiceStatus: 'S19-POOL-1',
      balance: 0,
      dueDate: '24 Jun 2019',
    },
    {
      id: 4993,
      issuedDate: '17 Sep 2019',
      client: {
        address: '074 Long Union',
        company: 'Wilson-Lee LLC',
        companyEmail: 'williamshenry@moon-smith.com',
        country: 'Montserrat',
        contact: '(504) 859-2893',
        name: 'A01-07',
      },
      service: 'UI/UX Design & Development',
      total: 2713,
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$407',
      dueDate: '22 Nov 2019',
    },
    {
      id: 4994,
      issuedDate: '11 Feb 2020',
      client: {
        address: '5225 Ford Cape Apt. 840',
        company: 'Schwartz, Henry and Rhodes Group',
        companyEmail: 'margaretharvey@russell-murray.com',
        country: 'Oman',
        contact: '(758) 403-7718',
        name: 'A01-08',
      },
      service: 'Template Customization',
      total: 4309,
      avatar: '',
      invoiceStatus: 'S19-POOL-1',
      balance: '-$205',
      dueDate: '10 Feb 2020',
    },
    {
      id: 4995,
      issuedDate: '26 Jan 2020',
      client: {
        address: '23717 James Club Suite 277',
        company: 'Henderson-Holder PLC',
        companyEmail: 'dianarodriguez@villegas.com',
        country: 'Cambodia',
        contact: '(292) 873-8254',
        name: 'A01-09',
      },
      service: 'Software Development',
      total: 3367,
      avatar: '',
      invoiceStatus: 'S9-POOL-1',
      balance: 0,
      dueDate: '24 Dec 2019',
    },
    {
      id: 4996,
      issuedDate: '15 Jan 2020',
      client: {
        address: '4528 Myers Gateway',
        company: 'Page-Wise PLC',
        companyEmail: 'bwilson@norris-brock.com',
        country: 'Guam',
        contact: '(956) 803-2008',
        name: 'A01-10',
      },
      service: 'Software Development',
      total: 4776,
      avatar: '',
      invoiceStatus: 'S9-POOL-1',
      balance: '$305',
      dueDate: '02 Jun 2019',
    },
    {
      id: 4997,
      issuedDate: '27 Sep 2019',
      client: {
        address: '4234 Mills Club Suite 107',
        company: 'Turner PLC Inc',
        companyEmail: 'markcampbell@bell.info',
        country: 'United States Virgin Islands',
        contact: '(716) 962-8635',
        name: 'B01-01',
      },
      service: 'Unlimited Extended License',
      total: 3789,
      avatar: '',
      invoiceStatus: 'L3-POOL-1',
      balance: '$666',
      dueDate: '18 Mar 2020',
    },
    {
      id: 4998,
      issuedDate: '31 Jul 2019',
      client: {
        address: '476 Keith Meadow',
        company: 'Levine-Dorsey PLC',
        companyEmail: 'mary61@rosario.com',
        country: 'Syrian Arab Republic',
        contact: '(523) 449-0782',
        name: 'B01-02',
      },
      service: 'Unlimited Extended License',
      total: 5200,
      avatar: '',
      invoiceStatus: 'L3-POOL-1',
      balance: 0,
      dueDate: '17 Jan 2020',
    },
    {
      id: 4999,
      issuedDate: '14 Feb 2020',
      client: {
        address: '56381 Ashley Village Apt. 332',
        company: 'Hall, Thompson and Ramirez LLC',
        companyEmail: 'sean22@cook.com',
        country: 'Ukraine',
        contact: '(583) 470-8356',
        name: 'B01-03',
      },
      service: 'Software Development',
      total: 4558,
      avatar: '',
      invoiceStatus: 'S19-POOL-1',
      balance: 0,
      dueDate: '01 Oct 2019',
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------
mock.onGet('/apps/invoice/invoices').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, sortBy = 'id', sortDesc = false, status = null } = config.params
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.invoices.filter(
    invoice =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (invoice.client.companyEmail.toLowerCase().includes(queryLowered) ||
        invoice.client.name.toLowerCase().includes(queryLowered)) &&
      invoice.invoiceStatus === (status || invoice.invoiceStatus),
  )
  /* eslint-enable  */

  const sortedData = filteredData.sort(sortCompare(sortBy))
  if (sortDesc) sortedData.reverse()

  return [
    200,
    {
      invoices: paginateArray(sortedData, perPage, page),
      total: filteredData.length,
    },
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet(/\/apps\/invoice\/invoices\/\d+/).reply(config => {
  // Get event id from URL
  let invoiceId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  invoiceId = Number(invoiceId)

  const invoiceIndex = data.invoices.findIndex(e => e.id === invoiceId)
  const invoice = data.invoices[invoiceIndex]
  const responseData = {
    invoice,
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905',
    },
  }

  if (invoice) return [200, responseData]
  return [404]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/apps/invoice/clients').reply(() => {
  const clients = data.invoices.map(invoice => invoice.client)
  return [200, clients.slice(0, 5)]
})
