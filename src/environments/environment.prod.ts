const chain = '88f718342bbfce834cee3644e3ab86a214ab4ce067445cd6778e6eb0f55f76ce';
export const environment = {
    production: true,
    appName: 'CCTweb',
    network: {
        blockchain: 'cct',
        host: 'bp.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://bp.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
        coin: 'CCT',
        bp: 'bp.json',
        tokenContract: 'eosio.token',
        totalBalance: 'CCT',
        convertToUSD: true,
        customBalance: false,
        logo: '/assets/images/eosweb.png',
        name: {
            big: 'cct',
            small: 'max'
        },
        nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: true },
        { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
        { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
        { name: 'WAX', url: 'https://wax.eosweb.net', active: false }],
        disableNets: false,
        voteDonationAcc: 'eoswebnetbp1',
        disableVoteDonation: false,
        version: '2.2.8',
        producers: 1000,
        social: [
            { link: 'https://github.com/orange1337/eosweb', icon: 'fa-github' },
            { link: 'https://www.facebook.com/EOSwebnet-199076424068961', icon: 'fa-facebook' },
            { link: 'https://www.reddit.com/user/eosweb', icon: 'fa-reddit-alien' },
            { link: 'https://medium.com/@EoswebN', icon: 'fa-medium' },
            { link: 'https://twitter.com/EoswebN', icon: 'fa-twitter' },
            { link: 'https://t.me/eoswebdevchat', icon: 'fa-telegram-plane' }
        ],
        liveTXenable: true
    }
};