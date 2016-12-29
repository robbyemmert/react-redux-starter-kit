import { Header, Footer } from '../components';

export const defaultLayout = page => ({
    header: Header,
    page: page,
    footer: Footer
})

export const customLayout = page => ({
    header: null,
    page: page,
    footer: null
})