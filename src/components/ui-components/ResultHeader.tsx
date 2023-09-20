import React, {FC, useState} from "react";
import {useTranslation} from 'react-i18next';

interface ResultHeaderProps {
    searchResultsCount: number,
}

export const ResultHeader:FC<ResultHeaderProps> = ({searchResultsCount}) => {

    const {t, i18n} = useTranslation();
    const [headerState, setHeaderState] = useState('Search results');

    return (
        <div className={"header"}>
            {searchResultsCount > 0 ? (
                <>
                    <h1>{t(headerState)}</h1>
                    <h2 style={{marginTop: 20}}>{searchResultsCount}</h2>
                </>
            ) : (<h1>{t('Unfortunately, no  products found')}</h1>)

            }
        </div>
    );
};