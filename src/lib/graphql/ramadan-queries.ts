import { gql } from 'graphql-request';

export const recentRamadansQuery = gql`
query GetRecentRamadans {
    ramadans(first: 99999999) {
        id
        title
        date
        imsak
        subuh
        terbit
        dhuha
        zuhur
        ashar
        maghrib
        isya
    }
}
`;