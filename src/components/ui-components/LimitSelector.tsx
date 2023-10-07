import React, {FC, useState} from "react";
import {useTranslation} from 'react-i18next';

interface LimitSelectorProps {
    performAction?: any,
}

export const LimitSelector:FC<LimitSelectorProps> = ({performAction}) => {
    const {t, i18n} = useTranslation();
    const [chosenLimit, setChosenLimit] = useState('20');
    return (
        <div className={"selector"}>
            <label className={"limitSelectorLabel"} htmlFor="limitSelector">{t('Items on page')}  </label>
            <select className={"customSelect"} name="limitSelector" id="" value={chosenLimit}
                    onChange={(event) => {
                        setChosenLimit(event.target.value);
                        performAction(event.target.value);
                    }} >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
    )
};