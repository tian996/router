import style from './style.scss';
import React from 'react';
import { Spin } from 'antd';

/**
 * @desc loading
 */

export default function (props) {
    return (
        <div className={style.loading}>
            <Spin size="large" />
        </div>
    );
}